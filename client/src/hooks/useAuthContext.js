import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext= ()=>{
    const context = useContext(AuthContext)
  
    // if trying to access context outside of its provider, throw error
    if(!context){
        throw Error("useAuthContext must be used inside AuthContextProvider");
    }

    // return the state & dispatch ie the context
    return context;
}