const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Start the app
const app = express();
app.use(express.json());
app.use(cors());

//Start the DB
mongoose.connect('mongodb://localhost:27017/planning-travel', { useNewUrlParser: true });
requireDir('./src/models');

//routes
app.use('/api', require('./src/routes'));

app.listen(3001);