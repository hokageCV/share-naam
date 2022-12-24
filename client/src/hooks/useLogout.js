import { useAuthContext } from './useAuthContext'
import { usePostsContext } from './usePostsContext';
import { AUTH, GET_POSTS } from '../Constants/Constants';
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const {authDispatch} = useAuthContext();
    const {postsDispatch} = usePostsContext();
    const navigate = useNavigate();

    const logout = ()=>{
        // remove user from local storage
        localStorage.removeItem('user')

        // dispatch logout action
        authDispatch({type: AUTH})
        postsDispatch({type: GET_POSTS, payload: null})

        navigate('/', {replace: true})
    }

    return {logout}
}
