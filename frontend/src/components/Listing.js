import React, { Component } from "react";
import axios from 'axios';
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import {CssTextField} from "./Textinputs";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as Buttons from './Button';
import Box from '@material-ui/core/Box';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import { withRouter } from 'react-router';

const useStyles = makeStyles(theme => ({
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    height:'400px',
  },
}));

const Listing = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        room: '',
    });

    const lid = props.match.params.id;
    const [listing, setListing] = React.useState('');

    React.useEffect(() => {
        getListing();
    }, []);
    
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
{/*
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
*/}
    const handleChange = name => event => {
        setValues({ 
            ...values, 
            [name]: event.target.value, 
        });
    };

    return (
        <div>
            <div style={{backgroundColor: 'whitesmoke',height:'43vh'}} maxWidth="xl">
                <GridList className={classes.gridList} cols={2.5} cellHeight={390} >
            {/* im not sure why this happens but i think its because it tries to load
                the data before its fetched
            */}
        {
            listing.images ? 
            listing.images.map((image) => (
                        <GridListTile key={image}>
                            <img src={image} alt={listing.title}/>
                      </GridListTile>
            ))
            : console.log("nope")
        }
                </GridList>
            </div>
            <div style={{textAlign:'right'}} maxWidth="xl">
                <Box mt={5}>
                    <FormControlLabel
                        control={<Checkbox icon={<FavoriteBorder/>} 
                        checkedIcon={<Favorite />} 
                        value="checkedH" />}
                    />
                </Box>
            </div>
            <Container style={{textAlign:'center', padding:30}} maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs = {8}>
                        <Container style={{padding: 10, textAlign:'left'}}>
                            <h4>{listing.name}</h4>
                            Location
                            <br/><br/>
                            <Grid container>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios/50/000000/bed.png" width='20' hspace='10'/>
        {listing.num_bedrooms} bedrooms
                                </Grid>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios/50/000000/shower-and-tub.png" width='20' hspace='10'/>
        {listing.num_bathrooms} bathrooms
                                </Grid>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios/50/000000/men-age-group-4.png" width='20' hspace='10'/>
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
            listing.rooms ?
            listing.rooms.map((room, index) => (
                <div>
                <h5>Room {index + 1}</h5>
                            <h6>Details</h6>
                            <Grid container>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios/50/000000/us-dollar.png" width='15' hspace='10'/>
                                    weekly rent<br/>
                                    <img src="https://img.icons8.com/pastel-glyph/64/000000/electricity.png" width='15' hspace='10'/>
                                    bills<br/>
                                    <img src="https://img.icons8.com/material-outlined/24/000000/calendar.png" width='15' hspace='10'/>
                                    minimum stay<br/>
                                    <img src="https://img.icons8.com/small/16/000000/parking.png" width='15' hspace='10'/>
                                    parking
                                </Grid>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios/50/000000/bed.png" width='20' hspace='10'/>
                                    room<br/>
                                    <img src="https://img.icons8.com/ios/50/000000/shower-and-tub.png" width='20' hspace='10'/>
                                    bathroom<br/>
                                    <img src="https://img.icons8.com/dotty/80/000000/armchair.png" width='20' hspace='10'/>
                                    furnished<br/>
                                    <img src="https://img.icons8.com/ios/50/000000/men-age-group-4.png" width='20' hspace='10'/>
                                    anyone welcome
                                </Grid>
                            </Grid>
                            <h6>Amenities</h6>
                {
                    room.amenities.map((amenity) => (
                        <p>{amenity}</p>
                    ))
                }
                            <br/><br/>
                            <Divider/>
                </div>
            ))
            : console.log("nope")
        }
                            <h5>Things to keep in mind</h5>
                            This lister has preferences regarding their housemates.
                            <h6>House rules</h6>
        {
            listing.restrictions ?
            listing.restrictions.map((restriction) => (
                <p>{restriction}</p>
            ))
            : console.log("nope")
        }
                            <h6>Property preferencse</h6>
        {
            listing.preferences ?
            listing.preferences.map((preference) => (
                <p>{preference}</p>
            ))
            : console.log("nope")
        }
                            <br/><br/>
                            <Divider/>
                            <h5>About {listing.user ? listing.user.first_name
                            :console.log("nope")}</h5>
                            Joined in 2019<br/>
                            <Grid container>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios-glyphs/30/000000/star.png" width='10' hspace='10'/>
                                    Reviews
                                </Grid>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/material/24/000000/checked-user-male--v1.png" width='15' hspace='10'/>
                                    Verfied
                                </Grid>
                            </Grid>
                            <br/><br/>
                            <Divider/>
                            {listing.user ? listing.user.description
                            :console.log("nope")}
                            <br/><br/>
                            <Divider/>
                        {/*
                            <h5>The neighbourhood</h5>
                            dsecription of neighbourhood
                            <h6>Getting around</h6>
                            description of getting around<br/>insert map
                            <h6>nearest universities/train stations</h6>
                            <br/><br/>
                            <Divider/>
                        */}
                            <h5>Reviews</h5>
                        </Container>
                    </Grid>
                    <Grid item xs = {4}>
                        <Box 
                            border={1} 
                            borderColor="silver" 
                            p={2}
                        >
                            <h4>Contact</h4>
                            <CssTextField 
                                id="description"
                                placeholder="Type your message..."
                                multiline
                                rows="4"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        {/*
                            <FormControl 
                                variant="outlined" 
                                margin="normal"
                                fullWidth
                            >
                                <InputLabel ref={inputLabel} htmlFor="room">
                                    Which room are you interested in?
                                </InputLabel>
                                <Select
                                    native
                                    value={values.room}
                                    onChange={handleChange('room')}
                                    input={
                                        <OutlinedInput name="room" labelWidth={labelWidth} id="room" />
                                    }
                                >
                                <option value="" />
                                <option value={0}>Room 1</option>
                                <option value={1}>Room 2</option>
                                <option value={2}>Room 3</option>
                                </Select>
                            </FormControl>
                        */}
                            <Buttons.ButtonFill color={props.color.primary} message={"Send message"}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
 
export default Listing;
