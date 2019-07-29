import React from 'react';
import axios from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import * as Buttons from './Button';
import {CssTextField} from "./Textinputs";
import {theme} from "./Theme";
import config from '../utils/config'

function Login(props) {

    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleRegister() {
        handleClose();
    }

    function handleLogin(){
        axios.post('http://localhost:5000/api/auth/login', {
            email: values.email,
            password: values.password
        }).then((res) => {
            console.log(res);
            props.onLogin();
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('currentUser', JSON.stringify(res.data.user));
        }).catch((err) => {
            console.log(err);
        });

        handleClose();
    }

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <div>
            <Buttons.ButtonLink color={theme.colors.primary} click={handleClickOpen} message={"Login"}/>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="login-title"
                aria-describedby="login-description">
                <DialogTitle id="login-title">{"Login"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="login-description">
                        <DialogContentText>
                            Please enter your details below
                    </DialogContentText>
                        <div>
                            <CssTextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email Address"
                                value={values.email}
                                onChange={handleChange('email')}
                                type="email"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div>
                            <CssTextField
                                id="password"
                                fullWidth
                                variant="outlined"
                                margin="dense"
                                type={values.showPassword ? 'text' : 'password'}
                                label="Password"
                                value={values.password}
                                onChange={handleChange('password')}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                         </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                        <div>
                            <DialogContentText>
                                Don't have an account?
                                <Buttons.ButtonLink click={handleRegister} color={theme.colors.primary} message={"Sign Up!"}/>
                            </DialogContentText>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Buttons.ButtonLink click={handleClose} color={theme.colors.primary} message={"Cancel"}/>
                    <Buttons.ButtonLink click={handleLogin} color={theme.colors.primary} message={"Login"} autoFocus/>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Login;