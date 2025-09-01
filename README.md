# Hostile Attribution Bias Task
Part of the Childhood Environment, Emotions, and Social Engagement (ChEESE) research team under Dr. Danming An at Lehigh University's Psychology Dept.  
Collaborator: Keith Kreschollek  

This application is meant to measure how children attribute the behaviors of others and their use of hostile attributions to interpret behaviors. The children are read 10 vignettes, which include illustrations for the child to look at. Each vignette asks the child to imagine they are in a certain social situation in which another child engages with them in some form of social behavior.  
  
For example, one vignette asks them to imagine they are carrying a lunch tray when suddenly another child bumps into their arm and you spill all your food. The child is then asked if they feel the behavior was on purpose or on accident, what the other child would likely do next, and how they themselves would react in the situation. The children’s answers are audio and video recorded for later transcription and data analysis.

  ## Dependencies

This project was built with the following main libraries and tools:

- [jsPsych](https://www.jspsych.org/) — JavaScript library for creating and running behavioral experiments in the browser
  - `@jspsych/plugin-image-button-response` for presenting image-based response trials
- [Express](https://expressjs.com/) — Lightweight web framework for serving the experiment and handling backend routes
- [AWS SDK for JavaScript (v3)](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/) — Used for securely uploading and storing participant data (audio/video) in S3
  - `@aws-sdk/client-s3`
  - `@aws-sdk/lib-storage`
- [uuid](https://www.npmjs.com/package/uuid) — Generates unique participant identifiers
- [csv-parser](https://www.npmjs.com/package/csv-parser), [csv-parse](https://csv.js.org/parse/), [csv-stringify](https://csv.js.org/stringify/) — CSV parsing and export for data handling


