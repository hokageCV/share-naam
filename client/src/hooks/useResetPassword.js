import { useState } from "react";
import { SERVER_URL } from "../Constants/Constants";
import { useNavigate } from "react-router-dom";

export function useResetPassword() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const reset = async (password, resetToken) => {
        const response = await fetch(`${SERVER_URL}/user/reset-password`, {
            method: "PATCH",

            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                newPassword: password,
                encodedResetToken: resetToken,
            }),
        });

        const json = await response.json();

        if (!response.ok) {
            setError(json.message);
            console.log(`Reset password error: ${json.message}`);
        }
        if (response.ok) {
            setError("Reset Successful!");
            navigate("/posts", { replace: true });
        }
    };
    return { reset, error, setError };
}
