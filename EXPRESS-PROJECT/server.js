const express = require('express');

const friendsRouter = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.router.js');

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

app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Hello');
})

// mounting routers
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log('Listening on PORT ' + PORT);
})