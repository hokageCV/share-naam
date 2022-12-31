import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Modal, Container } from '@mui/material'
import { AppBarStyle, BrandContainerStyle, FormBoxStyle, HeadingStyle, ToolbarStyle, ProfileStyle, LogoutBtnStyle } from './style';
import { useNavigate } from "react-router-dom";
import CreatePostForm from '../Form/CreatePostForm';
import { useLogout } from '../../hooks/useLogout';

import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { useAuthContext } from '../../hooks/useAuthContext';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const {logout} = useLogout();   
  const {userContext} = useAuthContext()

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
          {userContext ? (
            <Container sx={ProfileStyle}>
              <Button 
                color="secondary" 
                variant="outlined"
                endIcon= {<AddCircleOutlineTwoToneIcon />}
                sx={{m: 2}}
                onClick={handleOpen}
                >
                    Add
              </Button>

              <Typography variant="h6" color='secondary' sx={{textTransform: 'capitalize'}}>
                {userContext.user.name}
              </Typography>

              <Button 
                color="secondary" 
                variant="outlined" 
                sx={LogoutBtnStyle}
                onClick={()=>logout()}
                >Logout
              </Button>
            </Container>
          ) : (
            <Button 
              color="inherit" variant="outlined" 
              sx={{color:'black'}}
              onClick={()=>navigate('/auth', {replace: true})}
            >
                Login
              </Button>
          )}
        </Toolbar>
      </AppBar>
  );
}