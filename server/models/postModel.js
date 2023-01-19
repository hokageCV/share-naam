import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    place: {type: String, required: true},
    city: {type: String, required: true},
    tags: {type: [String], default: []},
    likes: {type: [String], default: []},
    creatorID: {type: String, required: true},
    imgFile: String
}, {timestamps: true });

export const Post = mongoose.model('post', postSchema);