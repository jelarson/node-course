const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encrptedData = encrypt(data);
    console.log('sending ' + encrptedData + ' to ' + url)
}


module.exports = {
    send,
    REQUEST_TIMEOUT,
}