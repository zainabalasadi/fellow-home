import React, { Component } from 'react'
import axios from 'axios'
import * as Buttons from './Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import '../app/App.css';
import SnackBar from "./Snack";
import Check from "./Check";
import config from "../utils/config";
import * as TextInput from "./Textinputs";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Fab from "@material-ui/core/Fab";
import ListingCard from "./ListingThumbnail"
import {theme} from './Theme'
import Button from '@material-ui/core/Button'
import InputAdornment from '@material-ui/core/InputAdornment';
import {CssTextField} from "./Textinputs";
import GridListing from "./GridListing"
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello Welcome to Fellow!",
            open : false
        };
    };


    render() {

        return (
            <React.Fragment>     
                    <CssBaseline />
                    <img src="http://i64.tinypic.com/9jok7p.jpg" fullWidth style={{position:'relative'}}/>
                        <Container style={{height:'380px', width:'330px',backgroundColor: 'white',textAlign:'left', position:'relative', top:'-550px', left:'-200px', padding:24,borderRadius: '7px'}}>
                            <Box fontSize={20} padding={1}>
                                Find housemates to live with while you study
                            </Box>
                            <div style ={{padding:10}}>
                                <CssTextField
                                    id="where"
                                    label="WHERE"
                                    variant="outlined"
                                    margin="dense"
                                    fullWidth
                                    placeholder="Search by university, city or suburb"
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
                                    fullWidth
                                    InputProps={{
                                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />
                            </div><p/>
                            <Button variant="contained" color="secondary" href={'../'}>Search</Button>
                        </Container>
                    <Container maxWidth="lg" style={{position:'relative', top:'-300px'}}>
                        <h4>Newest Listings</h4>
                        <GridListing />
                        <Button disableRipple href={'../Profile'}>Profile</Button>
                        <Button disableRipple href={'../Listing'}>Listing</Button>
                        {/*}
                        <div className="action-buttons">
                            <Buttons.ButtonPlus disabled={true}/>
                            <Buttons.ButtonMinus/>
                            <Buttons.ButtonFill
                                disabled={true}
                                color={theme.colors.tertiary}
                                message={this.state.message}
                            />
                            <Buttons.ButtonOutline
                                disabled={true}
                                color={theme.colors.primary}
                                message={this.state.message}
                            />
                            <Buttons.ButtonLink
                                color={theme.colors.primary}
                                message={this.state.message}
                            />
                        </div>

                        <div>
                            <Fab size="small" color="primary" className="buttonPlusMinus" justify="centre">
                                <i className="settings icon"/>
                            </Fab>
                            <SnackBar fill={true} message="Not Here" buttonLabel="Click Here" color={theme.colors.tertiary}/>
                        </div>
                        
                        <div>
                            <form>
                                <TextInput.Named/>
                                <TextInput.SelectDrop features={config.dropFeatures}/>
                                <TextInput.InputText startAdornment={"$"} endAdornment={"%"}/>
                                <TextInput.Email/>
                                <TextInput.Disabled/>
                            </form>
                            <TextInput.FormModal color={theme.colors.primary} buttonLabel={"Open Modal"} submitLabel={"Check In"} message={
                                <DialogContent>
                                    <DialogContentText>
                                        To subscribe to this website, please enter your email address here. We will send updates
                                        occasionally.
                                    </DialogContentText>
                                    <TextInput.Email/>
                                </DialogContent>
                            }/>

                        </div>
                        */}
                </Container>
            </React.Fragment>
        );
    };
}

export default Home;