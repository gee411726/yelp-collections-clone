const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users.js');
const collectionsRouter = require('./routes/collections.js');

app.use('/api/users', usersRouter); 
app.use('/api/collections', collectionsRouter);


// Heroku assigns NODE_ENV to production, serving production ready React app and re-routing client-side routes to index.html
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use('/', express.static(path.join(__dirname, '../build')));
// Handle React routing, return all other requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html')); // potentially invert (have client in folder,  server outside...)
  });
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
    console.log(`Host is: ${host}`);
});