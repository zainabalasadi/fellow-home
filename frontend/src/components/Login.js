/**
 * 
 */
import React from 'react'
import axios from 'axios'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core/'
import {IconButton, InputAdornment, Checkbox, FormControlLabel} from '@material-ui/core/'
import {Visibility, VisibilityOff} from '@material-ui/icons/'
import * as Buttons from './Button'
import {CssTextField} from "./Textinputs"
import {theme} from "./Theme"

/**
 * 
 */
function Login(props) {
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = React.useState('');

    /**
     * 
     */
    function handleClickOpen() {
        setOpen(true);
    }

    /**
     * 
     */
    function handleClose() {
        setOpen(false);
    }

    /**
     * 
     */
    function handleRegister() {
        handleClose();
    }

    /**
     * 
     */
    function handleLogin(){
        axios.post('http://localhost:5000/api/auth/login', {
            email: values.email,
            password: values.password
        }).then((res) => {
            console.log(res);
            props.onLogin();
            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('currentUser', JSON.stringify(res.data.user));

            window.location.reload();
            handleClose();
            if (props.addList){
              window.location.replace("../listing1");
            }
        }).catch((err) => {
            setErrors(err.response.data.message);
        });
    }

    /**
     * 
     */
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    /**
     * 
     */
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    /**
     * 
     */
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    /**
     * 
     * @param {*} event 
     */
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <div>
            {props.addList
            ?<Buttons.ButtonLink color={theme.colors.dark} click={handleClickOpen} message={"List your Place"}/>
            :<Buttons.ButtonLink color={theme.colors.dark} click={handleClickOpen} message={"Login"}/>}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="login-title"
                aria-describedby="login-description"
                fullWidth="true"
                maxWidth="sm">
                <DialogTitle id="login-title">{"Login"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="login-description">
                        <DialogContentText>
                            Please enter your details below
                        </DialogContentText>
                        <p style ={{color:'red'}}>{errors ? errors : null}</p>
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
                                id="password"
                                fullWidth
                                variant="outlined"
                                margin="dense"
                                required
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="secondary" />}
                            label="Remember me"
                        />
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
