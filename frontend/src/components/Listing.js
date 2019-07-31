import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function Listing () {
    const [values, setValues] = React.useState({
        room: '',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
        setValues({ 
            ...values, 
            [name]: event.target.value, 
        });
    };

    return (
        <div>
            <div style={{backgroundColor: 'whitesmoke',height:'40vh'}} maxWidth="xl">
                <h2>Pictures</h2>
            </div>
            <Container style={{textAlign:'center', padding:30}} maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs = {8}>
                        <Container style={{padding: 10, textAlign:'left'}}>
                            <h4>Title</h4>
                            Location<br/><br/>
                            <Grid container>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios/50/000000/bed.png" width='20' hspace='10'/>
                                    bedrooms
                                </Grid>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios/50/000000/shower-and-tub.png" width='20' hspace='10'/>
                                    bathrooms
                                </Grid>
                                <Grid item xs>
                                    <img src="https://img.icons8.com/ios/50/000000/men-age-group-4.png" width='20' hspace='10'/>
                                    vacancies
                                </Grid>
                            </Grid>
                            <br/><br/>
                            <Divider/>
                            <h5>About the property</h5>
                            <p>description of property</p>

                            <br/><br/>
                            <Divider/>
                            <h5>Room 1</h5>
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
                            <br/><br/>
                            <Divider/>
                            <h5>Things to keep in mind</h5>
                            This lister has preferences regarding their housemates.
                            <h6>House rules</h6>
                            icons
                            <h6>Property preferencse</h6>
                            <br/><br/>
                            <Divider/>
                            <h5>About</h5>
                            joined<br/>
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
                            Description of person
                            <br/><br/>
                            <Divider/>
                            <h5>The neighbourhood</h5>
                            dsecription of neighbourhood
                            <h6>Getting around</h6>
                            description of getting around<br/>insert map
                            <h6>nearest universities/train stations</h6>
                            <br/><br/>
                            <Divider/>
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
                            <TextField 
                                id="description"
                                placeholder="Type your message..."
                                multiline
                                rows="4"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
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
                            <Button variant="contained" color="secondary">Send message</Button>
                            <Button variant="contained" color="secondary">Show phone number</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
 
export default Listing;
