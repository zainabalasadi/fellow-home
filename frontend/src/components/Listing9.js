/**
 * Listing number of bedrooms, bathrooms, parking availability and internet availability
 */
import React from "react"
import {Container, Grid, Box, OutlinedInput, FormControl, Select, InputBase} from "@material-ui/core"
import * as Buttons from './Button'
import {BrowserRouter} from 'react-router-dom'

/**
 * 
 */
function Listing9 (props) {
    const [values, setValues] = React.useState({
        bedroom: localStorage.getItem("bedroom")||0,
        bathroom: localStorage.getItem("bathroom")||0,
        parking: localStorage.getItem("parking")||'',
        internet: localStorage.getItem("internet")||'',
    });

    /**
     * store field change
     */
    const handleChange = name => event => {
        setValues({ 
            ...values, 
            [name]: event.target.value,
        });
        localStorage.setItem(name,event.target.value);

    };

    /**
     * store numeric change
     */
    const handleNumChange = name => event => {
        let val=event.target.value;
        if (val>=0) {
            setValues({
                ...values,
                [name]: event.target.value,
            });
            localStorage.setItem(name,event.target.value);
        }
    };

    /**
     * Increase numeric value by one
     */
    function handlePlus(name){
        let val = document.getElementById(name).value;
        setValues({
            ...values,
            [name]: parseInt(val)+1,
        });
        localStorage.setItem(name,parseInt(val)+1);

    };

    /**
     * Decrase numeric value by one
     */
    function handleMinus(name){
        let val = document.getElementById(name).value;
        if (parseInt(val)>0){
            setValues({
                ...values,
                [name]: parseInt(val)-1,
            });
            localStorage.setItem(name,parseInt(val)-1);

        }
    }

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
                            Type of accomodation
                        </Grid>
                        <Grid item xs>
                            <Box 
                                color="black" 
                                bgcolor="white" 
                                borderBottom={4} 
                                borderColor="tomato"
                                p={0}
                                style={{height: '2rem'}}
                            >
                                Basics
                            </Box>
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
                <Box fontSize={24}>
                    <h4>Tell us more about the property</h4>
                    <Grid container direction={"row"} alignItems={"center"} justify={"space-between"}>
                        <Grid item xs>
                    <Box className={"body1"} fontWeight="fontWeightBold" mt={3}>
                        Total number of bedrooms
                    </Box>
                        </Grid>
                        <Grid item xs style={{paddingTop: "25px"}}>
                        {parseInt(values.bedroom)===0
                            ? <Buttons.ButtonMinus disabled={true}/>
                            : <Buttons.ButtonMinus click={()=>handleMinus('bedroom')}/>
                        }
                        <InputBase
                            id="bedroom"
                            value={values.bedroom}
                            onChange={handleNumChange('bedroom')}
                            margin="dense"
                            inputProps={{ style:{width:"45px" , textAlign:"center"}}}
                        />
                        <Buttons.ButtonPlus click={()=>handlePlus('bedroom')}/>
                        </Grid>
                    </Grid>

                    <Grid container direction={"row"} alignItems={"center"} justify={"space-between"}>
                        <Grid item xs>
                    <Box className={"body1"} fontWeight="fontWeightBold" mt={2}>
                        Total number of bathrooms
                    </Box>
                        </Grid>
                    <Grid item xs style={{paddingTop: "20px"}}>
                    {parseInt(values.bathroom) === 0
                        ? <Buttons.ButtonMinus disabled={true}/>
                        : <Buttons.ButtonMinus click={() => handleMinus('bathroom')}/>
                    }
                    <InputBase
                        id="bathroom"
                        value={values.bathroom}
                        onChange={handleNumChange('bathroom')}
                        inputProps={{ style:{width:"45px" , textAlign:"center"}}}
                        margin="dense"
                    />
                    <Buttons.ButtonPlus click={()=>handlePlus('bathroom')}/>
                    </Grid>
                    </Grid>
                    <Box className={"overline"} fontWeight="fontWeightBold" mt={3}>
                        PARKING
                    </Box>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >

                        <Select
                            native
                            style={{width:"60%"}}
                            value={values.parking}
                            onChange={handleChange('parking')}
                            input={
                                <OutlinedInput name="parking" id="parking" />
                            }
                        >
                            <option value="" disabled>Select one</option>
                        <option value={0}>Off-street Parking</option>
                        <option value={1}>On-street Parking</option>
                        <option value={2}>No Parking</option>
                        </Select>
                    </FormControl>
                        <Box className={"overline"} fontWeight="fontWeightBold" mt={3}>

                        INTERNET
                    </Box>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >

                        <Select
                            native
                            style={{width:"60%"}}
                            value={values.internet}
                            onChange={handleChange('internet')}
                            input={
                                <OutlinedInput name="internet" id="internet" />
                            }
                        >
                            <option value="" disabled>Select One</option>
                        <option value={0}>No Internet</option>
                        <option value={1}>Available but not included in rent</option>
                        <option value={2}>Available with rent</option>
                        <option value={3}>Unlimited included in rent</option>
                        </Select>
                    </FormControl>
                </Box>
                <p/>
                <BrowserRouter>
                    {values.bedroom > 0
                        ? <Buttons.ButtonFill color={props.color.primary} href={'../Listing2'} message={"Continue"}/>
                        : <Buttons.ButtonFill disabled color={props.color.primary} href={'../Listing2'} message={"Continue"}/>
                    }
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing9;
