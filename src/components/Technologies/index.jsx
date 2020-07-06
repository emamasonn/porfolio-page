import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logoReact from '../../asset/react.png'
import logoRedux from '../../asset/redux.png'
import logoReactRouter from '../../asset/react-router.png'
import logoFirebase from '../../asset/firebase.png'
import logoCss from '../../asset/css.png'
import logoHtml from '../../asset/html.png'

const useStyles = makeStyles((theme) => ({
    contentTechnologies: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    contentLogos: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    logoCss: {
        width: 200,
    },
    logoHtml:{
        width: 200,
    },
    logoReact: {
        width: 200,
    },
    logoRedux: {
        width: 200,
    },
    logoReactRouter: {
        width: 200,
    },
    logoFirebase: {
        width: 200,
    },
    title: {
        margin: '50px 0',
    },
}))

const Technologies = () => {
    const classes = useStyles()

    return(
        <div className={classes.contentTechnologies}>
            <Typography variant='h5' className={classes.title}>TECHNOLOGIES</Typography>
            <div className={classes.contentLogos}>
                <img src={logoCss} className={classes.logoCss}/>
                <img src={logoHtml} className={classes.logoHtml}/>
                <img src={logoReact} className={classes.logoReact}/>
                <img src={logoRedux} className={classes.logoRedux}/>
                <img src={logoReactRouter} className={classes.logoReactRouter}/>
                <img src={logoFirebase} className={classes.logoFirebase}/>
                
            </div>
        </div>
    )
}

export default Technologies;