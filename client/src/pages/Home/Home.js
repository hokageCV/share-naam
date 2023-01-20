import React from 'react';
import { Grow, Container } from '@mui/material';
import { useLocation } from 'react-router-dom'

import Posts from '../../components/Posts/Posts';
import Paginate from '../../components/PagiSearch/Pagination';
import { PagiSearchContainerStyle } from './style'

// check which page we are currently on & what term we are searching
function useQuery(){
    return new URLSearchParams(useLocation().search)
}

export default function Home(){
    const query = useQuery();
    const page = query.get('page') || 1;  // read URL for page params else assign 1

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