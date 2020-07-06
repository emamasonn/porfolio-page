import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Project from './Project'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    contentProjects: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        margin: '50px 0',
    },
    contentCards: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: 1140,
    },
}))

const Projects = () => {
    const classes = useStyles()
    const array = [1, 2, 3, 4, 5, 6];

    return(
        <div className={classes.contentProjects}>
            <Typography variant='h5' className={classes.title}>RECENT PROJECT</Typography>
            <div className={classes.contentCards}>
                {
                array.map(()=>(
                    <Project />
                ))
                }    
            </div>
        </div>
    )
}

export default Projects;