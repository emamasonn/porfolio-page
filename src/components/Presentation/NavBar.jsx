import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    }
}));

const NavBar = () => {
    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.appBar}>
            <Typography variant="h6" className={classes.title}>
                Mason David
            </Typography>
            <Button color="inherit"><MenuIcon /></Button>
        </AppBar>
    )
}

export default NavBar;