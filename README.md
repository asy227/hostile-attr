# **Hostile Attribution Bias Task**
Part of the Childhood Environment, Emotions, and Social Engagement (ChEESE) research team under Dr. Danming An at Lehigh University's Psychology Dept.  
  
Collaborator: Keith Kreschollek  

This application is meant to measure how children attribute the behaviors of others and their use of hostile attributions to interpret behaviors. The children are read 10 vignettes, which include illustrations for the child to look at. Each vignette asks the child to imagine they are in a certain social situation in which another child engages with them in some form of social behavior.  
  
For example, one vignette asks them to imagine they are carrying a lunch tray when suddenly another child bumps into their arm and you spill all your food. The child is then asked if they feel the behavior was on purpose or on accident, what the other child would likely do next, and how they themselves would react in the situation. The children’s answers are audio and video recorded for later transcription and data analysis.
  
## Dependencies

This project was built with the following main libraries and tools:

**Frontend:**
- [jsPsych](https://www.jspsych.org/) — Core framework for building browser-based psychology experiments  
  - Multiple jsPsych plugins were used (e.g., button-response, image-response, audio-response) to present vignettes and record participant responses
  
**Backend:**
- [Express](https://expressjs.com/) — Web server to host the experiment and manage API routes  
- [AWS SDK for JavaScript (v3)](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/) — For securely uploading participant audio/video data to AWS S3  
- [uuid](https://www.npmjs.com/package/uuid) — Generate unique participant identifiers  
- [csv-parser](https://www.npmjs.com/package/csv-parser), [csv-parse](https://csv.js.org/parse/), [csv-stringify](https://csv.js.org/stringify/) — Data handling and CSV export

