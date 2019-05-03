const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });
const path = require('path');

// apis
const user = './apis/user';
const message = './apis/message';

const app = express();
app.use(bodyParser.json());
// redirect to https on production
app.use(function(req, res, next) {
  let sslUrl;
  if (
    process.env.NODE_ENV === 'production' &&
    req.headers['x-forwarded-proto'] !== 'https'
  ) {
    sslUrl = ['https://', req.hostname, req.url].join('');
    return res.redirect(sslUrl);
  }
  return next();
});

// apis

app.use('/apis/user', user);
app.use('/apis/message', message);

// our server instance
const server = http.createServer(app);
mongoose
  .connect(process.env.MONGO_URI, {
    server: {
      socketOptions: {
        socketTimeoutMS: 0,
        connectionTimeout: 0
      }
    },
    useNewUrlParser: true
  })
  .then(() => console.log('Succeeded connected to: ' + process.env.MONGO_URI))
  .catch(error =>
    console.log('ERROR connecting to: ' + process.env.MONGO_URI + '. ' + error)
  );

process.on('SIGINT', function() {
  mongoose.connection.close().then(() => process.exit(0));
});

// This creates our socket using the instance of the server
const io = socketIO(server);
app.set('socketio', socketIO);

// This is what the socket.io syntax is like, we will work this later
socketIO.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
