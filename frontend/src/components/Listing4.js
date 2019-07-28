import React, { Component } from "react";

import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button'
import * as TextInput from "./Textinputs";
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter} from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import config from "../utils/config";

import Check from "./Check";
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Listing4 () {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
    return (
    	<React.Fragment>
	    	<CssBaseline />
	      	<Container maxWidth="md">
		      	<h4>What ammenities do the room offer?</h4>
                <p>Room with a view</p>
		      	<p>BED TYPE</p>
                <FormControl 
                    variant="outlined" 
                    margin="normal"
                    fullWidth
                    className={classes.formControl}
                >
                    <InputLabel ref={inputLabel} htmlFor="bedtype">
                        Select one
                    </InputLabel>
                    <Select
                        native
                        value={state.adress}
                        onChange={handleChange('bedtype')}
                        input={
                            <OutlinedInput name="bedtype" labelWidth={labelWidth} id="bedtype" />
                        }
                    >
                    <option value="" />
                    <option value={0}>Single</option>
                    <option value={1}>Double</option>
                    <option value={2}>Queen</option>
                    <option value={3}>King</option>
                    <option value={4}>None</option>
                    </Select>
                </FormControl>
                <p>Amenities</p>
                
                <p>These are just the amentiies housemates usually expect, but you can add even more after you publish</p>
                <div>
                    <Check features={config.checkAmenities}/>
                </div>
        	</Container>
    	</React.Fragment>
    );
}
 
export default Listing4;

