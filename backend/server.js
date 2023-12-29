require('dotenv').config();

const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;
const site = process.env.SITE;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

// Allow requests from any origin (not recommended for production)
app.use(cors({ origin: '*' }));

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
        app.listen(site, () => {
        console.log('Connected to mongodb');
        console.log(`Listening on ${site}`);
        });
    })
    .catch((err) => console.log(err));


