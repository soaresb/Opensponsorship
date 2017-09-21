const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/routes')
const port = process.env.PORT || 8080;


mongoose.connect('mongodb://bsoares:gomanny24@ds141474.mlab.com:41474/meanappdb_soares',{
  useMongoClient: true,
});
mongoose.connection.on('connected', () =>{
  console.log('connected to db ');
})
mongoose.connection.on('error', (err) =>{
  console.log('Database error '+ err);
})

app.use(cors());

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

app.use('/routes',routes);

app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(port, () => {
  console.log("server started on port " +port);
});
