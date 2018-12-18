import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export default () => {
  return (
    <AppBar position="static">
    <Typography variant="h6" color="inherit">
        <footer className="bg-dark text-white mt-5 p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} React-Home
        </footer>
    </Typography>
    
    </AppBar>
  );
};