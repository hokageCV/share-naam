import React, { useState } from 'react';
import {Typography, TextField, Paper, Button} from '@mui/material';
import { usePostsContext } from '../../hooks/usePostsContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { CREATE_POST } from '../../Constants/Constants';

const CreatePostForm = ({handleClose})=>{
    const { user } = useAuthContext();
    const emptyForm = {
        city: '', title: '', place: '', tags: ''
    }

    const [formData, setFormData] = useState(emptyForm) 
    const [error, setError] = useState(null);
    const { postsDispatch } = usePostsContext();

    const clear = ()=>{
        setFormData(emptyForm)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user){
            console.log("unauthorised")
            return
        }

        const post = {...formData};
        
        const response = await fetch('/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json();
        

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setError(null)
            console.log( "new post added   ", json );
            postsDispatch({type: CREATE_POST, payload: json})
        }
        clear()
        handleClose()
    }
    
    return(
        <Paper style={{backgroundColor: "#FFFAD7"}}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" color="secondary">Share</Typography>

                <TextField  name="title" variant='outlined' label='title' fullWidth value={formData.title} onChange={(e)=>setFormData({...formData, title: e.target.value})} />
                <TextField  name="place" variant='outlined' label='place' fullWidth value={formData.place} onChange={(e)=>setFormData({...formData, place: e.target.value})} />
                <TextField  name="city" variant='outlined' label='city' fullWidth value={formData.city} onChange={(e)=>setFormData({...formData, city: e.target.value})} />

                <TextField  
                    name="tags" variant='outlined' label='tags' fullWidth 
                    value={formData.tags} 
                    onChange={(e)=>setFormData({...formData, tags: e.target.value.split(',')})} 
                />

                <Button variant='contained' color='primary' size='medium' type='submit' sx={{m:1, width: '50%'}}>Submit</Button>
            </form>
        </Paper>
    )
}

export default CreatePostForm;