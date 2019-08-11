/**
 * First listing page for address and accomodation type
 */
import React from "react"
import {Grid, Box, Container, OutlinedInput, FormControl, Select} from "@material-ui/core"
import {CssTextField} from "./Textinputs"
import * as Buttons from './Button'
import {BrowserRouter} from 'react-router-dom'
import {MapContainer} from "./MapContainer"

/**
 * 
 * @param {*} props 
 */
function Listing1 (props) {
    const [values, setValue] = React.useState({
        accomodation: localStorage.getItem("accomodation")||'',
        address: localStorage.getItem("accomodation")||''
    });

    /**
     * store field change
     */
    const handleChange = name => event => {
        setValue({
          ...values,
          [name]: event.target.value,
        });

        localStorage.setItem(name,event.target.value);
    };

    /*Page Code*/
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
                            <Box 
                                color="black" 
                                bgcolor="white" 
                                borderBottom={4} 
                                borderColor="tomato" 
                                p={0}
                                style={{height: '2rem'}}
                            >
                                Type of accomodation
                            </Box>
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
                            Preferences and About
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container style={{position:'relative',textAlign:'left', padding:10}} maxWidth="md">
                <Box>
                    <h4>What kind of accomodation are you listing?</h4>
                    <Box className={"overline"} fontWeight="fontWeightBold" mt={3}>
                        ACCOMMODATION TYPE
                    </Box>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >
                        <Select
                            native
                            style={{width: "60%"}}
                            value={values.accomodation}
                            onChange={handleChange('accomodation')}
                            input={
                                <OutlinedInput name="accomodation"  id="accomodation" />
                            }
                        >
                            <option value="" disabled>Select one</option>
                        <option value={0}>House</option>
                        <option value={1}>Guesthouse</option>
                        <option value={2}>Apartment</option>
                        <option value={3}>Townhouse</option>
                        </Select>
                    </FormControl>
                </Box>
                    <Box mt={3}>
                        <h6>Where is your place located?</h6>
                        <Box className={"overline"} fontWeight="fontWeightBold" mt={3}>
                        ADDRESS
                    </Box>
                    <CssTextField
                        id="address"
                        placeholder="The Address of your listing"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        helperText="This won't be revealed to users."
                        fullWidth
                        style={{width: "60%"}}
                        onChange={handleChange('address')}
                    />
                        <div style={{display:"none"}}><MapContainer addList={props.addList}/></div>
                </Box>
                <p/>
                <BrowserRouter>
                    {values.address === ''
                        ? <Buttons.ButtonFill disabled color={props.color.primary} href={'../Listing9'} message={"Continue"}/>
                        : <Buttons.ButtonFill color={props.color.primary} href={'../Listing9'} message={"Continue"}/>
                    }
                            </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing1;
