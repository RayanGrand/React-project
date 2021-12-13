import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import '../styles/LoginComp.css';


const style = {
    display: 'flex',
    bgcolor: '#A9A9A9',
    p: 4,
    borderRadius: '15px',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

}

function LoginComp() {
    return (
        <Box component="div" sx={style}>
            <Typography variant="h3" className="Title">LogIn</Typography>
            <form className="LogInForm">
                <TextField id="username" label="Username" variant="outlined"/>
                <TextField id="password" label="Password" variant="outlined" type="password"/>
                <Button type="button" color="primary" className="form__custom-button">
                    Log in
                </Button>
            </form>
        </Box>
    );
}

export default LoginComp;
