import { Box } from '@mui/system';
import React from 'react';
import { FooterStyle } from './style';

export default function Footer(){
    return(
        <Box sx={FooterStyle}>
            <footer>Copyright &copy; 2023. ShareNaam.pvt.ltd</footer>
            <small>styling left</small>
        </Box>
    )
}