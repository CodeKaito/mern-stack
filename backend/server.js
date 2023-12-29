require('dotenv').config();

const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;
const site = process.env.SITE;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts');

app.use(cors());

var corsOptions = {
    origin: 'https://mern-app-xe3p.onrender.com/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  
  // Enable CORS with the specified options
  app.use(cors(corsOptions));

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


