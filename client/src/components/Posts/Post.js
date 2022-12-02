import React from 'react';
import moment from 'moment'
import {Card, CardActions, CardContent, Typography, Button} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = ({post})=>{
    return(
        <Card >
            <div>
                <button>
                    <MoreHorizIcon fontSize='default' />
                </button>
            </div>
            <CardContent>
                <Typography variant="h11" >{post.title}</Typography>
                <Typography variant="h6" >{post.place}</Typography>
                <Typography variant="body2" >{post.city}</Typography>
            </CardContent>
            <div>
                <Typography variant="body1" >{post.tag.map((tag)=> `#${tag} `)}</Typography>
            </div>
            <CardActions>
                <buttons size='small' color='primary' onClick={() => {}}>
                    <ThumbUpAltIcon fontSize='small' /> Like . {post.likes}
                </buttons>
                <buttons size='small' color='primary' onClick={() => {}}>
                    <DeleteForeverIcon fontSize='small' /> Delete
                </buttons>
            </CardActions>
        </Card>
    )
}

export default Post;