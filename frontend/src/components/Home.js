/**
 * Home page component
 * Written by: Zainab Alasadi, Anna Ung, William Chen
 */
import React from 'react'
import axios from 'axios'
import {CssBaseline, Box, Container, Button, InputAdornment} from '@material-ui/core/'
import '../app/App.css'
import {CssTextField} from "./Textinputs"
import GridListing from "./GridListing"
import { makeStyles } from '@material-ui/core/styles'

/**
 * Styles for home page container
 */
const useStyles = makeStyles(theme => ({
    container: {
        height:'400px', 
        width:'400px',
        backgroundColor: 'white',
        textAlign:'left', 
        position:'relative', 
        top:'-550px', 
        left:'-350px',
        paddingTop: '24px',
        borderRadius: '7px'
    }
}));

/**
 * Render home page component
 */
export default function Home(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        searchString: '',
        roomType: '',
        maxRent: 0
    });

    const [listings, setListings] = React.useState([]);

    React.useEffect(() => {
        getListings();
    }, []);

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    /**
     * Retrives listings from database
     */
    const getListings = () => {
        axios.get('http://localhost:5000/api/listings')
            .then((res) => {
                console.log(res);
                setListings(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
            <React.Fragment>     
                    <CssBaseline />
                    <img alt="Fellow home" src="https://bungalow.com/static/roommates-on-sofa.jpg" fullWidth style={{position:'relative', width:'110%'}}/>
                        <Container className={classes.container}>
                            <Box fontSize={20} padding={1}>
                                <h5>Find housemates to live with while you study</h5>
                            </Box>
                            <div style ={{padding:10}}>
                                <CssTextField
                                    id="where"
                                    label="WHERE"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    placeholder="Search by university, city or suburb"
                                    value={values.searchString}
                                    onChange={handleChange('searchString')}
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start"></InputAdornment>,
                                    }}
                                />
                            </div>
                            <div style ={{padding:10}}>
                                <FormControl
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                >
                                    <Select
                                        native
                                        label="ROOM TYPE"
                                        margin="dense"
                                        fullWidth
                                        value={value.roomType}
                                        onChange={handleChange('roomType')}
                                        input={
                                            <OutlinedInput name="roomType" id="roomType" />
                                        }
                                    >
                                        <option value="" disabled>Select One</option>
                                        <option value={0}>Shared</option>
                                        <option value={1}>Private</option>
                                    </Select>
                                </FormControl>                                
                            </div>
                            <div style ={{padding:10}}>
                                <CssTextField
                                    id="amount"
                                    label="MAXIMUM RENT"
                                    variant="outlined"
                                    margin="dense"
                                    value={values.maxRent}
                                    onChange={handleChange('maxRent')}
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />
                            </div><p/>
                            <Button variant="contained" 
                                    color="primary"
                                    disableRipple={true}
                                    href={'../Search?q=' + values.searchString + 
                                            '&roomType=' + values.roomType + 
                                            '&rent=' + values.maxRent}>
                                Search
                            </Button>
                        </Container>
                    <Container maxWidth="lg" style={{position:'relative', top:'-300px'}}>
                        <h4>Newest Listings</h4>
                        <GridListing listings={listings}/>
                </Container>
            </React.Fragment>
    );
}
