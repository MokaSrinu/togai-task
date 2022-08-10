const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    isbn: String,
    title: String,
    subtitle: String,
    author: String,
    published:String,
    publisher: String,
    pages: Number,
    description: String,
    website: String
}, {
    timestamps: true
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;