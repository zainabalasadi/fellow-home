/**
 * 
 */
import React from "react"
import axios from 'axios'
import {Divider, Box, Grid, Avatar, Container} from "@material-ui/core"
import {CssTextField} from "./Textinputs"
import * as Buttons from './Button'
import { makeStyles } from '@material-ui/core/styles'
import {GridList, GridListTile, CircularProgress} from "@material-ui/core"
import MapContainer from "./MapContainer"
import Star from './Star'
import SaveButton from './SaveButton'
import moment from 'moment'

/**
 * 
 */
const useStyles = makeStyles(theme => ({
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        height:'400px',
    },
}));

/**
 * 
 */
const Listing = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        review: '',
    });
    const currUser = localStorage.getItem('currentUser');

    const lid = props.match.params.id;
    const [listing, setListing] = React.useState('');
    const [reviews, setReviews] = React.useState([]);
    const [rating, setRating] = React.useState(0);
    const [reviewSent, setReviewSent] = React.useState(false);

    React.useEffect(() => {
        getListing();
        getReviews();
        setReviewSent(false);
    }, [reviewSent]);

    const hasLoaded = () => {
        return !listing.images || !listing.user || !listing.rooms 
                || !listing.address || !listing.restrictions || !listing.preferences;
    }
    
    /**
     * 
     */
    const getListing = () => {
        axios.get('http://localhost:5000/api/listings/' + lid)
            .then((res) => {
                console.log(res);
                setListing(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /**
     * 
     */
    const getReviews = () => {
        axios.get('http://localhost:5000/api/listings/' + lid + '/reviews')
            .then((res) => {
                console.log(res);
                setReviews(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    /**
     * 
     */
    const sendReview = () => {
        console.log(values.review);
        axios.post('http://localhost:5000/api/listings/' + lid + '/reviews', {
            title: '',
            content: values.review,
            rating: rating
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res);
            setReviewSent(true);
        }).catch((err) => {
                console.log(err);
        }).finally(() => {
            setValues({review: ''});
            setRating(0);
        });
    }

    /**
     * 
     */
    const handleChange = name => event => {
        setValues({ 
            ...values, 
            [name]: event.target.value, 
        });
    };

    /* wait for data to be fetched before loading */
    if (hasLoaded()) {
        return (<CircularProgress />);
    }

    return (
        <div>
            <div style={{backgroundColor: 'whitesmoke',height:'43vh'}} maxWidth="xl">
                <GridList className={classes.gridList} cols={2.5} cellHeight={390} >
        {
            listing.images.map((image) => (
                        <GridListTile key={image}>
                            <img src={image} alt={listing.title}/>
                      </GridListTile>
            ))
        }
                </GridList>
            </div>
            {currUser ? 
            <div style={{textAlign:'right'}} maxWidth="xl">
                <SaveButton listing_id={listing.id}/>
            </div>
            : null }
            <Container style={{textAlign:'center', padding:30}} maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs = {8}>
                        <Container style={{padding: 10, textAlign:'left'}}>
                            <h4>{listing.name}</h4>
                            { 
                                listing.address.name + ", " + listing.address.suburb + ", "  +
                                listing.address.city + ", " + listing.address.postcode
                            }
                            <br/><br/>
                            <Grid container>
                                <Grid item xs>
                                    <img alt="Bed" src="https://img.icons8.com/ios/50/000000/bed.png" width='20' hspace='10'/>
        {listing.num_bedrooms} bedrooms
                                </Grid>
                                <Grid item xs>
                                    <img alt="Bathroom" src="https://img.icons8.com/ios/50/000000/shower-and-tub.png" width='20' hspace='10'/>
        {listing.num_bathrooms} bathrooms
                                </Grid>
                                <Grid item xs>
                                    <img alt="People" src="https://img.icons8.com/ios/50/000000/men-age-group-4.png" width='20' hspace='10'/>
        {listing.num_vacancies} vacancies
                                </Grid>
                            </Grid>
                            <br/><br/>
                            <Divider/>
                            <h5>About the property</h5>
                            <div dangerouslySetInnerHTML={{__html: listing.description}}/>

                            <br/><br/>
                            <Divider/>
        {
            listing.rooms.map((room, index) => (
                <div>
                <h5 style={{paddingTop:30}}>Room {index + 1}</h5>
                            <h6 style={{marginTop:40, marginBottom:20}}>Details</h6>
                            <Grid container>
                                <Grid item xs>
                                    <img alt="Price" src="https://img.icons8.com/ios/50/000000/us-dollar.png" width='15' hspace='10'/>
                                    ${room.cost} weekly rent<br/>
                                    <img alt="Electricity" src="https://img.icons8.com/pastel-glyph/64/000000/electricity.png" width='15' hspace='10'/>
                Bills {room.bills}<br/>
                                    <img alt="Date" src="https://img.icons8.com/material-outlined/24/000000/calendar.png" width='15' hspace='10'/>
                {room.min_stay} days minimum stay<br/>
                                    <img alt="Parking" src="https://img.icons8.com/small/16/000000/parking.png" width='15' hspace='10'/>
                {listing.parking}<br/>
                Internet {listing.internet}
                                </Grid>
                                <Grid item xs>
                                    <img alt="Bed" src="https://img.icons8.com/ios/50/000000/bed.png" width='20' hspace='10'/>
                {room.roomType}<br/>
                                    <img alt="Bathroom" src="https://img.icons8.com/ios/50/000000/shower-and-tub.png" width='20' hspace='10'/>
                {room.bathroom}<br/>
                                    <img alt="Furnished" src="https://img.icons8.com/dotty/80/000000/armchair.png" width='20' hspace='10'/>
                {room.furnished}<br/>
                                </Grid>
                            </Grid>
                {
                    room.amenities ? <h6 style={{marginTop:40, marginBottom:20}}>Amenities</h6> : null
                }
                {
                    room.amenities ?
                    room.amenities.map((amenity) => (
                        <p>{amenity}</p>
                    ))
                    : null
                }
                            <br/><br/>
                            <Divider/>
                </div>
            ))
        }
                            <h5>Things to keep in mind</h5>
                            This lister has preferences regarding their housemates.
                            <h6 style={{marginTop:40, marginBottom:20}}>House rules</h6>
        {
            listing.restrictions.map((restriction) => (
                <p>{restriction}</p>
            ))
        }
                            <h6 style={{marginTop:40, marginBottom:20}}>Property preference</h6>
        {
            listing.preferences.map((preference) => (
                <p>{preference}</p>
            ))
        }
                            <br/><br/>
                            <Divider/>
                            <h5>About {listing.user.first_name}</h5>
                            Joined in 2019<br/>
                            <Grid container>
                                <Grid item xs>
                                    <img alt="Stars" src="https://img.icons8.com/ios-glyphs/30/000000/star.png" width='10' hspace='10'/>
                                    Reviews
                                </Grid>
                                <Grid item xs>
                                    <img alt="People" src="https://img.icons8.com/material/24/000000/checked-user-male--v1.png" width='15' hspace='10'/>
                                    Verfied
                                </Grid>
                            </Grid>
                            <br/><br/>
                            <Divider/>
                            {listing.user.description}
                            <br/><br/>
                            <Divider/>

                            <h5>The neighbourhood</h5>
                            <div style={{position: "relative", height: "250px"}}><MapContainer listingLocation={listing.location} listingPage={true}/></div>
                            <br/><br/>
                            <Divider/>
        {currUser ?
                    <div>
                        <CssTextField 
                            id="review"
                            placeholder="Write a review."
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                            value={values.review}
                            fullWidth
                            style={{width:'60%'}}
                            onChange={handleChange('review')}
                        />
            <Star rating={rating} onChange={(event, newRating) => {
                setRating(newRating);
            }}
            />
                        <Buttons.ButtonFill click={sendReview} color={props.color.primary} message={"Submit"}/>
                            <h5>{reviews.length} Reviews </h5>
                            <Star rating={listing.rating} readOnly="true"/>
                    </div>
            : null
        }


        {
            reviews.map((review, index) => (
                <div>
                <h6>{review.user.first_name} - {review.title}</h6>
                <Star rating={review.rating} readOnly="true"/>
                <p>{moment(review.created_at).format('MMM YYYY')}</p>
                <p>{review.content}</p>
                <Divider/>
                <br/>
                </div>
            ))
        }
                        </Container>
                    </Grid>
                    <Grid item xs = {4}>
                        <Box 
                            border={1} 
                            borderColor="silver" 
                            p={2}
                        >
                        <h4>
                          <Avatar alt={listing.user.first_name}
                              src={listing.user.avatar}
                              />
                            Contact <a href={'../user/' + listing.user.id}>{listing.user.first_name}</a>
                        </h4>
                            <CssTextField 
                                id="description"
                                placeholder="Type your message..."
                                multiline
                                rows="4"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                            <Buttons.ButtonFill color={props.color.primary} message={"Send message"}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
 
export default Listing;
