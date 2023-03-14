// const request = require('./request'); // automaticall assumes .js, .json, .node extension - so don't need to include in the filename
// const response = require('./response');
// const { send } = require('./request');
// const { read } = require('./response');
import { send } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
    // request.send(url, data);
    // return response.read();
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');

console.log(responseData);