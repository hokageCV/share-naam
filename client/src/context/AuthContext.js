import {createContext, useReducer, useEffect} from 'react'
import { AUTH, LOGOUT } from '../Constants/Constants'

export const AuthContext = createContext()

export const authReducer  = (state, action) => {
    switch(action.type){
        case AUTH:
            return {userContext: action.payload}
        case LOGOUT:
            return {userContext: null}
        default:
            return state 
    }
}

export const AuthContextProvider = ({children})=>{
    const [state, authDispatch] = useReducer(authReducer, {userContext: null })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))

        if(user){
            authDispatch({type: AUTH, payload: {...user} })
        }
    }, [])

    

    console.log( 'AuthContext : ', state );

    return (
        <AuthContext.Provider value={{...state, authDispatch}} >
            {children}
        </AuthContext.Provider>
    )
}