# Get the bytes of the file to send to the API:

import base64
import json
from pathlib import Path

import requests

filepath = Path('path/to/file/filename.pdf')
file_bytes = filepath.read_bytes()

# This returns a document protobuf: ProtoDocument response payload that gets sent directly to the model endpoint. The document protobuf response contains all information the model endpoints need to classify the document..
# Send the protobuf payload to the CLASSIFY endpoint:

response_preprocess = requests.post(
    url='https://url/document/preprocess',
    json={
        'filename': filepath.name,
        'b64': base64.b64encode(file_bytes).decode('utf8')
    },
    headers={
        'x-api-key': 'XXXXXXX'
    })

# Have a look at the JSON response:

classification = json.loads(response_model.text)
print(classification)
