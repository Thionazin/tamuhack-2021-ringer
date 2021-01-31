import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }, 
    title: {
        flexGrow: 1,
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

    return (<div className={classes.root}>
        <AppBar position="static">
            <ToolBar>
                <Typography variant="h6" className={classes.title}>
                Ringer
                </Typography>
                <Button color="inherit">
                    <Link to='/login'>Login</Link>
                </Button>
                <Button color='inherit'>
                    <Link to='register'>Register</Link>
                </Button>
                <Button onClick={getUser}>Get User</Button>
            </ToolBar>
        </AppBar>
    </div>);
};

export default ButtonAppBar

