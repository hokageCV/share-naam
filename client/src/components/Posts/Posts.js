import React from 'react';
import {Grid,CircularProgress} from '@mui/material';
import Post from './Post'

const Posts = ({posts,currentID, setCurrentID})=>{
    const maap = (posts || []).length;

    return(
        <>
            { (!maap) ? <CircularProgress /> : 
            (
                <Grid container alignItems='stretch' spacing={3}>
                    {posts.map( (post)=>{
                        return (
                            <Grid item key={post._id} xs={12} sm={6}>
                                <Post 
                                    post={post} 
                                    currentID={currentID}
                                    setCurrentID={setCurrentID} 
                                />
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
