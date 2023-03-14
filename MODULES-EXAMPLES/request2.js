exports.REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}

exports.send = function send(url, data) {
    const encrptedData = encrypt(data);
    console.log('sending ' + encrptedData + ' to ' + url)
}

// exports. is another way to specify what is exported - in practice, probably better practice to have an export object