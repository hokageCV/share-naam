import React from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function FormIn({name, half, label, type, handleChange, autoFocus, handleShowPassword}){
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField 
            name={name}
            onChange={handleChange}
            variant='outlined'
            fullWidth
            required
            label={label}
            type={type}
            autoFocus={autoFocus}
            InputProps= { (name==='password') ? {
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                            {type==='password' ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                        </IconButton>
                    </InputAdornment>
                )
            } : null }
        />
    </Grid>
}