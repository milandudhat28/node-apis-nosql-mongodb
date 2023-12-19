

const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.json')[env];
const db = {};

const host = config.host
const database = config.database
const databasePort = config.databasePort
const mongoURI = "mongodb://"+host+":"+databasePort+"/"+database
console.log(mongoURI);

mongoose.connect('mongodb://192.168.0.204:27017/test')
  .then(() => {
  //  mongoose.connection.db
  //   .listCollections()
  //   .toArray()
  //   .then(coll => console.log({ coll }));
    console.log('Connected to MongoDB');
    // Your code here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  setup.db = mongoose
  module.exports = mongoose
