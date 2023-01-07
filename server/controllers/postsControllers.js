import { Post } from "../models/postModel.js"
import mongoose from 'mongoose';

export const getPosts = async (req, res)=>{
    const {page} = req.query;

    try{
        const LIMIT = 7;
        //get starting index of every page
        const startIndex = (Number(page) - 1) * LIMIT  // -1 because zero indexing 
        const totalPosts = await Post.countDocuments({});


        const posts = await Post.find({}).sort({createdAt: -1}).limit(LIMIT).skip(startIndex)
        // sort({createdAt: -1}) : posts newest to oldest order me mile
        // skip(startIndex) : previous pages again fetch na ho

        res.json({ data: posts, currentPage: (Number(page)), totalPages: Math.ceil(totalPosts / LIMIT) })
    }
    catch(err){
        return res.status(404).json({error: err.message})
    }
}

export const getPost = async (req, res)=>{
    const {id} = req.params;

    try{
        const post = await Post.findById(id);
        res.status(200).json({data: post})
    }
    catch(err){
        return res.status(404).json({error: err.message})
    }
}

export const createPost = async (req, res)=>{
    const {title, place, city, tags, creatorID} = req.body;

    let emptyFields = [];
    if(!title) emptyFields.push('title')
    if(!place) emptyFields.push('place')
    if(!city) emptyFields.push('city')
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'fill all fields', emptyFields})
    }


    try{
        const post = await Post.create({title, place, city, tags, creatorID}); 
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

export const likePost = async (req, res)=>{
    // post ID
    const {id} = req.params;

    if(!req.userID){
        return res.status(400).json({ message: "Unauthenticated" });
    }
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "invalid ID hai "})
    }

    const post = await Post.findById(id);

    const index = post.likes.findIndex((userID)=> userID === String(req.userID));

    if(index === -1){
        post.likes.push(req.userID);
    }
    else{
        post.likes = post.likes.filter((id)=> id !== String(req.userID));
    }

    const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});

    res.status(200).json(updatedPost)
}