// const internals = require('./internals');
const { send, read } = require('./internals');

function makeRequest(url, data) {
    // internals.request.send(url, data);
    // return internals.response.read();

    // internals.send(url, data);
    // return internals.read();
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');

console.log(responseData);