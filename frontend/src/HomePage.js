import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 256,
    }, 
    titleCard: {
        fontSize: 14,
    },
}));

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Grid container alignItems='center' justify='center'>
            <Card className={classes.rootCard} variant='elevation'>
                <CardContent>
                    <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
                        word of the day
                    </Typography>
                    <Typography variant="h5" component="h2">
                        benevolent
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kind.
                        <br />
                        {'"a benovelent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};