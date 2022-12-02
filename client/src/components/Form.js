import React, { useState } from 'react';
import {Typography, TextField, Paper, Button} from '@mui/material';
import { usePostsContext } from '../hooks/usePostsContext';
import { CREATE_POST } from '../context/contextConstants';

const Form = ()=>{
    const [postData, setPostData] = useState({
        city: '', title: '', place: '', tags: ''
    }) 
    const [error, setError] = useState(null);
    const {postsDispatch} = usePostsContext();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = {...postData};

        const response = await fetch('/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log( "new workout added   ", json );
            postsDispatch({type: CREATE_POST, payload: json})
        }

    }
    
    return(
        <Paper>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" color="secondary">Share</Typography>

                {/* <TextField  name="userName" variant='outlined' label='userName' fullWidth value={postData.userName} onChange={(e)=>setPostData({...postData, userName: e.target.value})} /> */}
                <TextField  name="title" variant='outlined' label='title' fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})} />
                <TextField  name="place" variant='outlined' label='place' fullWidth value={postData.place} onChange={(e)=>setPostData({...postData, place: e.target.value})} />
                <TextField  name="city" variant='outlined' label='city' fullWidth value={postData.city} onChange={(e)=>setPostData({...postData, city: e.target.value})} />
                <TextField  name="tags" variant='outlined' label='tags' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})} />

                <button variant='container' color='primary' size='large' type='submit'>Submit</button>
            </form>
        </Paper>
    )
}

export default Form;