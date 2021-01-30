import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles((theme) => ({
    rootAppBar: {
        flexGrow: 1,
    },
    rootCard: {
        maxWidth: 500,
    }, 
    titleAppBar: {
        flexGrow: 1,
    },
    titleCard: {
        fontSize: 14,
    },
    bullet: {
        display: 'inline-bock',
        margin: '0 2px', 
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function App() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(
        <div>
            <AppBar position="static" className={classes.rootAppBar}>
                <ToolBar>
                    <Typography variant="h6" className={classes.titleAppBar}>
                        Ringer
                    </Typography>
                    <Button color="inherit">
                        Login
                    </Button>
                </ToolBar>
            </AppBar>
            <Grid container alignItems='center' justify='center'>
                <Card className={classes.rootCard} variant='elevation'>
                    <CardContent>
                        <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                            word of the day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindl.
                            <br />
                            {'"a benovelent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
};