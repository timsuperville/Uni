const messages = require('express').Router();

messages.get('/', (req, res) => {
    res.send('Messages');
});

messages.get('/new', (req, res) => {
    res.send('New Message');
});

messages.get('/sent', (req, res) => {
    res.send('Sent Messages');
});

messages.get('/received', (req, res) => {
    res.send('Received Messages');
});

messages.get('/trash', (req, res) => {
    res.send('Trash');
});

messages.get('/drafts', (req, res) => {
    res.send('Drafts');
});

messages.get('/spam', (req, res) => {
    res.send('Spam');
});

module.exports = messages;