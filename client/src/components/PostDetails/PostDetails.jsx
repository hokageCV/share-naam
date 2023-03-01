import React, { useEffect } from 'react';
import { Box, Typography, Grid } from "@mui/material";
import { usePostsContext } from '../../hooks/usePostsContext';
import { useParams } from 'react-router-dom'
import { GET_POST_BY_ID, SERVER_URL } from '../../Constants/Constants';
import styles from './style'


export default function PostDetails(){
    const { postsContext, postsDispatch } = usePostsContext();
    const {id} = useParams();
    const randomImageURL = 'https://source.unsplash.com/random/750x900/?forrest,mountain'

    useEffect(() => {
        const fetchPostByID = async ()=>{
            const response = await fetch(`${SERVER_URL}/posts/${id}`);
            const json = await response.json();
            
            if(response.ok){
                postsDispatch({type: GET_POST_BY_ID, payload:json})
            }
        }
        fetchPostByID()
    }, [])

    return(
        <Box sx={styles.outerBox}>
            <Grid container >
                <Grid item sm={12} md={8} sx={styles.infoPart}>             
                    <Typography variant="h3" component="h2" sx={styles.title}>Title: {postsContext.post && postsContext.post.title}</Typography>
                    <Typography variant="h6" component="h2" sx={styles.capital}>Location: {postsContext.post && postsContext.post.place}</Typography>
                    <Typography variant="body" component="h2" sx={styles.capital}>Place: {postsContext.post && postsContext.post.city}</Typography>
                </Grid>
                <Grid item sm={12} md={4} sx={{padding:1}}>       
                    <img 
                        src={(postsContext.post && postsContext.post.imgFile) || randomImageURL} 
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