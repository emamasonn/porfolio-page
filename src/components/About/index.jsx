import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import img from '../../asset/i.jpg'

const useStyles = makeStyles((theme) => ({
    contentAbout: {
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    contentTitle: {
        margin: '50px 0',
        width: 250,
        textAlign: 'center',
    },
    img: {
        width: 170,
        borderRadius: '100%',
        border: '2px solid #fff',
        padding: 2,
        boxShadow: '0 60px 135px rgba(0, 0, 0, 0.14), 0 15px 50px rgba(0, 0, 0, 0.14)',
    },
    name: {
        margin: 35,
    },
    description: {
        maxWidth: 935,
        textAlign: 'center',
        margin: '0 20px',
    },
    button: {
        margin: 30,
    },
}))

const About = () => {
    const classes = useStyles();

    return(
        <div className={classes.contentAbout}>
            <div className={classes.contentTitle}>
                <Typography variant='h5'>ABOUT ME</Typography>
                <Divider />
            </div>     
            <img src={img} className={classes.img}/>
            <Typography variant='h5' className={classes.name}>I'm Jason Martin</Typography>
            <Typography variant='body1' className={classes.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting.</Typography>
            <Button variant="contained" color="secondary" className={classes.button}>Download My CV</Button>
        </div>
    )
}

export default About;