const express = require('express');
const path = require('path');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

// middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    // actions go here...
    const delta = Date.now() - start;
    console.log(req.method + ' ' + req.url + ' ' + delta + 'ms');
})

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Hello');
})

app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);


app.listen(PORT, () => {
    console.log('Listening on PORT ' + PORT);
})