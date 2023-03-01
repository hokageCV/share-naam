import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Modal, Container } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import CreatePostForm from '../Form/CreatePostForm';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import styles from './style';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const {logout} = useLogout();   
  const {userContext} = useAuthContext()

  return ( 
      <AppBar sx={styles.appBar}>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styles.formBox}>
              <CreatePostForm handleClose={handleClose}/>
            </Box>
        </Modal>

        <div sx={styles.brandContainer}>
          <Typography variant="h5" component="div" sx={styles.heading} >
            Share Naam 
          </Typography>
        </div>
        
        <Toolbar sx={styles.toolbar}>
          {userContext ? (
            <Container sx={styles.profile}>
              <Button 
                color="secondary" 
                variant="outlined"
                endIcon= {<AddCircleOutlineTwoToneIcon />}
                sx={{m: 2}}
                onClick={handleOpen}
                >
                    Add
              </Button>

              <Typography variant="h6" color='secondary' sx={styles.userName}>
                {userContext.user.name}
              </Typography>

              <Button 
                color="secondary" 
                variant="outlined" 
                sx={styles.logoutBtn}
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