import { useContext } from "react";
import {PostsContext} from '../context/postsContext';

export const usePostsContext = ()=>{
    const context = useContext(PostsContext);

    // if trying to access context outside of its provider, throw error
    if(!context){
        throw Error("context ko out of context access mat karo")
    }

    // return context ie {state, dispatch}
    return context;
}