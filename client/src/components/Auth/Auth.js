import React, {useState} from "react";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@mui/material";
import { AvatarStyle, ButtonStyle, FormStyle, PaperStyle } from "./style";

import { useSignup } from "../../hooks/useSignup";
import { useLogin } from "../../hooks/useLogin";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const initialState = { 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '',
}; 

export default function Auth(){
    const [isSignedup, setIsSignedup] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const { signup, signupError, signupIsLoading } = useSignup();
    const { login, loginError, loginIsLoading } = useLogin();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log("formData from handleSubmit in auth.js :  ", formData );
        
        if(!isSignedup){
            await signup(formData.firstName, formData.lastName, formData.email, formData.password)
        }
        else{
            await login(formData.email, formData.password)
        }
    }

    const clearForm = ()=> setFormData(initialState);
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const toggleIsSignedup = () => setIsSignedup((prev)=> !prev)

    return(
        <Container  maxWidth="xs">
            <Paper sx={PaperStyle} elevation={3}>

                <Avatar sx={AvatarStyle}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography variant="h5" >{isSignedup ? 'Login' : 'Signup'}</Typography>

                <form sx={FormStyle} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                        {/* ===== NON COMPONENT CODE ===== */}
                        { !isSignedup ? (
                            <>
                                <Grid item xs={12} sm={6} >
                                    <TextField 
                                        name="firstName" label="First Name"                           
                                        onChange={handleChange} type="text"
                                        variant='outlined' fullWidth required autoFocus 
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField 
                                        name="lastName" label="Last Name"                           
                                        onChange={handleChange} type="text" required 
                                        variant='outlined' fullWidth 
                                    />
                                </Grid>
                            </>
                        ): null }

                        <Grid item xs={12}  >
                            <TextField 
                                name="email" label="Email"                           
                                onChange={handleChange} type="email" required
                                variant='outlined' fullWidth 
                            />
                        </Grid>
                        <Grid item xs={12}  >
                            <TextField 
                                name="password" label="Password"                           
                                onChange={handleChange} required 
                                variant='outlined' fullWidth 
                                type= "password"                              
                            />
                        </Grid>

                        {/* ======= COMPONENT CODE ======== */}
                        {/* { !isSignedup ? (
                            <>
                                <FormIn name='firstName' label="First Name" handleChange={handleChange} autoFocus half />
                                <FormIn name='lastName' label="Last Name" handleChange={handleChange} half />
                            </>
                        ): <></>}
                        <FormIn name='email' label="Email" handleChange={handleChange} type="email" />
                        <FormIn name='password' label="Password" handleChange={handleChange} type= "password" />

                         */}

                        {/* ====== end of COMPONENT CODE ======  */}

                    </Grid>

                    <Button type='submit' variant="contained" color="primary" fullWidth sx={ButtonStyle}>
                        {isSignedup ? "Login" : "Signup"}
                    </Button>
                    <Grid container justify='flex-end'>
                        <Grid item>
                            <Button onClick={toggleIsSignedup} >
                            { !isSignedup ? 'Already have an account? Login' : "Don't have an account? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </Container>
    )
}