import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Login from './Login';

class NavBar extends Component {
    render() {
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            React & Material-UI Sample Application
                        </Typography>
                            <Login></Login>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default NavBar;