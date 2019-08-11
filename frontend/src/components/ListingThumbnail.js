/**
 * 
 */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Card, CardHeader, CardMedia, CardContent, Avatar, Typography} from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import Star from './Star'

/**
 * 
 */
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

/**
 * 
 * @param {*} props 
 */
const ListingCard = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <a href= {'../listing/' + props.details.id}>
                    <CardMedia
                        style={{ height: 0, paddingTop: '56%'}}
                        image={props.details.images ? props.details.images[0] : 
                            require('../assets/images/cooking.jpg')}
                        title={props.details.name}
                    />
                </a>
                <CardContent className={classes.content}>
                    <Typography variant="overline" color="textSecondary">
                        {props.details.property_type} · {props.details.address.suburb}
                    </Typography>
                    <a href= {'../listing/' + props.details.id}>
                        <Typography variant="h6" color="textSecondary">{props.details.name}</Typography>
                    </a>
                    <Typography variant="body2" color="textSecondary">${props.details.rooms[0].cost}/week</Typography>

                    <Star rating={props.details.rating} readOnly="true"/>
                        <a href={'../user/' + props.details.user.id}>
                            <CardHeader style={{padding:0, margin:0, marginTop: 10}}
                                avatar={
                                <Avatar aria-label="User" 
                                    src={props.details.user.avatar}
                                    className={classes.avatar}>R</Avatar>
                                }
                                title={props.details.user.first_name + " " + props.details.user.last_name}
                             />
                        </a>
                </CardContent>
            </Card>
        </div>
    );
}

export default ListingCard;
