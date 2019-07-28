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

function Listing3 () {
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
		      	<h4>Tell us about the rooms available</h4>
		      	<p>ROOM NAME</p>
                <TextField
                    id="room1"
                    placeholder="Room 1"
                    type="text"
                    margin="normal"
                    className={classes.formControl}
                    variant="outlined"
                    fullWidth
                />
                <p>ROOM TYPE</p>
                <FormControl 
                    variant="outlined" 
                    margin="normal"
                    fullWidth
                    className={classes.formControl}
                >
                    <InputLabel ref={inputLabel} htmlFor="roomtype">
                        Select one
                    </InputLabel>
                    <Select
                        native
                        value={state.adress}
                        onChange={handleChange('roomtype')}
                        input={
                            <OutlinedInput name="roomtype" labelWidth={labelWidth} id="roomtype" />
                        }
                    >
                    <option value="" />
                    <option value={0}>Small</option>
                    <option value={1}>Medium</option>
                    <option value={2}>Large</option>
                    </Select>
                </FormControl>
                <p>BATHROOM ACCESS</p>
                <FormControl 
                    variant="outlined" 
                    margin="normal"
                    fullWidth
                    className={classes.formControl}
                >
                    <InputLabel ref={inputLabel} htmlFor="bathroomaccess">
                        Select one
                    </InputLabel>
                    <Select
                        native
                        value={state.adress}
                        onChange={handleChange('bathroomaccess')}
                        input={
                            <OutlinedInput name="bathroomaccess" labelWidth={labelWidth} id="bathroomaccess" />
                        }
                    >
                    <option value="" />
                    <option value={0}>Yes</option>
                    <option value={1}>No</option>
                    </Select>
                </FormControl>
                add another room
        	</Container>
    	</React.Fragment>
    );
}
 
export default Listing3;

