import { useState } from "react";
import { AUTH, SERVER_URL } from "../Constants/Constants";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export function useSignup() {
    const [signupError, setSignupError] = useState(null);
    const [signupIsLoading, setSignupIsLoading] = useState(null);
    const { authDispatch } = useAuthContext();
    const navigate = useNavigate();

    const signup = async (firstName, lastName, email, password) => {
        setSignupIsLoading(true);
        setSignupError(null);

        const response = await fetch(`${SERVER_URL}/user/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, password }),
        });
        const json = await response.json();

        if (!response.ok) {
            setSignupIsLoading(false);
            setSignupError(json.error);
        }
        if (response.ok) {
            // save user(user's token) to local storage
            localStorage.setItem("user", JSON.stringify(json));

            // update auth context
            authDispatch({ type: AUTH, payload: json });

            setSignupIsLoading(false);
            navigate("/posts", { replace: true });
        }
    };
    return { signup, signupError, setSignupError, signupIsLoading };
}
