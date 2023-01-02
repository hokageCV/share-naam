import { useAuthContext } from './useAuthContext'
import { AUTH } from '../Constants/Constants';
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const {authDispatch} = useAuthContext();
    const navigate = useNavigate();

    const logout = ()=>{
        // remove user from local storage
        localStorage.removeItem('user')

        // dispatch logout action
        authDispatch({type: AUTH})

        navigate('/', {replace: true})
    }

    return {logout}
}
