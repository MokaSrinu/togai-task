const express = require('express');
const { addBookToCatalouge, getAllBooks, searchBookByTitle,} = require('../handlers/books');
const auth = require('./middlewares/auth');

const bookRouter = express.Router()


bookRouter.post('/createbook', addBookToCatalouge);
bookRouter.get('/getbookcatalouge', getAllBooks);
bookRouter.get('/searchbook/:search', searchBookByTitle);



module.exports = bookRouter;