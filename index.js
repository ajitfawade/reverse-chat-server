import express from 'express';
import http from 'http'; /* 
import socketIO from 'socket.io' */
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import message from './apis/message';
import user from './apis/user';

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/user', user);
app.use('/api/message', message);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to :', process.env.MONGO_URI);
  })
  .catch(error => {
    console.error('Error connecting to :', process.env.MONGO_URI, '\n', error);
  });
server.listen(process.env.PORT, () => {
  console.log('Server started and listening on port:', process.env.PORT);
});
