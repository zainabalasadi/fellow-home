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
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import * as Buttons from './Button';
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

    function handleLogin(){ /*fix for security check and user search*/
        props.onLogin();
        let user=config.userProfile;  /*replace with actual user db connection*/
        if (values.password == user.password){
            user.loggedin = true;
        }
        handleClose();
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