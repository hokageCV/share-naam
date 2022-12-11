import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Modal, Avatar } from '@mui/material'
import { AppBarStyle, BrandContainerStyle, FormBoxStyle, HeadingStyle, ToolbarStyle, ProfileStyle } from './style';
import CreatePostForm from '../Form/CreatePostForm';

import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user =null;

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
            <div sx={ProfileStyle}>
              <Button 
                color="inherit" 
                variant="outlined"
                endIcon= {<AddCircleOutlineTwoToneIcon />}
                sx={{m: 2, color:'black'}}
                onClick={handleOpen}
                >
                    Add
              </Button>

              <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography variant="h6">{user?.result.name}</Typography>
              <Button variant="contained" color="secondary" >Logout</Button>
            </div>

          ) : (
            <Button color="inherit" variant="outlined" sx={{color:'black'}}>Login</Button>
          )}
          
          
          
        </Toolbar>
      </AppBar>
  );
}