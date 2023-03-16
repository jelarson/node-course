const path = require('path');

function getMessages(req, res) {
    // res.send('<ul><li>Hello Albert!</li></ul>');
    res.sendFile(path.join(__dirname, '..', 'public', 'rocket.png'));
}

function postMessage(req, res) {
    console.log('updating messages');
}

module.exports = {
    getMessages,
    postMessage,
}