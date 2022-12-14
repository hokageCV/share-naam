import React from 'react';
import {Card, CardActions, CardContent, Typography, Button, ButtonBase, Modal, Box} from '@mui/material';
import { BoxStyle, CardActionsStyle, CardStyle, CardContentStyle, EditButtonStyle } from './style';
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import UpdatePostForm from '../Form/UpdatePostForm';


import LikePost from './LikePost';
import DeletePost from './DeletePost';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useAuthContext } from '../../hooks/useAuthContext';


const Post = ({post})=>{
    const {userContext} = useAuthContext() 
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const openPost = () => navigate(`/posts/${post._id}`, {replace: true})

    return(
        <Card style={CardStyle} >
            <div>
                <Typography variant="caption">
                    &nbsp; {moment(post.createdAt).fromNow()}
                </Typography>

                {(userContext!==null && userContext!==undefined && userContext.user._id === post.creatorID) ?
                    <Button
                        style={EditButtonStyle}
                        size='small'
                        onClick={()=>handleOpen()}
                        >
                        <MoreHorizIcon fontSize='medium' />
                    </Button>
                    : null
                }
            </div>

            <ButtonBase onClick={openPost} sx={{margin:'5px', padding:'2px'}}>
                <CardContent sx={CardContentStyle}>
                    <Typography variant="h5" sx={{textTransform: 'capitalize'}}>
                        {post.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{textTransform: 'capitalize'}} >
                        {post.place}
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
            </ButtonBase>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={BoxStyle}>
                    <UpdatePostForm 
                        post={post} 
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>

            <CardActions sx={CardActionsStyle} >
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