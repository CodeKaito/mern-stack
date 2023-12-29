require('dotenv').config();

const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method, req.url)
    next()
});

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app!'})
});

app.use('/api/workouts', workoutRoutes);

mongoose.connect(mongo_uri)
    .then(() => {
        // listen for requests
        app.listen(port, () => {
        console.log('Connected to mongodb');
        console.log(`Listening on ${port}`);
        });
    })
    .catch((err) => console.log(err));


