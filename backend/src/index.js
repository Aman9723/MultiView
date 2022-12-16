const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const watchlistModel = require('./models/watchlist.model');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// request for adding watchlist in db
app.post('/watchlist', async (req, res) => {
    try {
        const { image, email, title } = req.body;
        await watchlistModel.create({ image, email, title });
        return res.status(200).send('Added in watchlist');
    } catch (e) {
        return res.status(400).send(e.message);
    }
});

// request for showing all watchlist of a user
app.get('/watchlist', async (req, res) => {
    try {
        const { email } = req.body;
        const watchlist = await watchlistModel.aggregate([
            { $match: { email } },
        ]);
        return res.status(200).send(watchlist);
    } catch (e) {
        return res.status(400).send(e.message);
    }
});

mongoose.connect(process.env.MONGODB_URL).then(() => {
    app.listen(8000, () => {
        console.log(`Listening on http://localhost:8000`);
    });
});
