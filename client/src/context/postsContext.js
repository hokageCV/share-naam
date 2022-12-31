import {createContext, useReducer} from 'react';
import {CREATE_POST, DELETE_POST, GET_POSTS, UPDATE_POST, LIKE_POST} from '../Constants/Constants';

export const PostsContext = createContext();

const postReducer = (state, action) =>{
    switch(action.type){
        case GET_POSTS:
            return { 
                postsContext: action.payload 
            }
        case CREATE_POST:
            return {
                postsContext: [action.payload, ...state.postsContext]
            }
        case UPDATE_POST:
            return{
                postsContext: state.postsContext.map((post)=> post._id === action.payload._id ? 
                     action.payload 
                    : post
                )
            }
        case DELETE_POST:
            return {
                postsContext: state.postsContext.filter( (post)=>post._id !== action.payload._id )
            }
        case LIKE_POST:
            return {
                postsContext: state.postsContext.map((post)=> post._id === action.payload._id ? 
                     action.payload 
                    : post
                )
            }
        default: 
            return state
    }
}

export const PostContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(postReducer, {postsContext: []})

    return (
        <PostsContext.Provider value={{ ...state, postsDispatch: dispatch}}> 
            {children}
        </PostsContext.Provider>  
    )
}