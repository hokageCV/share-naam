import { GET_POSTS } from '../Constants/Constants';
import {usePostsContext} from '../hooks/usePostsContext'


export const useFetchPosts = async ()=>{
    const {postsDispatch} = usePostsContext();

    const response = await fetch('/posts');
    const json = await response.json();
    
    if(response.ok){
        console.log(json)
        postsDispatch({type: GET_POSTS, payload: json})
    }
}