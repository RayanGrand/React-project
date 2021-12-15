import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import '../styles/Banner.css'

function Banner() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="ToolBar">
                    <div>
                        <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Button color="inherit">News</Button>
                    </div>
                    <div>
                        <Button color="inherit" className="LoginIcon" href="http://localhost:3000/register">Register</Button>
                        <Button color="inherit" className="LoginIcon" href="http://localhost:3000/login">Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Banner;
