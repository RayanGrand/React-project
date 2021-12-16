import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Login} from '../functions/LoginFunc';
import '../styles/LoginComp.css';

import { useContext } from 'react';
import { userContext } from '../App.js'

const style = {
    display: 'flex',
    bgcolor: '#03a9f4',
    p: 4,
    borderRadius: '15px',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

}

function LoginComp() {

    const [userEmail, setUserEmail] = useState("");
    const [passWord, setPassWord] = useState("");

    const handleUserEmailInputChange = event => {
        setUserEmail(event.target.value);
    };

    const handlePassWordInputChange = event => {
        setPassWord(event.target.value);
    };

    console.log(useContext(userContext))

    return (
        <Box component="div" sx={style}>
            <Typography variant="h3" className="Title">LogIn</Typography>
            <form className="LogInForm">
                <TextField id="email" label="Email" variant="outlined" required={true} value={userEmail} onChange={handleUserEmailInputChange}/>
                <TextField id="password" label="Password" variant="outlined" type="password" required={true} onChange={handlePassWordInputChange}/>
                <Button type="button" color="primary" className="form__custom-button" onClick={() => Login(userEmail, passWord)}>
                    Log in
                </Button>
            </form>
        </Box>
    );
}

export default LoginComp;
