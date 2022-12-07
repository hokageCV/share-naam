import React, { useEffect, useState } from 'react';
import {Typography, TextField, Paper, Button} from '@mui/material';
import { usePostsContext } from '../hooks/usePostsContext';
import { CREATE_POST, UPDATE_POST } from '../context/contextConstants';

const Form = ({currentID, setCurrentID})=>{
    const [postData, setPostData] = useState({
        city: '', title: '', place: '', tags: ''
    }) 
    const [error, setError] = useState(null);
    const {posts, postsDispatch} = usePostsContext();
    const existingPost = currentID ? posts.find((p)=>p._id === currentID) : null;

    useEffect(() => {
        if(existingPost){
            setPostData(existingPost)
        }
    }, [existingPost])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = {...postData};
        let response = null;
        let json = null;

        if(currentID){
            response = await fetch(`/posts/${currentID}`, {
                method: 'PATCH',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        else{
            response = await fetch('/posts', {
                method: 'POST',
                body: JSON.stringify(post),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            json = await response.json();
        }

        if(!response.ok){
            setError(json.error)
        }

        if(currentID){
            setError(null)
            console.log( "workout updated   ", json );
            postsDispatch({type: UPDATE_POST, payload: json})
        }
        else if(response.ok){
            setError(null)
            console.log( "new workout added   ", json );
            postsDispatch({type: CREATE_POST, payload: json})
        }

    }
    
    return(
        <Paper style={{backgroundColor: "#FFFAD7"}}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" color="secondary">{(currentID) ? 'Edit ' : 'Share '}</Typography>

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