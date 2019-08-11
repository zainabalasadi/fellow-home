/**
 * 
 */
import React from 'react'
import axios from 'axios'
import {CssBaseline, Box, Container, Button, InputAdornment} from '@material-ui/core/'
import '../app/App.css'
import {CssTextField} from "./Textinputs"
import GridListing from "./GridListing"
import { makeStyles } from '@material-ui/core/styles'

/**
 * 
 */
const useStyles = makeStyles(theme => ({
    container: {
        height:'400px', 
        width:'400px',
        backgroundColor: 'white',
        textAlign:'left', 
        position:'relative', 
        top:'-520px', 
        left:'-350px',
        paddingTop: '24px',
        borderRadius: '7px'
    }
}));

/**
 * 
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
                    <img alt="Fellow home" src="https://bungalow.com/static/roommates-on-sofa.jpg" fullWidth style={{position:'relative', width:'100%'}}/>
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
                                <CssTextField
                                    id="roomType"
                                    label="ROOM TYPE"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    placeholder="'private' or 'shared'"
                                    value={values.roomType}
                                    onChange={handleChange('roomType')}
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start"></InputAdornment>,
                                    }}
                                />
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
