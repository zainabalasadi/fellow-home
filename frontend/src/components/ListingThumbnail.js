import React from 'react';
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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    }
}));

export default function ListingCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
        
        <CardMedia
            style={{ height: 0, paddingTop: '56%'}}
            image={require('../assets/images/cooking.jpg')}
            title="Fellow"
        />
        <CardContent>
            <Typography variant="body1" color="textFellowDark">
                {props.abstract}
            </Typography>
        </CardContent>
        <CardHeader
            avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                R
                </Avatar>
            }
            title="Kelsey"
        />
        </Card>
    );
}
