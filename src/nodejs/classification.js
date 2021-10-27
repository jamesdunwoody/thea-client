const fs = require('fs');
const path = require('path');

const file = Path('path/to/filename.pdf');
const fileBytes = fs.readFileSync(file.path);

const data = JSON.stringify({
    filename: file.name,
    b64: fileBytes.toString('base64')
});

// Construct the POST request to the PREPROCESS endpoint, and the POST request to the CLASSIFY endpoint:

const optionsPreprocess = {
    hostname: 'https://url.com',
    path: '/document/preprocess',
    method: 'POST',
    headers: {
        'x-api-key': 'XXXXX',
        'Content-Type': 'application/json'
    }
};
const optionsModel = {
    hostname: 'https://url.com',
    path: '/document/classify',
    method: 'POST',
    headers: {
        'x-api-key': 'XXXXX'
    }
};

// Send the document to be preprocessed. The returned document payload from the preprocess endpoint is sent to the model endpoint:
const requestPreprocess = https.request(optionsPreprocess, res => {
    res.on('data', documentPayload => {
        const requestModel = https.request(optionsModel, resModel => {
            console.log(resModel);
        });
        requestModel.write(documentPayload);
        requestModel.end();
    });
});

requestPreprocess.write(data);
requestPreprocess.end();
