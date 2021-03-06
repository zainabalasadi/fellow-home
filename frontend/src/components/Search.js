/**
 * Search page component
 * Written by: Anna Ung, William Chen
 */

import React from 'react'
import axios from 'axios'
import {Container, Divider, Paper, Box} from '@material-ui/core'
import GridListing from "./GridListing"
import {Button, Fade, Popper, Checkbox, InputAdornment, InputBase} from '@material-ui/core/'
import {CssTextField} from "./Textinputs"
import * as Buttons from './Button'
import Check from "./Check"
import config from "../utils/config"
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'
import Pagination from "material-ui-flat-pagination"

/**
 * Method to return search component
 */
function Search (props) {
    const [anchorEl4, setAnchorEl4] = React.useState(null);
    const [listings, setListings] = React.useState([]);
    const [totalListings, setTotalListings] = React.useState(0);
    const [errors, setErrors] = React.useState('');
    const [page, setPage] = React.useState(1);
    const searchString = queryString.parse(props.location.search).q;
    const roomTypeQuery = queryString.parse(props.location.search).roomType;
    const maxRentQuery = queryString.parse(props.location.search).maxRent;

    React.useEffect(() => {
        getListings();
        window.scrollTo(0, 0);
    }, [searchString, page]);

    const handlePageClick = (e, offset) => {
        setPage((offset / 12 ) + 1);
    };

    /**
     * Retrieve listings from database
     */
    const getListings = () => {
        axios.get('http://localhost:5000/api/listings', {
            params: {
                search: searchString,
                page: page,
                filtersCheckBoxes: state,
                filtersValues: values
            }
        })
        .then((res) => {
            setErrors(null);
            setListings(res.data.data);
            setTotalListings(res.data.total);
        })
        .catch((err) => {
            console.log(err.response);
            setErrors(err.response.data.error);
            setListings([]);
            setTotalListings(0);
        });
    };

    function handleClick4(event) {
        setAnchorEl4(anchorEl4 ? null : event.currentTarget);
    }

    const open4 = Boolean(anchorEl4);

    const filter = open4 ? 'simple-popper' : undefined;
    const [state, setState] = React.useState({
        sharedRoom: roomTypeQuery === 'shared',
        privateRoom: roomTypeQuery === 'private',
        house: false,
        guesthouse: false,
        apartment: false,
        townhouse: false,
        noparking: false,
        onstreet: false,
        offstreet: false,
        events: false,
        smoking: false,
        pets: false,
        children: false,
        female: false,
        male: false,
        lgbt: false,
        couples: false,
        nocouples: false,
        under30: false,
        furnished: false,
        wifi: false,
    });

    /**
     * Handle when user clicks filter button
     */
    const handleFilterSubmit = () => {
        console.log(state);
        console.log(values);
        getListings();
        handleClick4();
    };

    const handleChangeCheck = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const [values, setValues] = React.useState({
        bedroom: 0,
        bathroom: 0,
        minPrice: 0,
        maxPrice: maxRentQuery ? maxRentQuery : 0
    });

    /**
     * Handle user change
     */
    const handleChange = name => event => {
        setValues({ 
            ...values, 
            [name]: event.target.value,
        });
    };

    /**
     * Handle number change
     */
    const handleNumChange = name => event => {
        let val=event.target.value;
        if (val>=0) {
            setValues({
                ...values,
                [name]: event.target.value,
            });
        }
    };

    /**
     * Handle when plus button is pressed for filter
     */
    function handlePlus(name){
        let val = document.getElementById(name).value;

        setValues({
            ...values,
            [name]: parseInt(val)+1,
        })

    };

    /**
     * Handle when minus button is pressed for filter
     */
    function handleMinus(name){
        let val = document.getElementById(name).value;
        if (parseInt(val)>0){
            setValues({
                ...values,
                [name]: parseInt(val)-1,
            })
        }
    }

    return (
        <>
            <Container maxWidth="lg" style={{position:'relative', top:'0px', padding:10}}>
                <Button aria-describedby={filter} variant="contained" onClick={handleClick4}>
                    Filter
                </Button>
                <Popper id={filter} open={open4} anchorEl={anchorEl4} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Box className={"overline"} p={1} border={1} borderColor="lightgray">
                                    <Box fontWeight="fontWeightBold">
                                        Rooms and Bathrooms
                                    </Box>
                                    No. of Bedrooms:
                                    {parseInt(values.bedroom) === 0
                                        ? <Buttons.ButtonMinus disabled={true}/>
                                        : <Buttons.ButtonMinus click={() => handleMinus('bedroom')}/>
                                    }
                                    <InputBase
                                        id="bedroom"
                                        value={values.bedroom}
                                        onChange={handleNumChange('bedroom')}
                                        inputProps={{ style:{width:'40px', height:'30px', textAlign:"center"}}}

                                        margin="dense"
                                    />
                                    <Buttons.ButtonPlus click={()=>handlePlus('bedroom')}/>
                                    <p/>
                                    No. of Bathrooms:
                                    {parseInt(values.bathroom) === 0
                                        ? <Buttons.ButtonMinus disabled={true}/>
                                        : <Buttons.ButtonMinus click={() => handleMinus('bathroom')}/>
                                    }
                                    <InputBase
                                        id="bathroom"
                                        value={values.bathroom}
                                        onChange={handleNumChange('bathroom')}
                                        inputProps={{ style:{width:'40px', height:'30px', textAlign:"center"}}}
                                        margin="dense"
                                    />
                                    <Buttons.ButtonPlus click={()=>handlePlus('bathroom')}/>
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Room Type
                                    </Box>
                                    <Checkbox
                                        checked={state.sharedRoom}
                                        onChange={handleChangeCheck('sharedRoom')}
                                        value="sharedRoom"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Shared
                                    <Checkbox
                                        checked={state.privateRoom}
                                        onChange={handleChangeCheck('privateRoom')}
                                        value="privateRoom"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Private
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Property Type
                                    </Box>
                                    <Checkbox
                                        checked={state.house}
                                        onChange={handleChangeCheck('house')}
                                        value="house"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    House
                                    <Checkbox
                                        checked={state.guesthouse}
                                        onChange={handleChangeCheck('guesthouse')}
                                        value="guesthouse"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Guesthouse
                                    <Checkbox
                                        checked={state.apartment}
                                        onChange={handleChangeCheck('apartment')}
                                        value="apartment"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Apartment
                                    <Checkbox
                                        checked={state.townhouse}
                                        onChange={handleChangeCheck('townhouse')}
                                        value="townhouse"
                                        inputProps={{
                                          'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Townhouse
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Parking Type
                                    </Box>
                                    <Checkbox
                                        checked={state.onstreet}
                                        onChange={handleChangeCheck('onstreet')}
                                        value="onstreet"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    On-street Parking
                                      <Checkbox
                                        checked={state.offstreet}
                                        onChange={handleChangeCheck('offstreet')}
                                        value="offstreet"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Off-street Parking
                                      <Checkbox
                                        checked={state.noparking}
                                        onChange={handleChangeCheck('noparking')}
                                        value="noparking"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    No Parking
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        House Rules
                                    </Box>
                                    <Checkbox
                                        checked={state.event}
                                        onChange={handleChangeCheck('event')}
                                        value="event"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Suitable for Events
                                    <Checkbox
                                        checked={state.pets}
                                        onChange={handleChangeCheck('pets')}
                                        value="pets"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Pets Allowed
                                    <Checkbox
                                        checked={state.smoking}
                                        onChange={handleChangeCheck('smoking')}
                                        value="smoking"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Smoking Allowed
                                    <Checkbox
                                        checked={state.children}
                                        onChange={handleChangeCheck('children')}
                                        value="children"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Children Allowed
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Housemate Preferences
                                    </Box>
                                    <Checkbox
                                        checked={state.male}
                                        onChange={handleChangeCheck('male')}
                                        value="male"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Male Only
                                    <Checkbox
                                        checked={state.female}
                                        onChange={handleChangeCheck('female')}
                                        value="female"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Female Only
                                    <Checkbox
                                        checked={state.lgbt}
                                        onChange={handleChangeCheck('lgbt')}
                                        value="lgbt"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    LGBT
                                    <Checkbox
                                        checked={state.couples}
                                        onChange={handleChangeCheck('couples')}
                                        value="couples"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Couples
                                    <Checkbox
                                        checked={state.nocouples}
                                        onChange={handleChangeCheck('nocouples')}
                                        value="nocouples"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    No Couples
                                    <Checkbox
                                        checked={state.under30}
                                        onChange={handleChangeCheck('under30')}
                                        value="under30"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Under 30 years of Age
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Amenities
                                    </Box>
                                    <Check features={config.checkAmenities}/>
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Price
                                    </Box>
                                    Price Range
                                    <Box mt={-4} ml={8}>
                                        <CssTextField
                                            id="amount"
                                            variant="outlined"
                                            margin="dense"
                                            value={values.amount}
                                            placeholder="From"
                                            style={{width:'80px',height:'30px'}}
                                            onChange={handleNumChange('minPrice')}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                        <CssTextField
                                            id="amount"
                                            variant="outlined"
                                            margin="dense"
                                            placeholder="To"
                                            style={{width:'80px', height:'30px'}}
                                            value={values.amount}
                                            onChange={handleNumChange('maxPrice')}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            }}
                                        />
                                    </Box>
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Available From
                                    </Box>
                                    Availability From
                                    <Box mt={-3} ml={12} mb={1}>
                                        <CssTextField
                                            id="date"
                                            type="date"
                                            placeholder="YYYY-MM-DD"
                                            style={{width:'85px'}}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </Box>
                                    <Divider/>
                                <Button disableRipple onClick={handleClick4}>Cancel</Button>
                                <Button disableRipple onClick={handleFilterSubmit}>Submit</Button>
                            </Box>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Container>
        <Divider/>
        {errors ? errors : null}
        <Container maxWidth="lg" style={{position:'relative', top:'50px', height:'235vh'}}>
            <GridListing listings={listings}/>
        <center>
        <Pagination
            limit={12}
            offset={(page-1)*12}
            total={totalListings}
            onClick={handlePageClick}
        />
        </center>
        </Container>

        </>
    );
}

export default withRouter(Search);