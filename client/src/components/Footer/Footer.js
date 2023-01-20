import { Box } from '@mui/system';
import React from 'react';
import styles from './style';

export default function Footer(){
    return(
        <Box sx={styles.footer}>
            <footer>Copyright &copy; 2023. ShareNaam.pvt.Ltd</footer>
        </Box>
    )
}