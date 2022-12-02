// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();

// const feedRouter = require('./routes/feed');
import postsRouter from './routes/posts.js';


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
    .catch(()=>{
        console.log(err);
    })