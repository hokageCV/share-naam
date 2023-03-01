import { useState } from "react";
import { AUTH, SERVER_URL } from "../Constants/Constants";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const [loginError, setLoginError] = useState(null);
    const [loginIsLoading, setLoginIsLoading] = useState(null);
    const { authDispatch } = useAuthContext();
    const navigate = useNavigate();

    const login = async (email, password) => {
        setLoginIsLoading(true);
        setLoginError(null);

        const response = await fetch(`${SERVER_URL}/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json();

        if (!response.ok) {
            setLoginIsLoading(false);
            setLoginError(json.message);
        }
        if (response.ok) {
            // save user(user's token) to local storage
            localStorage.setItem("user", JSON.stringify(json));

            // update auth context
            authDispatch({ type: AUTH, payload: json });

            setLoginIsLoading(false);
            navigate("/posts", { replace: true });
        }
    };
    return { login, loginError, setLoginError, loginIsLoading };
}
