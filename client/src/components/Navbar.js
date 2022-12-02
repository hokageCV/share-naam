import React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';


export default function Navbar() {
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
            >
                Add
            </Button>
          <Button color="inherit" variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}