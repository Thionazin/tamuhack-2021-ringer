import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import TinderCard from 'react-tinder-card'
import Axios from 'axios'





const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));




//swipe right, add to good, swipe left add to bad


//is called when a card leaves the screen, so when card leaves screen, generate another

  
export default function MatchCard() {

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [matchedCard, setMatchedCard] = useState({username:'placeholder'});


    function test() {
        return (<div>lol</div>)
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    var cardStyle = {
        transitionDuration: '2s',
    }
    
    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        getRandomUser()
        forceUpdate()
    }

    const onSwipe = (direction) => {
        if(direction==='right') {
            console.log('You swiped: ' + direction)
            swipeRight()
        }
        else if(direction==='left') {
            console.log('You swiped:' + direction)
        }
        
    }

    useEffect(() => {
        //on mount, get a random user first
        getRandomUser()
        
    },[])

    async function getRandomUser() {
        function helper(res){
            setMatchedCard(res.data)
        }
        await Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/getRandomProfile",
        }).then((res) => helper(res));
    }



    const swipeRight = async () => {
        await Axios({
          method: "POST",
          data: {
            otheruser: matchedCard.username,
          },
          withCredentials: true,
          url: "http://localhost:4000/swipe_yes",
        }).then((res) => console.log(res));
    };

    let category = 'chill'

    

    return (
        
        <TinderCard onSwipe={onSwipe} flickOnSwipe={true} onCardLeftScreen={() => onCardLeftScreen('test')} preventSwipe={['down', 'up']}>
            <Grid container alignItems='center' justify='center' direction='column' style={{ minHeight: '75vh' }}>
            <Card style={cardStyle} className={classes.root}>
                <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    {matchedCard.username[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                title={matchedCard.username}
                subheader="99% match"
                />
                <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {matchedCard.description}
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <IconButton aria-label="Like!">
                    <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ThumbDownIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>You both like {category} games</Typography>
                    <Typography paragraph>
                    {matchedCard.game_list}
                    </Typography>
                </CardContent>
                </Collapse>
            </Card>
            </Grid>
        </TinderCard>
    );
}


