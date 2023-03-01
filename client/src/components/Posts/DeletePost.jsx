import React from 'react';
import { Button } from '@mui/material';
import { DELETE_POST, SERVER_URL } from '../../Constants/Constants';
import { usePostsContext } from '../../hooks/usePostsContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function DeletePost({post}){
    const { postsDispatch } = usePostsContext();
    const { userContext } = useAuthContext();

    const handleDelete = async (_id) => {

        if(!userContext){
            console.log("unauthorised")
            return
        }

        const response = await fetch(`${SERVER_URL}/posts/${_id}`, {
            method: 'DELETE',
                body: JSON.stringify(post),
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
            postsDispatch({type: DELETE_POST, payload: json})
            console.log("post deleted: ", json)
        }
    }

    return(
        <Button 
            size='small' 
            color='secondary' 
            onClick={()=>{ handleDelete(post._id) }}
        >
            <DeleteForeverIcon fontSize='small' /> Delete
        </Button>
    )
}