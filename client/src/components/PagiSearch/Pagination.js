import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { usePostsContext } from '../../hooks/usePostsContext';
import { GET_POSTS } from '../../Constants/Constants';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Paginate(){
    const { postsDispatch } = usePostsContext();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    useEffect(() => {
        if(page){
            postsDispatch({type: GET_POSTS})
        }
    }, [])

    return(
        <Pagination
            count={5}
            page={1}
            variant="outlined"
            color='primary'
            renderItem={(item)=>(
                <PaginationItem 
                    {...item}
                    component={Link}  to={`/posts?page=${1}`}
                />
            )}
        />
    )
}