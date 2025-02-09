const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema({
    title: String,
    body: String,
    rating: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Review', Review);

