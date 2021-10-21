import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import postRoutes from './routes/posts.js'


const app = express();
const dotenv = require('dotenv')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors());
app.options('*', cors())

const CONNECTION_URL = 'mongodb+srv://bete:'+REACT_APP_PASSWORD+'@cluster0.jxiat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:`+PORT)))
  .catch((error) => console.log(`${error} did not connect`));

app.use('/posts',postRoutes)