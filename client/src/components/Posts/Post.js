import React from 'react';
import moment from 'moment'
import {Card, CardActions, CardContent, Typography, Button} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Post = ({post, setCurrentID})=>{
    return(
        <Card style={{backgroundColor: "#FFFAD7"}} >
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            <div>
                <Button
                    style={{color:'primary'}}
                    size='small'
                    onClick={()=>setCurrentID(post._id)}
                >
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <CardContent>
                <Typography variant="h4" >{post.title}</Typography>
                <Typography variant="h6" >{post.place}</Typography>
                <Typography variant="body2" >{post.city}</Typography>
            </CardContent>
            <div>
                <Typography variant="body1" >{post.tags.map((tag)=> `#${tag} `)}</Typography>
            </div>
            <CardActions>
                <Button size='small' color='primary' onClick={() => {}}>
                    <ThumbUpAltIcon fontSize='small' /> Like . {post.likes}
                </Button>
                <Button size='small' color='primary' onClick={() => {}}>
                    <DeleteForeverIcon fontSize='small' /> Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;