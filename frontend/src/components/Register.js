import React from 'react';
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

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleSubmit(){
        /*create user*/
        props.onLogin();
        handleClose();
    }
    function handelSwitch() {
        handleClose();
        return(<Login openModal={true}/>)
    }
    const [values, setValues] = React.useState({
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
            <Buttons.ButtonLink color={theme.colors.primary} click={handleClickOpen} message={"Sign Up"}/>
            <Dialog open={open}
                onClose={handleClose}
                aria-labelledby="register-title"
                aria-describedby="register-description">
                <DialogTitle id="register-title">{"Sign Up"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="register-description">
                        <DialogContentText>
                            Please enter your details below
                        </DialogContentText>
                        <div>
                            <CssTextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="Email Address"
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
                    <Buttons.ButtonLink click={handleSubmit} color={theme.colors.primary} message={"Submit"} autoFocus/>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Register;