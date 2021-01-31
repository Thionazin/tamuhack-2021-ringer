import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        minHeight: '50vh'
    },
    text: {
        fontSize: '4rem',
    },
    textColor: {
        color: '#f00'
    },
}));

export default function ProfilePage() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
                <h1 className={classes.text}>
                    Welcome Back
                </h1>
                <ul>
                    <li>
                        <p>Jimmy Johnson</p>
                    </li>
                    <li>
                        Mark
                    </li>
                </ul>
            </div>
        </div>
        
    )



}