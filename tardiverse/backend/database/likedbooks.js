const mongoose = require('mongoose')

const likedbooksSchema = new mongoose.Schema({
    book: {  // normalized approach of defining relationship
        type: mongoose.Types.ObjectId,
        ref: 'Book'
    },
    user: {  // normalized approach of defining relationship
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})



const LikedBook = mongoose.model('LikedBook', likedbooksSchema)

module.exports = LikedBook;
