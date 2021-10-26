import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
import postRoutes from './routes/posts.js'
import postAuths from './routes/Auths.js'
import dotenv from "dotenv";


const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)

app.use(express.json({limit: '100mb'}));
app.use(express.urlencoded({extended: true, limit: '100mb'}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cors());
app.options('*', cors())
dotenv.config();


const CONNECTION_URL = 'mongodb+srv://bete:'+process.env.DB_PASS+'@cluster0.jxiat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
// const pass = process.env.DB_PASS;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:`+PORT)))
  .catch((error) => console.log(`${error} did not connect`));

app.use('/posts',postRoutes)
app.use('/users',postAuths)