import React from "react"
import Container from '@material-ui/core/Container'
import {Grid} from "@material-ui/core"
import Box from '@material-ui/core/Box'
import {CssTextField} from "./Textinputs"
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import * as Buttons from './Button'
import {BrowserRouter} from 'react-router-dom'
import axios from "axios"

function Listing8 (props) {
    const [setErrors] = React.useState([]);
    var id=''
    function handleSubmit(){
        /*create listing*/
        compileRooms()
        axios.post('http://localhost:5000/api/listings/', {
            property_type: localStorage.getItem("propert_type"),
            internet: localStorage.getItem("internet"),
            parking: localStorage.getItem("parking"),
            images: localStorage.getItem("images"),
            description: localStorage.getItem("description"),
            preferences: localStorage.getItem("preferences"),
            bedrooms: localStorage.getItem("bedroom"),
            bathrooms: localStorage.getItem("bathroom"),
            occupants: localStorage.getItem("housemates"),
            location: localStorage.getItem("location"),
            rooms:localStorage.getItem("rooms"),
            amenities:localStorage.getItem("amenities"),
            vacancies:localStorage.getItem("vacancies"),

        }).then((res) => {
            console.log(res);
            id=res.data.id;

                /*clear local storage*/
                localStorage.removeItem("propert_type");
                    localStorage.removeItem("internet");
                localStorage.removeItem("parking");
                localStorage.removeItem("images");
                localStorage.removeItem("description");
                localStorage.removeItem("preferences");
                localStorage.removeItem("bedroom");
                localStorage.removeItem("bathroom");
                localStorage.removeItem("housemates");
                localStorage.removeItem("location");
                localStorage.removeItem("rooms");
                localStorage.removeItem("amenities");
                localStorage.removeItem("vacancies");

                    removeRoom();


        }).catch((err) => {
            setErrors(err.response.data.errors);
            console.log(err.response.data.errors);
        });
    }
    function removeRoom(){
        for (var roomNum=1; roomNum<=localStorage.getItem("roomNum");roomNum++) {
            localStorage.removeItem("name" + roomNum);
                localStorage.removeItem("roomType" + roomNum);
                localStorage.removeItem("bathroomAccess" + roomNum);
                localStorage.removeItem("bedType" + roomNum);
                localStorage.removeItem("feature" + roomNum);
                localStorage.removeItem("date" + roomNum);
                localStorage.removeItem("minStay" + roomNum);
                localStorage.removeItem("amount" + roomNum);
                localStorage.removeItem("bond" + roomNum);
                localStorage.removeItem("bills" + roomNum);
        }
            localStorage.removeItem("roomNum");

    }
    function addRoom(roomNum){
        return({
            "id": 0,
            name: localStorage.getItem("name"+roomNum),
            title: "Room details",
            status: "available",
            can_deactivate: false,
            can_delete: false,
            messaged: false,
            gender: {
                "title": "Gender",
                "value": "Females & males (no couples)",
                "code": "non-couple"
            },
            roomType: {
                "title": "Room Type",
                "value": localStorage.getItem("roomType"+roomNum),
                "code": "private-room"
            },
            bathroom: {
                "title": "Bathroom",
                "value": localStorage.getItem("bathroomAccess"+roomNum),
                "code": "shared"
            },
            bed_size: localStorage.getItem("bedType"+roomNum),
            features: localStorage.getItem("feature"+roomNum),
            availability: {
                "title": "Available",
                "value": "Now",
                "code": localStorage.getItem("date"+roomNum),
            },
            maxStay: null,
            minStay: localStorage.getItem("minStay"+roomNum),
            lengthOfStay: {
                "title": "Length of Stay",
                "value": "Flexible length of stay"
            },
            charges: {
                "title": "Charges for the room",
                "weeklyRent": {
                    "title": "Weekly rent",
                    "value": "$"+localStorage.getItem("amount"+roomNum),
                    "code": localStorage.getItem("amount"+roomNum),
                },
                "deposit": {
                    "title": "Bond",
                    "value": localStorage.getItem("bond"+roomNum)+" weeks rent",
                    "code": localStorage.getItem("bond"+roomNum),
                },
                "bills": {
                    "title": "Bills",
                    "value": localStorage.getItem("bills"+roomNum),
                    "code": "included"
                }
            }

        })
    }
    function compileRooms(){
        let rom=[]
        for (var i=1; i<=localStorage.getItem("roomNum");i++){
            rom.push(addRoom(i))

        }
        localStorage.setItem("rooms",rom);
    }
    const [values, setValue] = React.useState({
        preferences: localStorage.getItem("preferences")||'',
        description: localStorage.getItem("description")||'',
    });


    const handleChange = name => event => {
        setValue({
            ...values,
            [name]: event.target.value,
        });
        localStorage.setItem(name,event.target.value)
    };
    return (
        <Container style={{height:'100vh',backgroundColor: 'white', textAlign:'center'}} maxWidth="xl">
            <Container style={{padding: 20}} maxWidth="md">
                <Box 
                    color="tomato" 
                    borderBottom={4} 
                    borderColor="gainsboro" 
                    p={0}
                    style={{height: '2rem'}}
                >
                    <Grid container spacing={0}>
                        <Grid item xs = {2}>
                            Type of accomodation
                        </Grid>
                        <Grid item xs>
                            Basics
                        </Grid>
                        <Grid item xs>
                            Housemates
                        </Grid>
                        <Grid item xs>
                            Rooms
                        </Grid>
                        <Grid item xs>
                            Features
                        </Grid>
                        <Grid item xs>
                            Rent
                        </Grid>
                        <Grid item xs>
                            Availabilities
                        </Grid>
                        <Grid item xs>
                            Photos
                        </Grid>
                        <Grid item xs = {2}>
                            <Box 
                                color="black" 
                                bgcolor="white" 
                                borderBottom={4} 
                                borderColor="tomato" 
                                p={0}
                                style={{height: '2rem'}}
                            >
                                Preferences and About
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container style={{position:'relative',textAlign:'left', padding:10}} maxWidth="md">
                <p>{localStorage.getItem("mapSearch")}</p>
                <Box fontSize={24}>
                    <h4>Describe your property</h4>
                </Box>
                <Box className={"overline"} fontWeight="fontWeightBold" mt={3} mb={0}>
                    DESCRIPTION
                </Box>
                      <CssTextField 
                        id="description"
                        placeholder="Describe the housemates location, atmosphere, etc."
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                        style={{width:'60%'}}
                        onChange={handleChange('description')}
                      />
                <Box className={"overline"} fontWeight="fontWeightBold" mt={2} mb={0}>
                    HOUSEMATE PREFERENCES
                </Box>
                <FormControl 
                    variant="outlined" 
                    margin="normal"
                    fullWidth
                >
                    <Select
                        native
                        style={{width:'60%'}}

                        value={values.preferences}
                        onChange={handleChange('preferences')}
                        input={
                            <OutlinedInput name="preferences"  id="preferences" />
                        }
                    >
                        <option value="" disabled>Select One</option>
                    <option value={0}>No Preferences</option>
                    <option value={1}>Female Only</option>
                    <option value={2}>Male Only</option>
                    <option value={3}>Couples</option>
                    <option value={4}>No Couples</option>
                    <option value={5}>Under 30 years of Age</option>
                    <option value={6}>UnderGrad Only</option>
                    <option value={7}>PostGrad Only</option>
                    </Select>
                </FormControl>
                <p/>
                <BrowserRouter>
                    <Buttons.ButtonFill color={props.color.primary} click={handleSubmit} href={'../Listing/'+id} message={"Finish"}/>
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing8;
