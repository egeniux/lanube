const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');
const marketplace = require('./routes/api/marketplace');
const instances = require('./routes/api/instances');
const services = require('./routes/api/services');

const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


// DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world!'));

//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/post', post);
app.use('/api/marketplace', marketplace);
app.use('/api/instances', instances);
app.use('/api/services', services);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));