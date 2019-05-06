const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
// apis
const user = require('./apis/user');
const message = require('./apis/message');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// apis

app.use('/apis/user', user);
app.use('/apis/message', message);

// our server instance
const server = http.createServer(app);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to :', process.env.MONGO_URI);
  })
  .catch(error => {
    console.error('Error connecting to :', process.env.MONGO_URI, '\n', error);
  });

process.on('SIGINT', function() {
  mongoose.connection.close().then(() => process.exit(0));
});

// This creates our socket using the instance of the server
const io = socketIO(server);
app.set('socketio', socketIO);

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
