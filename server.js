const express = require('express');
const { S3Client, PutObjectCommand,ListObjectsCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const bodyParser = require('body-parser');
const stream = require('stream');
const { parse } = require('csv-parse/sync'); // Library for parsing CSV
const csv = require('csv-parser'); // CSV parser for handling CSV files
const { stringify } = require('csv-stringify/sync'); // Library for converting back to CSV
const { v4: uuidv4 } = require('uuid'); // UUID library
const { Upload } = require("@aws-sdk/lib-storage");




const app = express();
const port = process.env.PORT || 3000;

const s3 = new S3Client({
    region: 'us-east-2' // Specify your region
});

const bucketName = 'cheeselehigh';

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '256gb' }));


// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/uuid',(req,res) => {
    const uuidStr = uuidv4();
    res.send(uuidStr);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



// Handle video upload
app.post('/upload/video', async (req, res) => {
    const video_dir = req.body.userUUID + '/';
    const fileName = video_dir + `recorded-video-${Date.now()}.webm`; // Generate a unique file name

    try {
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: req.body,
            ContentType: 'video/webm', // Change this if your video is in a different format
        };

        const data = await s3.send(new PutObjectCommand(params));
        res.json({ message: 'Video uploaded successfully', data });
    } catch (err) {
        console.error('Error uploading video:', err);
        res.status(500).json({ error: 'Error uploading video', details: err });
    }
});

app.post('/upload/data', async (req, res) => {
    const data_dir = `${req.body.userUUID}/`;

    console.log("Server: " + req.body.userUUID)

    const fileName = data_dir + `atom.csv`; // Generate a unique file name

    try {
        // Parse the CSV string into rows
        let records = parse(req.body.csvString, { columns: true });

        // Add the 'participantUUID' column to each row
        records = records.map(row => ({
            ...row,
            participantUUID: req.body.userUUID // Add the new UUID for each row
        }));

        // Convert the updated data back to CSV format
        const updatedCsvString = stringify(records, { header: true });

        // Set up the S3 upload parameters
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: updatedCsvString,
            ContentType: 'text/csv',
        };

        // Upload the CSV to S3
        const data = await s3.send(new PutObjectCommand(params));
        res.json({ message: 'Data uploaded successfully', data });
    } catch (err) {
        console.error('Error uploading data:', err);
        res.status(500).json({ error: 'Error uploading data', details: err });
    }
});

app.post('/upload/data/audio', async (req, res) => {
    const data_dir = `${req.body.userUUID}/`;
    const fileName = data_dir + `${req.body.trialIndex}.wav`;

    try {
        // Decode base64 audio data
        const base64Data = req.body.base64.replace(/^data:audio\/wav;base64,/, '');
        const audioBuffer = Buffer.from(base64Data, 'base64');

        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: audioBuffer,
            ContentType: 'audio/wav',
        };

        const data = await s3.send(new PutObjectCommand(params));
        res.json({ message: 'Data uploaded successfully', data });
    } catch (err) {
        console.error('Error uploading data:', err);
        res.status(500).json({ error: 'Error uploading data', details: err.message });
    }
});

app.post('/upload/data/video', async (req, res) => {

    const data_dir = `${req.body.userUUID}/`;
    const fileName = data_dir + `${req.body.userUUID}.wav`;


    try {
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: req.body.binaryData,
            ContentType: 'video/webm', // Change this if your video is in a different format
        };

        const data = await s3.send(new PutObjectCommand(params));
        res.json({ message: 'Video uploaded successfully', data });
    } catch (err) {
        console.error('Error uploading video:', err);
        res.status(500).json({ error: 'Error uploading video', details: err });
    }
});



app.get('/s3/get-object/bucket/:bucket/key/:key', async (req, res) => {
    console.log("req.query", req.query);
    console.log("req.params", req.params);

    const input = {
        Bucket: req.params.bucket,
        Key: req.params.key,
    };

    const command = new GetObjectCommand(input);

    try {
        const response = await s3.send(command);

        // Get the stream from the response
        const responseStream = response.Body;

        // Check if the response is a readable stream
        if (responseStream instanceof stream.Readable) {
            let csvData = [];

            // Parse CSV data from the stream
            responseStream
                .pipe(csv())
                .on('data', (row) => {
                    //console.log(row);
                    csvData.push(row); // Each row is an object where keys are the CSV column headers
                })
                .on('end', () => {
                    //console.log(csvData)
                    res.json(csvData); // Send the parsed CSV data as JSON response
                })
                .on('error', (parseError) => {
                    console.error('Error parsing CSV:', parseError);
                    res.status(500).json({ error: 'Failed to parse CSV', details: parseError.message });
                });

        } else {
            throw new Error('Failed to retrieve the S3 object stream');
        }
    } catch (error) {
        console.error('Error retrieving object from S3:', error);
        res.status(500).json({ error: 'Failed to retrieve object from S3', details: error.message });
    }
});

app.get('/get/data/bucket/:bucket/key/:dir/:file', async (req, res) => {
    console.log("req.query", req.query);
    console.log("req.params", req.params);

    const input = {
        Bucket: req.params.bucket,
        Key: req.params.dir + '/' + req.params.file,
    };

    const command = new GetObjectCommand(input);

    try {
        const response = await s3.send(command);

        // Get the stream from the response
        const responseStream = response.Body;

        // Check if the response is a readable stream
        if (responseStream instanceof stream.Readable) {
            let csvData = [];

            // Parse CSV data from the stream
            responseStream
                .pipe(csv())
                .on('data', (row) => {
                    //console.log(row);
                    csvData.push(row); // Each row is an object where keys are the CSV column headers
                })
                .on('end', () => {
                    //console.log(csvData)
                    res.json(csvData); // Send the parsed CSV data as JSON response
                })
                .on('error', (parseError) => {
                    console.error('Error parsing CSV:', parseError);
                    res.status(500).json({ error: 'Failed to parse CSV', details: parseError.message });
                });

        } else {
            throw new Error('Failed to retrieve the S3 object stream');
        }
    } catch (error) {
        console.error('Error retrieving object from S3:', error);
        res.status(500).json({ error: 'Failed to retrieve object from S3', details: error.message });
    }
});

app.get('/get/wav/bucket/:bucket/key/:dir/:file', async (req, res) => {
    console.log("req.params", req.params);

    const input = {
        Bucket: req.params.bucket,
        Key: `${req.params.dir}/${req.params.file}`,
    };

    const command = new GetObjectCommand(input);

    try {
        const response = await s3.send(command);

        const responseStream = response.Body;

        if (responseStream instanceof stream.Readable) {
            res.setHeader('Content-Type', 'audio/wav');
            res.setHeader('Content-Disposition', `inline; filename="${req.params.file}"`);

            responseStream.pipe(res);
        } else {
            throw new Error('Failed to retrieve the S3 object stream');
        }
    } catch (error) {
        console.error('Error retrieving object from S3:', error);
        res.status(500).json({ error: 'Failed to retrieve object from S3', details: error.message });
    }
});
app.get('/s3/list-objects', async (req, res) => {
    const input = {
      Bucket: bucketName,  // Replace with your actual bucket name
      MaxKeys: 100,               // Limit the number of objects returned
    };
  
    const command = new ListObjectsCommand(input);
  
    try {
      const response = await s3.send(command);
      res.json({
        message: 'Objects retrieved successfully',
        data: response.Contents,
      });
    } catch (error) {
      console.error('Error listing objects from S3:', error);
      res.status(500).json({ error: 'Failed to list objects from S3', details: error.message });
    }
});