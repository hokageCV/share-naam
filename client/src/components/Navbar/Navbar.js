import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Modal, Container } from '@mui/material'
import { AppBarStyle, BrandContainerStyle, FormBoxStyle, HeadingStyle, ToolbarStyle, ProfileStyle } from './style';
import CreatePostForm from '../Form/CreatePostForm';
import { useLogout } from '../../hooks/useLogout';

import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { useAuthContext } from '../../hooks/useAuthContext';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {logout} = useLogout();   
  const {user} = useAuthContext()

  return ( 
      <AppBar sx={AppBarStyle}>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={FormBoxStyle}>
              <CreatePostForm handleClose={handleClose}/>
            </Box>
        </Modal>

        <div sx={BrandContainerStyle}>
          <Typography variant="h5" component="div" sx={HeadingStyle} >
            Share Naam
          </Typography>
        </div>
        
        <Toolbar sx={ToolbarStyle}>
          {user ? (
            <Container sx={ProfileStyle}>
              <Button 
                color="inherit" 
                variant="outlined"
                endIcon= {<AddCircleOutlineTwoToneIcon />}
                sx={{m: 2, color:'black'}}
                onClick={handleOpen}
                >
                    Add
              </Button>

              <Typography variant="h6" color='secondary'>{user.user.name}</Typography>

              <Button variant="contained" color="secondary" onClick={()=>logout()}
                >Logout
              </Button>
            </Container>
          ) : (
            <Button 
              color="inherit" variant="outlined" sx={{color:'black'}}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
  );
}