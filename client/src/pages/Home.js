import { useEffect } from 'react';
import { Grow, Container } from '@mui/material';
import { usePostsContext } from '../hooks/usePostsContext'
import { GET_POSTS } from '../Constants/Constants';
import { useLocation } from 'react-router-dom'

import Posts from '../components/Posts/Posts';
import Paginate from '../components/PagiSearch/Pagination';
import { PagiSearchContainerStyle } from './style'

// check which page we are currently on & what term we are searching
function useQuery(){
    return new URLSearchParams(useLocation().search)
}

export default function Home(){
    const { postsContext, postsDispatch } = usePostsContext();
    const query = useQuery();
    const page = query.get('page') || 1;  // read URL for page params else assign 1

    useEffect(() => {    
        const fetchPosts = async ()=>{
            const response = await fetch(`/posts?page=${page}`);
            const json = await response.json();
            
            if(response.ok){
                postsDispatch({type: GET_POSTS, payload: json})
                console.log("yeh fetch hua hai: ", json)
            }
        }
        fetchPosts()
    }, [postsDispatch])
    
    useEffect(() => {
        console.log( "postsContext change hua! ", postsContext)
    }, [postsContext])

    return(
        <Grow in>
            <Container  > 

                <Container sx={PagiSearchContainerStyle} >
                    <Paginate page={page} />   
                </Container> 

                <Container sx={{p:2}}>
                    <Posts  />
                </Container>

            </Container>
        </Grow>
    )
}