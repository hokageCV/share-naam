import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import postsRouter from './routes/postsRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();


// middleware
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());


app.get('/', (req, res)=>{
    res.redirect( '/posts')
})
app.use('/posts', postsRouter)


// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
         app.listen(PORT, () => {
            console.log( `sun raha hu maiiiiiii, port ${PORT} meeee ` );
         })
    })
    .catch((err)=>{
        console.log(err);
    })