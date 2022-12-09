import { Post } from "../models/postModel.js"
import mongoose from 'mongoose';

export const getPosts = async (req, res)=>{
    const posts = await Post.find({}).sort({createdAt: -1});
    res.json(posts)
}

export const createPost = async (req, res)=>{
    const {title, place, city, tags} = req.body;

    let emptyFields = [];
    if(!title) emptyFields.push('title')
    if(!place) emptyFields.push('place')
    if(!city) emptyFields.push('city')
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'fill all fields', emptyFields})
    }

    try{
        const post = await Post.create({title, place, city, tags}); 
        res.status(200).json(post)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

export const updatePost = async (req, res)=>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "invalid ID hai "})
    }
    
    const post = await Post.findOneAndUpdate({_id: id},{
        ...req.body
    });
    if(!post){
        res.status(400).json({error: "post doesn't exist"})
    }
    res.status(200).json({...post, ...req.body});
}

export const deletePost = async (req, res)=>{
    const {id} = req.params; 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "invalid ID hai "})
    }

    const post = await Post.findOneAndDelete({_id: id});

    if(!post){
        res.status(400).json({error: "post doesn't exist"})
    }
    res.status(200).json(post);
}
