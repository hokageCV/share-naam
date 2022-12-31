import React from 'react';
import {Grid,CircularProgress} from '@mui/material';
import Post from './Post'

const Posts = ({postsContext})=>{
    const maap = (postsContext || []).length;

    return(
        <>
            { (!maap) ? <CircularProgress /> : 
            (
                <Grid container alignItems='center' spacing={3}>
                    {postsContext.map( (post)=>{
                        return (
                            <Grid item key={post._id} xs={10} sm={5} md={4} lg={3} >
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
