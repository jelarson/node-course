const { request } = require('https'); // if requiring https - url must be https, not http

const req = request('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log('Data chunk: ' + chunk);
    });
    res.on('end', () => {
        console.log('No more data');
    })
});

req.end(); // without this, no request will get triggered

const { get } = require('https');

const req1 = get('https://www.google.com', (res) => {
    res.on('data', (chunk) => {
        console.log('Data chunk: ' + chunk);
    });
    res.on('end', () => {
        console.log('No more data');
    })
});

// get doesn't need to run the .end() function