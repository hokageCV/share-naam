import { useEffect } from 'react';
import {Grow, Container} from '@mui/material';
import Posts from '../components/Posts/Posts';
import {usePostsContext} from '../hooks/usePostsContext'
import { GET_POSTS } from '../context/contextConstants';

export default function Home(){
    const {posts, postsDispatch} = usePostsContext();

    useEffect(() => {    
        const fetchPosts = async ()=>{
            const response = await fetch('/posts');
            const json = await response.json();
            
            if(response.ok){
                console.log(json)
                postsDispatch({type: GET_POSTS, payload: json})
            }
        }
        fetchPosts()
    }, [postsDispatch])

    return(
        <>
            <Grow in>
                <Container sx={{p:2}} >  
                    <Posts posts={posts} />
                </Container>
            </Grow>
        </> 
    )
}