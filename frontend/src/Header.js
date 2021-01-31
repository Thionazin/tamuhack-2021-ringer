import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Axios from 'axios';


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
        fontSize: '2.5rem',
    },
    button: {
        color: '#000',
        margin: '10px',
    },
}));

function ButtonAppBar() {
    const [data, setData] = useState(null);
    const getUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:4000/get_self",
        }).then((res) => {
          setData(res.data);
          console.log(res.data);
        });
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <ToolBar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        ringer<span className={classes.titleColor}>.gg</span>
                    </h1>
                    <Button variant='contained' className={classes.button} href='/login'>
                        Login
                    </Button>
                    <Button variant='contained' className={classes.button} href='/register'>
                        Register
                    </Button>
                    <Button variant='contained' className={classes.button} onClick={getUser}>Get User</Button>
                </ToolBar>
            </AppBar>
        </div>
    );
};

export default ButtonAppBar

