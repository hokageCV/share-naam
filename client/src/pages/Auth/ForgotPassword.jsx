import React from "react";
import { Button } from "@mui/material";
import { SERVER_URL } from "../../Constants/Constants";

export default function ForgotPassword({ email, setError }) {
  const handleClick = async () => {
    console.log("Forgot Password clicked");
    const response = await fetch(`${SERVER_URL}/user/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();

    if (!response.ok) console.log(data.message);
    else {
      setError("Check your email for a link to reset your password");
    }
  };
  return (
    <div>
      <Button onClick={handleClick}>Forgot Password</Button>
    </div>
  );
}
