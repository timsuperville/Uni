const socialRouter = require('express').Router();

const commentsRouter = require('./comments');
const likesRouter = require('./likes');
const messagesRouter = require('./messages');
const postsRouter = require('./posts');

socialRouter.use('/comments', commentsRouter);
socialRouter.use('/likes', likesRouter);
socialRouter.use('/messages', messagesRouter);
socialRouter.use('/posts', postsRouter);

module.exports = socialRouter;