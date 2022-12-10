import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton, Modal } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import CreatePostForm from '../Form/CreatePostForm';
import { BoxStyle } from './style';



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 1 }}>   
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            foodie feed
          </Typography>
          <Button 
            color="inherit" 
            variant="outlined"
            endIcon= {<AddCircleOutlineTwoToneIcon />}
            sx={{m: 2}}
            onClick={handleOpen}
            >
                Add
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={BoxStyle}>
              <CreatePostForm handleClose={handleClose}/>
            </Box>
          </Modal>
          <Button color="inherit" variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}