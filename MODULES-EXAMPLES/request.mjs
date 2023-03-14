const REQUEST_TIMEOUT = 500;

function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encrptedData = encrypt(data);
    console.log('sending ' + encrptedData + ' to ' + url)
}

// console.log(module) // exports object is empty

// module.exports = {
//     // below same as 'send: send,' but can use shorthand because function name isn't aliased
//     send,
//     REQUEST_TIMEOUT,
// }

export {
    REQUEST_TIMEOUT,
    send,
}