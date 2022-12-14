import express from 'express';
const router = express.Router();
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/postsControllers.js'
import { requireAuth } from '../middleware/requireAuth.js';

router.get('/', getPosts)
router.post('/', requireAuth, createPost)
router.patch('/:id', requireAuth, updatePost)
router.delete('/:id', requireAuth, deletePost)
router.patch('/:id/likePost', requireAuth, likePost)

export default router;