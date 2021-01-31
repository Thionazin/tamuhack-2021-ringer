import React, { useEffect, UseEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import video from './background.mp4';
import Badge from 'react-bootstrap/Badge';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoClass: {
        width: '100%',
    },
    container: {
        position: 'absolute',
        textAlign: 'center',
        width: '50%',
        minHeight: '0%',
    },
    text: {
        fontSize: '4rem',
    },
    textColor: {
        color: '#f00'
    },
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <video autoPlay loop muted id='video' className={classes.videoClass}>
                <source src={video} type='video/mp4'/>
            </video>
            <div className={classes.container}>
                <h1 className={classes.text}>
                    Find | Connect | Play
                </h1>
            </div>
        </div>
    );
}