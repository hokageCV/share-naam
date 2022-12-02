import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    place: {type: String, required: true},
    city: {type: String, required: true},
    tags: {type: [String], default: []},
    likes: {type: Number, default: 0},
}, {timeStamps: true });

export const Post = mongoose.model('post', postSchema);