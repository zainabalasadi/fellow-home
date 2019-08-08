import React from 'react';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';
import {CssTextField} from "./Textinputs";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import * as Buttons from './Button';
import {theme} from "./Theme";
import Login from "./Login";

function Register(props) {
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = React.useState([]);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleSubmit(){
        /*create user*/
        axios.post('http://localhost:5000/api/auth/register', {
            email: values.email,
            first_name: values.firstName,
            last_name: values.lastName,
            password: values.password,
            university: values.university
        }).then((res) => {
            console.log(res);
            axios.post('http://localhost:5000/api/auth/login', {
                email: values.email,
                password: values.password
            }).then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.access_token);
                localStorage.setItem('currentUser', JSON.stringify(res.data.user));
            }).finally(() => {
                window.location.reload();
                handleClose();
            });
        }).catch((err) => {
            setErrors(err.response.data.errors);
            console.log(err.response.data.errors);
        });
    }
    function handelSwitch() {
        handleClose();
        return(<Login openModal={true}/>)
    }
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        university: '',
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
            <Buttons.ButtonLink color={theme.colors.dark} click={handleClickOpen} message={"Sign Up"}/>
            <Dialog open={open}
                onClose={handleClose}
                aria-labelledby="register-title"
                aria-describedby="register-description"
                fullWidth="true"
                maxWidth="sm">
                <DialogTitle id="register-title">{"Sign Up"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="register-description">
                        <DialogContentText>
                            Please enter your details below
                        </DialogContentText>
                        {errors ? errors.map((error, i) => (<p>{error}</p>)) : null}
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
                                required
                            />
                        </div>
                        <div>
                            <CssTextField
                                autoFocus
                                margin="dense"
                                id="f_name"
                                label="First Name"
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </div>
                        <div>
                            <CssTextField
                            autoFocus
                            margin="dense"
                            id="l_name"
                            label="Last Name"
                            value={values.lastName}
                            onChange={handleChange('lastName')}
                            type="text"
                            variant="outlined"
                            fullWidth
                            required
                            />
                        </div>
                        <div>
                            <CssTextField
                                required
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
                            <CssTextField
                                autoFocus
                                margin="dense"
                                id="uni"
                                label="University"
                                value={values.university}
                                onChange={handleChange('university')}
                                type="text"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </div>
                            <DialogContentText>
                                Already have a fellow account?
                                <Buttons.ButtonLink click={handelSwitch} message={"Log in"} color={theme.colors.primary}/>
                            </DialogContentText>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Buttons.ButtonLink click={handleClose} color={theme.colors.primary} message={"Cancel"}/>
                    <Buttons.ButtonFill click={handleSubmit} color={theme.colors.primary} message={"Submit"} autoFocus/>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Register;
