import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import GridListing from "./GridListing";
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Popper from '@material-ui/core/Popper';
import {CssTextField} from "./Textinputs";
import * as Buttons from './Button';
import Checkbox from '@material-ui/core/Checkbox';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Check from "./Check";
import config from "../utils/config";
import InputAdornment from '@material-ui/core/InputAdornment';

function Search () {
    const [anchorEl4, setAnchorEl4] = React.useState(null);

    function handleClick4(event) {
        setAnchorEl4(anchorEl4 ? null : event.currentTarget);
    }

    const open4 = Boolean(anchorEl4);

    const filter = open4 ? 'simple-popper' : undefined;
  const [state, setState] = React.useState({
    small: false,
    medium: false,
    large: false,
    shared: false,
    private: false,
    sharedBath: false,
    privateBath: false,
    ensuite: false,
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
      const handleChangeCheck = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

      const [values, setValues] = React.useState({
        bedroom: 0,
        bathroom: 0,
    });

      const handleChange = name => event => {
        setValues({ 
            ...values, 
            [name]: event.target.value,
        });
    };
    const handleNumChange = name => event => {
        let val=event.target.value;
        if (val>=0) {
            setValues({
                ...values,
                [name]: event.target.value,
            });
        }
    };
    function handlePlus(name){
        let val = document.getElementById(name).value;

        setValues({
            ...values,
            [name]: parseInt(val)+1,
        })

    };
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
        <div>
            <Container maxWidth="lg" style={{position:'relative', top:'0px', padding:10}}>
                <Button aria-describedby={filter} variant="contained" onClick={handleClick4}>
                    Filter
                </Button>
                <Popper id={filter} open={open4} anchorEl={anchorEl4} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Box fontSize={10} p={1} border={1} borderColor="lightgray">
                                    <Box fontWeight="fontWeightBold">
                                        Rooms and Bathrooms
                                    </Box>
                                    No. of Bedrooms:
                                    {parseInt(values.bedroom) === 0
                                        ? <Buttons.ButtonMinus disabled={true}/>
                                        : <Buttons.ButtonMinus click={() => handleMinus('bedroom')}/>
                                    }
                                    <CssTextField
                                        id="bedroom"
                                        value={values.bedroom}
                                        onChange={handleNumChange('bedroom')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        style={{width:'40px', height:'30px'}}
                                        margin="dense"
                                        variant="outlined"
                                    />
                                    <Buttons.ButtonPlus click={()=>handlePlus('bedroom')}/>
                                    <p/>
                                    No. of Bathrooms:
                                    {parseInt(values.bathroom) === 0
                                        ? <Buttons.ButtonMinus disabled={true}/>
                                        : <Buttons.ButtonMinus click={() => handleMinus('bathroom')}/>
                                    }
                                    <CssTextField
                                        id="bathroom"
                                        value={values.bathroom}
                                        onChange={handleNumChange('bathroom')}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        style={{width:'40px', height:'30px'}}
                                        margin="dense"
                                        variant="outlined"
                                    />
                                    <Buttons.ButtonPlus click={()=>handlePlus('bathroom')}/>
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Room Type
                                    </Box>
                                    <Checkbox
                                        checked={state.shared}
                                        onChange={handleChangeCheck('shared')}
                                        value="shared"
                                        inputProps={{
                                            'aria-label': 'primary checkbox',
                                        }}
                                    />
                                    Shared
                                    <Checkbox
                                        checked={state.private}
                                        onChange={handleChangeCheck('private')}
                                        value="private"
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
                                    <CssTextField
                                        id="amount"
                                        variant="outlined"
                                        margin="dense"
                                        value={values.amount}
                                        placeholder="From"
                                        style={{width:'80px',height:'30px'}}
                                        onChange={handleNumChange('amount')}
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
                                        onChange={handleNumChange('amount')}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                        }}
                                    />
                                    <Divider/>
                                    <Box fontWeight="fontWeightBold">
                                        Available From
                                    </Box>
                                    <CssTextField
                                        id="date"
                                        type="date"
                                        placeholder="YYYY-MM-DD"
                                        style={{width:'100px'}}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Divider/>
                                <Button disableRipple>Submit</Button>
                            </Box>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Container>
        <Divider/>
        <Container maxWidth="lg" style={{position:'relative', top:'50px', height:'100vh'}}>
            <GridListing/>
        </Container>
        </div>
    );
}

export default Search