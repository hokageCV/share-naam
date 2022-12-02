import BasicUsage from '../components/styledForm'
import {Grow, Container, Grid, Typography} from '@mui/material';
import Form from '../components/Form';
import Posts from '../components/Posts/Posts';

import {usePostsContext} from '../hooks/usePostsContext'
import { useEffect } from 'react';
import { GET_POSTS } from '../context/contextConstants';

export default function Home(){
    const {posts, postsDispatch} = usePostsContext();

    useEffect(() => {
        const fetchPosts = async ()=>{
            const response = await fetch('/posts');
            const json = await response.json();
            

            if(response.ok){
                postsDispatch({type: GET_POSTS, payload: json})
                console.log(json)
            }
        }
        fetchPosts()
    }, [postsDispatch])

    return(
        <>
            <Typography >d</Typography>
            <BasicUsage />
            {/* <Form /> */}
            <Grow in>
                <Container >  
                    <Typography variant='h2'>arena</Typography>  
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts posts={posts} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </> 
    )
}