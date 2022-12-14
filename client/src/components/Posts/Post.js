import React from 'react';
import {Card, CardActions, CardContent, Typography, Button, Modal, Box} from '@mui/material';
import { usePostsContext } from '../../hooks/usePostsContext';
import { DELETE_POST, LIKE_POST } from '../../Constants/Constants';
import { BoxStyle, CardActionsStyle, CardStyle, CardContentStyle, EditButtonStyle } from './style';
import moment from 'moment'
import UpdatePostForm from '../Form/UpdatePostForm';


import LikePost from './LikePost';
import DeletePost from './DeletePost';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Post = ({post})=>{
    const {postsDispatch} = usePostsContext();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    
    // const handleDelete = async (_id) => {
    //     const response = await fetch(`/posts/${_id}`, {
    //         method: 'DELETE',
    //             body: JSON.stringify(post),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //     })
    //     const json = await response.json();

    //     if(!response.ok){
    //         console.log(json.error)
    //     }
    //     else{
    //         postsDispatch({type: DELETE_POST, payload: json})
    //         console.log("post deleted: ", json)
    //     }
    // }

    // const handleLike = async (_id)=>{
    //     const response = await fetch(`/posts/${_id}/likePost`, {
    //         method: 'PATCH',
    //             // body: JSON.stringify(post),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //     })
    //     const json = await response.json();

    //     if(!response.ok){
    //         console.log(json.error)
    //     }
    //     else{
    //         postsDispatch({type: LIKE_POST, payload: json})
    //         console.log("post liked: ", json)
    //     }
    // }

    return(
        <Card style={CardStyle} >
            <div>
                <Typography variant="body2"> &nbsp; {moment(post.createdAt).fromNow()}</Typography>
                <Button
                    style={EditButtonStyle}
                    size='small'
                    onClick={()=>handleOpen()}
                >
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>

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

            <CardContent sx={CardContentStyle}>
                <Typography variant="h5" >{post.title}</Typography>
                <Typography variant="h6" >{post.place}</Typography>
                <Typography variant="body1" >{post.city}</Typography>
                <div>
                    <Typography variant="body2" color='textSecondary' component='p'>{post.tags.map((tag)=>`#${tag} `)}</Typography>
                </div>
            </CardContent>

            <CardActions sx={CardActionsStyle} >
                <LikePost post={post} />
                <DeletePost post={post} />
            </CardActions>

        </Card>
    )
}

export default Post;