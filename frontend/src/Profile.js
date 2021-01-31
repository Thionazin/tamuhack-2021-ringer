import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import matched from matchCard.js

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
let uname = matched.username
export default function ProfilePage() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.container}>
                <h1 className={classes.text}>
                    Welcome Back, {uname}
                </h1>
                <ul>
                    <li>
                        <p>Stephen</p>
                    </li>
                    <li>
                        <p>Matthew</p>
                    </li>
                    
                </ul>
            </div>
        </div>
        
    )



}