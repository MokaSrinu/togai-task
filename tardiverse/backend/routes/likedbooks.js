const express = require('express');
const { addUserLikedBooks, getlikedBooksOfUser } = require('../handlers/likedbooks');
const auth = require('./middlewares/auth');

const likedbookRouter = express.Router()


likedbookRouter.post('/addlikedbookofuser', addUserLikedBooks);
likedbookRouter.get('/getalluserlikedbooks/:userid', getlikedBooksOfUser);



module.exports = likedbookRouter;