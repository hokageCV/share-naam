import React, { useEffect, useState } from 'react';
import {Typography, TextField, Paper, Button} from '@mui/material';
import { usePostsContext } from '../../hooks/usePostsContext';
import { useAuthContext } from '../../hooks/useAuthContext';

import { SURFACE, UPDATE_POST, SERVER_URL } from '../../Constants/Constants';

import FileBase from 'react-file-base64';
import styles from './style';

const UpdatePostForm = ({post, handleClose})=>{
    const { userContext } = useAuthContext();
    const emptyForm = {
        city: '', title: '', place: '', tags: '', imgFile: ''
    }

    const [formData, setFormData] = useState(emptyForm) 
    const [error, setError] = useState(null);
    const {postsDispatch} = usePostsContext();

    useEffect(() => {
        setFormData(post)
    }, [post])

    const clear = ()=>{
        setFormData(emptyForm)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!userContext){
            console.log("unauthorised")
            return
        }

        const post = {...formData};

        const response = await fetch(`${SERVER_URL}/posts/${post._id}/editPost`, {
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${userContext.token}`
            }
        })
        const json = await response.json();
        

        if(!response.ok){
            setError(json.error)
        }
        else{
            setError(null)
            console.log( "post updated   ", json );
            postsDispatch({type: UPDATE_POST, payload: json})
        } 
        clear()
        handleClose()
    }
    
    return(
        <Paper style={{backgroundColor: SURFACE}}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <Typography variant="h6" color="secondary"> &nbsp; Edit</Typography>

                <TextField  name="title" variant='outlined' label='title' fullWidth value={formData.title} onChange={(e)=>setFormData({...formData, title: e.target.value})} />
                <TextField  name="place" variant='outlined' label='place' fullWidth value={formData.place} onChange={(e)=>setFormData({...formData, place: e.target.value})} />
                <TextField  name="city" variant='outlined' label='city' fullWidth value={formData.city} onChange={(e)=>setFormData({...formData, city: e.target.value})} />

                <TextField  
                    name="tags" variant='outlined' label='tags' fullWidth 
                    value={formData.tags} 
                    onChange={(e)=>setFormData({...formData, tags: e.target.value.split(',')})} 
                />
                <div className={styles.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={ ({base64})=>setFormData({...formData, imgFile: base64}) }
                    />
                </div>

                <Button 
                    variant='contained' color='primary' 
                    size='medium' type='submit' 
                    sx={styles.button}
                >
                    Submit
                </Button>
            </form>
        </Paper>
    )
}

export default UpdatePostForm;