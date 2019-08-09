import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Star from './Star'

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
        paddingTop: 7,
    },
    avatar: {
        backgroundColor: red[500],
        width: 30,
        height: 30
    },
}));

const ListingCard = (props) => {
    const classes = useStyles();

    return (
        <div>
            <a href= {'../listing/' + props.details.id}>
                <Card className={classes.card}>
                <CardMedia
                    style={{ height: 0, paddingTop: '56%'}}
                    image={props.details.images ? props.details.images[0] : 
                        require('../assets/images/cooking.jpg')}
                    title={props.details.name}
                />
                <CardContent className={classes.content}>
                    <Typography variant="overline" color="textSecondary">
                        {props.details.property_type} · {props.details.address.suburb}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">{props.details.name}</Typography>
                    <Typography variant="body2" color="textSecondary">${props.details.rooms[0].cost}/week</Typography>

                <Star rating={props.details.rating} readOnly="true"/>
                    <CardHeader style={{padding:0, margin:0, marginTop: 10}}
                        avatar={
                            <Avatar aria-label="User" 
                                    src={props.details.user.avatar}
                                    className={classes.avatar}>R</Avatar>
                        }
                        title={props.details.user.first_name + " " + props.details.user.last_name}
                    />
                </CardContent>
                </Card>
            </a>
        </div>
    );
}

export default ListingCard;
