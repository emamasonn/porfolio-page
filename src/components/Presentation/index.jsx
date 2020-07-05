import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import img from '../../asset/img.jpg'

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundImage: `url(${ img })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
    },
    content:{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: '100vh',
    },
    contentDetail: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        maxWidth: 700,
        margin: '100px 0 50px 0',
        textAlign: 'center',
    },
    description: {
        maxWidth: 700,
        textAlign: 'center',
        marginBottom: 50,
    },
    iconSocial: {
        margin: 10,
    },
    button: {
        margin: 30,
    }
}));

const Presentation = () => {
    const classes = useStyles()

    return(
        <div className={classes.background}>
            <div>
            <NavBar />
            <div className={classes.contentDetail}>
                <Typography variant='h2' className={classes.title}>I' M Designer & Frontend Developer.</Typography>
                <Typography variant='h6' className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit Sed a nisl ullamcorper.</Typography>
                <div>
                    <GitHubIcon className={classes.iconSocial}/>
                    <LinkedInIcon className={classes.iconSocial}/>
                    <TwitterIcon className={classes.iconSocial}/>
                </div>
                <Button variant="contained" color="secondary" className={classes.button}>Contact Me</Button>
            </div>
            </div>
        </div>
    )
}

export default Presentation;