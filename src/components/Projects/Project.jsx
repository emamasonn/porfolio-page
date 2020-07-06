import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import img from '../../asset/img.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        width: 345,
        margin: 8,
        position: 'relative',
      },
      media: {
        height: 200,
      },
      contentName:{
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        //display: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 5,
      }, 
}))

const Project = () => {
    const classes = useStyles();

    return(
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`${ img }`}
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
                <div className={classes.contentName}>
                    <Typography gutterBottom variant="h6" component="h2">
                        Nombre del Proyecto
                    </Typography>
                    <Button><ArrowForwardIcon/></Button>
                </div>
            </Card>
    );
}

export default Project;