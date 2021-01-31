import { React } from "react";
import { makeStyles } from '@material-ui/core/styles';
import video from './background.mp4'

const useStyles = makeStyles((theme) => ({

}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <video autoPlay loop muted id='video'>
            <source src={video} type='video/mp4'/>
        </video>
    )
}