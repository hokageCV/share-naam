import React, {useState} from "react";
import { Avatar, Button, Paper, Grid, Typography, Container } from "@mui/material";
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import { AvatarStyle, FormStyle, PaperStyle } from "./style";
import FormInput from "./FormInput";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Auth(){
    const isSignedup = false;
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {}

    const handleChange = () => {}

    const handleShowPassword = () => setShowPassword((prev)=> !prev)

    return(
        <Container component='main' maxWidth="xs">
            <Paper sx={PaperStyle} elevation={3}>

                <Avatar sx={AvatarStyle}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant="h5" >{isSignedup ? 'Login' : 'Signup'}</Typography>

                <form sx={FormStyle} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { !isSignedup ? (
                            <>
                                <FormInput name='firstName' label="First Name" handleChange={handleChange} autoFocus half />
                                <FormInput name='lastName' label="Last Name" handleChange={handleChange} half />
                            </>
                        ): null}
                        <FormInput name='email' label="Email" handleChange={handleChange} type="email" />
                        <FormInput name='password' label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>

                        { !isSignedup &&
                            <FormInput name='confirmPassword' label="Confirm Password" handleChange={handleChange} type="password" />
                        }
                    </Grid>
                    <Button type='submit' fullWidth variant="container" color="primary">
                        {isSignedup ? "Login" : "Signup"}
                    </Button>
                </form>

            </Paper>
        </Container>
    )
}