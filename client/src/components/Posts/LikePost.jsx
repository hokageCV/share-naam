import React from 'react';
import { Button } from '@mui/material';
import { LIKE_POST, SERVER_URL } from '../../Constants/Constants';
import { usePostsContext } from '../../hooks/usePostsContext';
import { useAuthContext } from '../../hooks/useAuthContext';


import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

export default function LikePost({post}){
    const { postsDispatch } = usePostsContext();
    const { userContext } = useAuthContext();

    const handleLike = async (_id)=>{
        if(!userContext){
            return
        }

        const response = await fetch(`${SERVER_URL}/posts/${_id}/likePost`, {
            method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${userContext.token}`
                }
        })
        const json = await response.json();

        if(!response.ok){
            console.log(json.error)
        }
        else{
            await postsDispatch({type: LIKE_POST, payload: json})
        }
    }

    return(
        <Button
            color='secondary' 
            onClick={() => {handleLike(post._id)}}
        >
            { (post.likes.find( (like)=> like === userContext.user._id)) ?
                <><ThumbUpAltIcon fontSize='small'/> &nbsp; Liked &nbsp; {post.likes.length}</>
            :
                <><ThumbUpAltOutlinedIcon fontSize='small' /> &nbsp; Like &nbsp; {post.likes.length}</>
            } 
        </Button>
    )
}  