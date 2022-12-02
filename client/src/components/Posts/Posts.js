import React from 'react';
import {Grid,CircularProgress, AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import Post from './Post'
import { Menu } from '@mui/icons-material'

const Posts = ({posts})=>{
    const maap = posts.length;
    console.log( <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">
          
        </Typography>
      </Toolbar>
    </AppBar> );
    return(
        <>
            { (!maap) ? <CircularProgress /> : (
                <Grid container alignItems='stretch' spacing={3}>
                    {posts.map( (post)=>{
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post} />
                        </Grid>
                    } )}
                </Grid>
            )}
        </>
    )
}

export default Posts;
