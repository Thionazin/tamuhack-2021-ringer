import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import './Header.css';



const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbar: {
        backgroundColor: '#000',
        height: '75px',
    },
    titleColor: {
        color: '#f00',
    },
    appbarTitle: {
        flexGrow: 1,
        fontSize: '2.75rem',
    },
    button: {
        color: '#000',
        margin: '10px',
    },
}));

export default function ButtonAppBar() {
    const [data, setData] = useState(null);
    const getUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/get_self",
        }).then((res) => {
          setData(res.data);
          console.log(res.data);
          return res.data
        });
    };
    const logout = () =>{
        Axios({
            method: "POST",
            withCredentials: true,
            url: "http://localhost:4000/logout",
          }).then((res) => console.log(res));
    }
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
                <ToolBar className={classes.appbarWrapper}>
                    <h1 href='/home' className={classes.appbarTitle}>
                        ringer<span className={classes.titleColor}>.gg</span>
                    </h1>
                    <Button variant='contained' className={classes.button} href='/login'>
                        Login
                    </Button>
                    <Button variant='contained' className={classes.button} href='/register'>
                        Register
                    </Button>
                    <Button variant='contained' className={classes.button} href='/profile' onClick={getUser}>Profile</Button>
                    <Button variant='contained' className={classes.button} onClick={logout}>Profile</Button>
                </ToolBar>
            </AppBar>
        </div>
    );
};
