const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages to my Friends',
        friend: 'Elon Musk',
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'rocket.png'));
}

function postMessage(req, res) {
    console.log('updating messages');
}

module.exports = {
    getMessages,
    postMessage,
}