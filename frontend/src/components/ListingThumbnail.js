import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Listing from "./Listing";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 285,
        boxShadow: 'none',
    },
    media: {
        paddingTop: '56.25%', // 16:9
    },
    content: {
        padding: 0,
        paddingTop: 20,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ListingCard(props) {
    const classes = useStyles();

    return (
        <div><a href= {'../Listing'}>
            <Card className={classes.card}>
                <CardMedia
                    style={{ height: 0, paddingTop: '56%'}}
                    image={require('../assets/images/cooking.jpg')}
                    title="Fellow"
                />
                <CardContent className={classes.content}>
                    <Typography variant="overline" color="textSecondary">{props.details.roomType} · {props.details.suburb}</Typography>
                    <Typography variant="h6" color="textSecondary">{props.details.title}</Typography>
                    <Typography variant="body2" color="textSecondary">${props.details.price}/week</Typography>

                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                R
                            </Avatar>
                        }
                        title="Kelsey"
                    />
                </CardContent>
            </Card>
            </a>
        </div>
    );
}
