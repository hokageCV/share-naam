import { useAuthContext } from './useAuthContext'
import { usePostsContext } from './usePostsContext';
import { AUTH, GET_POSTS } from '../Constants/Constants';

export const useLogout = () => {
    const {authDispatch} = useAuthContext();
    const {postsDispatch} = usePostsContext();

    const logout = ()=>{
        // remove user from local storage
        localStorage.removeItem('user')

        // dispatch logout action
        authDispatch({type: AUTH})
        postsDispatch({type: GET_POSTS, payload: null})
    }

    return {logout}
}
