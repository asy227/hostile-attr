const express = require('express');
const AWS = require('aws-sdk'); // Using AWS SDK v2 instead of v3
const bodyParser = require('body-parser');
const stream = require('stream');
const csvParse = require('csv-parse'); // Different import for older version
const csvStringify = require('csv-stringify'); // Different import for older version
const uuidv4 = require('uuid/v4'); // Different import for older UUID version
const app = express();
const port = process.env.PORT || 3000;

// Configure AWS SDK v2
AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3();
const bucketName = 'cheeselehigh';

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '256gb' }));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/uuid', (req, res) => {
    const uuidStr = uuidv4();
    res.send(uuidStr);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Handle video upload
app.post('/upload/video', (req, res) => {
    const video_dir = req.body.userUUID + '/';
    const fileName = video_dir + `recorded-video-${Date.now()}.webm`;

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: req.body,
        ContentType: 'video/webm',
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.error('Error uploading video:', err);
            return res.status(500).json({ error: 'Error uploading video', details: err });
        }
        res.json({ message: 'Video uploaded successfully', data });
    });
});

app.post('/upload/data', (req, res) => {
    const data_dir = `${req.body.userUUID}/`;
    const fileName = data_dir + `atom.csv`;

    csvParse(req.body.csvString, { columns: true }, (parseErr, records) => {
        if (parseErr) {
            console.error('Error parsing CSV:', parseErr);
            return res.status(500).json({ error: 'Error parsing CSV', details: parseErr });
        }

        // Add the 'participantUUID' column to each row
        records = records.map(row => ({
            ...row,
            participantUUID: req.body.userUUID
        }));

        csvStringify(records, { header: true }, (stringifyErr, updatedCsvString) => {
            if (stringifyErr) {
                console.error('Error stringifying CSV:', stringifyErr);
                return res.status(500).json({ error: 'Error converting to CSV', details: stringifyErr });
            }

            const params = {
                Bucket: bucketName,
                Key: fileName,
                Body: updatedCsvString,
                ContentType: 'text/csv',
            };

            s3.upload(params, (uploadErr, data) => {
                if (uploadErr) {
                    console.error('Error uploading data:', uploadErr);
                    return res.status(500).json({ error: 'Error uploading data', details: uploadErr });
                }
                res.json({ message: 'Data uploaded successfully', data });
            });
        });
    });
});

app.post('/upload/data/audio', (req, res) => {
    const data_dir = `${req.body.userUUID}/`;
    const fileName = data_dir + `${req.body.trialIndex}.wav`;

    try {
        const base64Data = req.body.base64.replace(/^data:audio\/wav;base64,/, '');
        const audioBuffer = Buffer.from(base64Data, 'base64');

        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: audioBuffer,
            ContentType: 'audio/wav',
        };

        s3.upload(params, (err, data) => {
            if (err) {
                console.error('Error uploading audio:', err);
                return res.status(500).json({ error: 'Error uploading audio', details: err });
            }
            res.json({ message: 'Audio uploaded successfully', data });
        });
    } catch (err) {
        console.error('Error processing audio:', err);
        res.status(500).json({ error: 'Error processing audio', details: err.message });
    }
});

app.post('/upload/data/video', (req, res) => {
    const data_dir = `${req.body.userUUID}/`;
    const fileName = data_dir + `${req.body.userUUID}.wav`;

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: req.body.binaryData,
        ContentType: 'video/webm',
    };

    s3.upload(params, (err, data) => {
        if (err) {
            console.error('Error uploading video:', err);
            return res.status(500).json({ error: 'Error uploading video', details: err });
        }
        res.json({ message: 'Video uploaded successfully', data });
    });
});

app.get('/s3/get-object/bucket/:bucket/key/:key', (req, res) => {
    const params = {
        Bucket: req.params.bucket,
        Key: req.params.key,
    };

    s3.getObject(params, (err, data) => {
        if (err) {
            console.error('Error retrieving object from S3:', err);
            return res.status(500).json({ error: 'Failed to retrieve object from S3', details: err.message });
        }

        const responseStream = new stream.PassThrough();
        responseStream.end(data.Body);

        let csvData = [];
        responseStream
            .pipe(csvParse({ columns: true }))
            .on('data', (row) => {
                csvData.push(row);
            })
            .on('end', () => {
                res.json(csvData);
            })
            .on('error', (parseError) => {
                console.error('Error parsing CSV:', parseError);
                res.status(500).json({ error: 'Failed to parse CSV', details: parseError.message });
            });
    });
});

app.get('/get/data/bucket/:bucket/key/:dir/:file', (req, res) => {
    const params = {
        Bucket: req.params.bucket,
        Key: req.params.dir + '/' + req.params.file,
    };

    s3.getObject(params, (err, data) => {
        if (err) {
            console.error('Error retrieving object from S3:', err);
            return res.status(500).json({ error: 'Failed to retrieve object from S3', details: err.message });
        }

        const responseStream = new stream.PassThrough();
        responseStream.end(data.Body);

        let csvData = [];
        responseStream
            .pipe(csvParse({ columns: true }))
            .on('data', (row) => {
                csvData.push(row);
            })
            .on('end', () => {
                res.json(csvData);
            })
            .on('error', (parseError) => {
                console.error('Error parsing CSV:', parseError);
                res.status(500).json({ error: 'Failed to parse CSV', details: parseError.message });
            });
    });
});

app.get('/get/wav/bucket/:bucket/key/:dir/:file', (req, res) => {
    const params = {
        Bucket: req.params.bucket,
        Key: `${req.params.dir}/${req.params.file}`,
    };

    s3.getObject(params, (err, data) => {
        if (err) {
            console.error('Error retrieving object from S3:', err);
            return res.status(500).json({ error: 'Failed to retrieve object from S3', details: err.message });
        }

        res.setHeader('Content-Type', 'audio/wav');
        res.setHeader('Content-Disposition', `inline; filename="${req.params.file}"`);
        res.send(data.Body);
    });
});

app.get('/s3/list-objects', (req, res) => {
    const params = {
        Bucket: bucketName,
        MaxKeys: 100,
    };

    s3.listObjects(params, (err, data) => {
        if (err) {
            console.error('Error listing objects from S3:', err);
            return res.status(500).json({ error: 'Failed to list objects from S3', details: err.message });
        }
        res.json({
            message: 'Objects retrieved successfully',
            data: data.Contents,
        });
    });
});