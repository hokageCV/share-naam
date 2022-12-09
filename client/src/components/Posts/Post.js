import React from 'react';
import moment from 'moment'
import {Card, CardActions, CardContent, Typography, Button, Modal, Box} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { usePostsContext } from '../../hooks/usePostsContext';
import { DELETE_POST } from '../../context/contextConstants';
import UpdatePostForm from '../Form/UpdatePostForm';


const Post = ({post})=>{
    const {postsDispatch} = usePostsContext();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background',
        // border: '2px solid #000',
        // boxShadow: 24,
        p: 4,
      };
    
    const handleDelete = async (_id) => {
        const response = await fetch(`/posts/${_id}`, {
            method: 'DELETE',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        const json = await response.json();

        if(!response.ok){
            console.log(json.error)
        }
        else{
            postsDispatch({type: DELETE_POST, payload: json})
            console.log("post deleted: ", json)
        }
    }
    return(
        <Card style={{backgroundColor: "#FFFAD7"}} >
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            <div>
                <Button
                    style={{color:'primary'}}
                    size='small'
                    onClick={()=>handleOpen()}
                >
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <UpdatePostForm 
                        post={post} 
                        handleClose={handleClose}
                    />
                </Box>
            </Modal>
            <CardContent>
                <Typography variant="h4" >{post.title}</Typography>
                <Typography variant="h6" >{post.place}</Typography>
                <Typography variant="body2" >{post.city}</Typography>
                <div>
                    <Typography variant="body1" >#{post.tags}</Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary' onClick={() => {}}>
                    <ThumbUpAltIcon fontSize='small' /> Like . {post.likes}
                </Button>
                <Button 
                    size='small' 
                    color='primary' 
                    onClick={()=>{ handleDelete(post._id) }}
                >
                    <DeleteForeverIcon fontSize='small' /> Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;