import React, { useEffect } from 'react';
import { Box, Typography, Grid } from "@mui/material";
import { usePostsContext } from '../../hooks/usePostsContext';
import { useParams } from 'react-router-dom'
import { GET_POST_BY_ID } from '../../Constants/Constants';


export default function PostDetails(){
    const { postsContext, postsDispatch } = usePostsContext();
    const {id} = useParams();

    useEffect(() => {
        const fetchPostByID = async ()=>{
            const response = await fetch(`http://localhost:8080/posts/${id}`);
            const json = await response.json();
            
            if(response.ok){
                postsDispatch({type: GET_POST_BY_ID, payload:json})
            }
        }
        fetchPostByID()
    }, [])

    return(
        <Box sx={{ margin:3, boxShadow: 3}}>
            <Grid container >
                <Grid item sm={12} md={8} sx={{padding:1}}>             
                    <Typography variant="h3" component="h2">Title: {postsContext.post && postsContext.post.title}</Typography>
                    <Typography variant="h6" component="h2">Location: {postsContext.post && postsContext.post.place}</Typography>
                    <Typography variant="body" component="h2">Place: {postsContext.post && postsContext.post.city}</Typography>
                </Grid>
                <Grid item sm={12} md={4} sx={{padding:1}}>       
                    <img 
                        src="https://source.unsplash.com/random/750x900/?forrest,mountain" 
                        loading="lazy"
                        alt="random"
                        width="100%"
                        height="100%"
                    />      
                </Grid>
            </Grid>
        </Box>
    )
}