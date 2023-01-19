import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import postsRoutes from './routes/postsRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();


// middleware
app.use(bodyParser.json({ limit: "8mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "8mb", extended: true }));
app.use(cors());


app.get('/', (req, res)=>{
    res.redirect( '/posts')
})
app.use('/posts', postsRoutes)
app.use('/user', userRoutes)


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