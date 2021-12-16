import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Register} from '../functions/LoginFunc';
import '../styles/LoginComp.css';

const style = {
    display: 'flex',
    bgcolor: '#03a9f4',
    p: 4,
    borderRadius: '15px',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

}

function RegisterComp() {

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleUserNameInputChange = event => {
        setUserName(event.target.value);
    };

    const handlePassWordInputChange = event => {
        setPassWord(event.target.value);
    };
        
    const handleUserEmailInputChange = event => {
        setUserEmail(event.target.value);
    };

    const handleFirstNameInputChange = event => {
        setFirstName(event.target.value);
    };
    
    const handleLastNameInputChange = event => {
        setLastName(event.target.value);
    };

    return (
        <Box component="div" sx={style}>
            <Typography variant="h3" className="Title">Register</Typography>
            <form className="RegisterForm">
                <TextField id="email" label="Email" variant="outlined" required={true} value={userEmail} onChange={handleUserEmailInputChange}/>
                <TextField id="username" label="Username" variant="outlined" required={true} value={userName} onChange={handleUserNameInputChange}/>
                <TextField id="password" label="Password" variant="outlined" type="password" required={true} onChange={handlePassWordInputChange}/>
                <TextField id="firstName" label="FirstName" variant="outlined" required={true} value={firstName} onChange={handleFirstNameInputChange}/>
                <TextField id="lastName" label="LastName" variant="outlined" required={true} value={lastName} onChange={handleLastNameInputChange}/>
                <Button type="button" color="primary" className="form__custom-button" onClick={() => Register(userEmail, userName, passWord, firstName, lastName)}>
                    Register
                </Button>
            </form>
        </Box>
    );
}

export default RegisterComp;
