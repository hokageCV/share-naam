import {createContext, useReducer} from 'react';
import {CREATE_POST, DELETE_POST, GET_POSTS, UPDATE_POST, LIKE_POST, GET_POST_BY_ID} from '../Constants/Constants';

export const PostsContext = createContext();

const postReducer = (state, action) =>{
    switch(action.type){
        case GET_POSTS:
            return{ 
                postsContext: {
                    posts: action.payload.data, 
                    currentPage: action.payload.currentPage, 
                    totalPages: action.payload.totalPages 
                } 
            }
        case GET_POST_BY_ID:
            // console.log({action})
            return{
                postsContext: {
                    post: action.payload.data
                }
            }
        case CREATE_POST:
            return {
                postsContext: {
                    ...state.postsContext,
                    posts: [action.payload,  ...state.postsContext.posts],
                }
            }
        case UPDATE_POST:
            return{
                postsContext: {
                    ...state.postsContext,
                    posts: 
                        state.postsContext.posts.map( (post)=> post._id === action.payload._id ?
                            action.payload
                            : post 
                        )
                    ,
                }
            }
        case DELETE_POST:
            return {
                postsContext: {
                    ...state.postsContext,
                    posts: 
                        state.postsContext.posts.filter( (post)=>post._id !== action.payload._id )
                    ,
                }
            }
        case LIKE_POST:
            return {
                postsContext: {
                    ...state.postsContext,
                    posts: 
                        state.postsContext.posts.map((post)=> post._id === action.payload._id ?
                            action.payload
                            : post 
                        )
                    ,
                }
            }
        default: 
            return state
    }
}

export const PostContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(postReducer, {postsContext: {}})

    return (
        <PostsContext.Provider value={{ ...state, postsDispatch: dispatch}}> 
            {children}
        </PostsContext.Provider>  
    )
}