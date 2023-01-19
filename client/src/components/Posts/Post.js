import React from 'react';
import {Card, CardActions, CardContent, Typography, Button, Modal, Box, CardMedia, CardHeader} from '@mui/material';
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import UpdatePostForm from '../Form/UpdatePostForm';

import styles from './style';
import dhokra from './dhokra.jpg'

import LikePost from './LikePost';
import DeletePost from './DeletePost';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useAuthContext } from '../../hooks/useAuthContext';


const Post = ({post})=>{
    const {userContext} = useAuthContext() 
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const openPost = () => navigate(`/posts/${post._id}`, {replace: true})

    return(
        <Card sx={styles.CardStyle} >

            <CardHeader
                title={post.title}
                titleTypographyProps={{textTransform: 'capitalize', variant:'h5' }}

                subheader={ moment(post.createdAt).fromNow() }
                subheaderTypographyProps={{variant:'caption'}}

                action={
                    (userContext!==null && userContext!==undefined && userContext.user._id === post.creatorID) ?
                        <Button
                            style={styles.EditButtonStyle}
                            size='small'
                            onClick={()=>handleOpen()}
                            >
                            <MoreHorizIcon fontSize='medium' />
                        </Button>
                        : null
                }
            />

                <CardMedia 
                    sx={styles.CardMediaStyle}
                    image={post.imgFile  || dhokra}
                    title={post.title}
                    onClick={openPost}
                />
                <CardContent sx={styles.CardContentStyle}>
                    
                    <Typography variant="subtitle2" sx={{textTransform: 'capitalize'}} >
                    <LocationOnOutlinedIcon fontSize='small'/> {post.place}
                    </Typography>
                    <Typography variant="body2" sx={{textTransform: 'capitalize'}} >
                        {post.city}
                    </Typography>
                    <div>
                        <Typography variant="caption" color='textSecondary' >
                            {post.tags.map((tag)=>`#${tag} `)}
                        </Typography>
                    </div>
                </CardContent>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.BoxStyle}>
                    <UpdatePostForm 
                        post={post} 
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>

            <CardActions sx={styles.CardActionsStyle} >
                {userContext!==null && userContext!==undefined && <LikePost post={post} />}
                {(userContext!==null && userContext!==undefined &&   userContext.user._id === post.creatorID) ?
                    <DeletePost post={post} />
                    : null
                }
            </CardActions>

        </Card>
    )
}

export default Post;