import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';

import { usePostsContext } from '../../hooks/usePostsContext';
import { GET_POSTS } from '../../Constants/Constants';

export default function Paginate({page}){
    const { postsContext, postsDispatch } = usePostsContext();
    const { totalPages } = postsContext;


    useEffect(() => {    
        const fetchPosts = async ()=>{
            const response = await fetch(`/posts?page=${page}`);
            const json = await response.json();
            
            if(response.ok){
                postsDispatch({type: GET_POSTS, payload: json})
            }
        }
        fetchPosts()
    }, [page, postsDispatch])

    return(
        <Pagination
            count={totalPages}
            page={Number(page) || 1}
            variant="outlined"
            color='primary'
            renderItem={(item)=>(
                <PaginationItem 
                    {...item}
                    component={Link}  to={`/posts?page=${item.page}`}
                />
            )}
        />
    )
}