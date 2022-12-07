import {createContext, useReducer} from 'react';
import {CREATE_POST, DELETE_POST, GET_POSTS, UPDATE_POST} from './contextConstants'

export const PostsContext = createContext();

const postReducer = (state, action) =>{
    switch(action.type){
        case GET_POSTS:
            return { 
                posts: action.payload 
            }
        case CREATE_POST:
            return {
                posts: [action.payload, ...state.posts]
            }
        case UPDATE_POST:
            return{
                posts: state.map((post)=> post._id === action.payload._id ? 
                    [...state.posts, action.payload ]
                    : post
                )
            }
        case DELETE_POST:
            return {
                posts: state.posts.filter( (post)=>post._id !== action.payload._id )
            }
        default: 
            return state
    }
}

export const PostContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(postReducer, {posts: []})

    return (
        <PostsContext.Provider value={{ ...state, postsDispatch: dispatch}}> 
            {children}
        </PostsContext.Provider>  
    )
}