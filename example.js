const request = require('request');
const fs = require('fs');
const util = require('util')

const imageBuffer = fs.readFileSync( "./stinger.jpg");

let apiUrl = "https://api.carnet.ai/mmg/detect";
let apiKey = "PUT_YOUR_API_KEY_HERE";


const options = {
    uri: apiUrl,
    body: imageBuffer,
    headers: {
        'Content-Type': 'application/octet-stream',
        'api-key': apiKey
    }
};

request.post(options, (error, response, body) => {
    if (error) {
        console.log('Error: ', error);
        return;
    }
    console.log(util.inspect(JSON.parse(body), {showHidden: false, depth: null}));
})