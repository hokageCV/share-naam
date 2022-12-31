import { useEffect } from 'react';
import { Grow, Container } from '@mui/material';
import { usePostsContext } from '../hooks/usePostsContext'
import { GET_POSTS } from '../Constants/Constants';

import Posts from '../components/Posts/Posts';

import Paginate from '../components/PagiSearch/Pagination';
import Search from '../components/PagiSearch/Search';
import { PagiSearchContainerStyle } from './style'

export default function Home(){
    const {postsContext, postsDispatch} = usePostsContext();

    useEffect(() => {    
        const fetchPosts = async ()=>{
            const response = await fetch('/posts');
            const json = await response.json();
            
            if(response.ok){
                console.log("postsContext: ",json)
                postsDispatch({type: GET_POSTS, payload: json})

            }
        }
        fetchPosts()
    }, [postsDispatch])

    return(
        <Grow in>
            <Container  > 

                {/* <Container sx={PagiSearchContainerStyle} >
                    <Search />
                    <Paginate />
                </Container>  */}

                <Container sx={{p:2}}>
                    <Posts postsContext={postsContext} />
                </Container>

            </Container>
        </Grow>
    )
}