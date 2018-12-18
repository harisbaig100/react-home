import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import google from '../img/Google.jpg';

import Login from './Login';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  const NavBar = (props) => {
        const { classes } = props;
        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <img
                        className="rounded-circle"
                        src={google}
                        alt={google}
                        style={{ width: '120px', marginRight: '10px' }}
                        title="logo"
                   />
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        Sample NavBar
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                    
                    </Typography>
                    <Button color="inherit"><Login /></Button>
                        
                    </Toolbar>
                </AppBar>
            </div>
        );
  }


NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
export default withStyles(styles)(NavBar);