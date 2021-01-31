import React, { useState } from "react";
import "./App.css";
import Axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import Select from 'react-select'
import SelectGamesDropDown from './SelectGamesDropDown'

function RegisterPage() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [description, setDescription] = useState("");
  const [gameList, setGameList] = useState([]);
  const history = useHistory();
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  
  function helper(res) {
    console.log(res)
    if (res.data=="User Created") {
      console.log(gameList)
      history.push('/')
    }
    else if (res.data=="User Already Exists") {
      console.log('That user already exists')
    }
    else {
      console.log('error')
      console.log(res)
    }
  }
  const register = () => {
      Axios({
        method: "POST",
        data: {
          username: registerUsername,
          password: registerPassword,
          description: description,
          game_list: gameList
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
      }).then((res) => helper(res));
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: '#f00',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  let arr = []
  function gamesarrhelper(e) {
    

    if (!e.target.innerHTML.includes("Select...") || !e.target.innerHTML.includes('<div')){
      arr.push(e.target.innerHTML)
    }
    else{
      arr = []
    }
    console.log(arr)
    setGameList(arr)
  }

  const classes = useStyles()
  return (


    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                onChange={(e)=> setRegisterUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="displayname"
                label="Display Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>{setRegisterPassword(e.target.value)}}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
              variant="outlined"
              required
              fullWidth
              name="description"
              label="Tell us a little about youself!"
              type="description"
              id="description"
              autoComplete="description"
              onChange={(e)=>{setDescription(e.target.value)}}
              
              
              />
            </Grid>
            <Grid item xs={12} onClick={(e)=>gamesarrhelper(e)}>
              <SelectGamesDropDown />
            </Grid>
          
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={register}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>

  )


}

export default RegisterPage