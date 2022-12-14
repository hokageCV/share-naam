import React from 'react';
import { Button } from '@mui/material';
import { LIKE_POST } from '../../Constants/Constants';
import { usePostsContext } from '../../hooks/usePostsContext';
import { useAuthContext } from '../../hooks/useAuthContext';


import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export default function LikePost({post}){
    const { postsDispatch } = usePostsContext();
    const { user } = useAuthContext();

    const handleLike = async (_id)=>{
        if(!user){
            return
        }

        const response = await fetch(`/posts/${_id}/likePost`, {
            method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${user.token}`
                }
        })
        const json = await response.json();

        if(!response.ok){
            console.log(json.error)
        }
        else{
            postsDispatch({type: LIKE_POST, payload: json})
            console.log("post liked: ", json)
        }
    }

    return(
        <Button
            color='secondary' 
            onClick={() => {handleLike(post._id)}}
        >
            { post.likes.find( (like)=> like === user.user._id) ?
                <><ThumbUpAltIcon fontSize='small'/> &nbsp; Liked &nbsp; {post.likes.length}</>
            :
                <><ThumbUpAltOutlinedIcon fontSize='small' /> &nbsp; Like &nbsp; {post.likes.length}</>
            } 
        </Button>
    )
}  