import React from 'react';
import {Grid,CircularProgress} from '@mui/material';
import { usePostsContext } from '../../hooks/usePostsContext';
import Post from './Post'

const Posts = ()=>{
    const { postsContext } = usePostsContext();
    const maap = (postsContext.posts || []).length;

    return(
        <>
            { (!maap) ? <CircularProgress /> : 
            (
                <Grid container alignItems='center' spacing={3}>
                    {postsContext.posts.map( (post)=>{
                        return (
                            <Grid item key={post._id} xs={10} sm={5} md={4} lg={4} >
                                <Post post={post} />
                            </Grid>
                        )
                    } )}
                </Grid>
            )
            }
        </>
    )
}

export default Posts;
