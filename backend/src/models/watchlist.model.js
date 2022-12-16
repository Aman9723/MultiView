const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema(
    {
        image: { type: String, required: true },
        title: { type: String, required: true },
        email: { type: String, required: true },
    },
    { vsersionKey: false, timestamps: false }
);

const watchlistModel = mongoose.model('watchlist', watchlistSchema);

module.exports = watchlistModel;
