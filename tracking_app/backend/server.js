const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Database connection
const uri = `mongodb+srv://anshulsharma4014:ebe6WCBvQ2r6FfP@cluster0.juusla2.mongodb.net/?retryWrites=true&w=majority`; //process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connection established succesfully');
});

//ROUTES
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log('Listening on port: ', port);
});