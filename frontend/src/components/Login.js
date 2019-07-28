import React from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';
import * as TextInput from "./Textinputs";
import TextField from '@material-ui/core/TextField';
import Register from "../components/Register";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


function Login() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }
    
    function handleRegister() {
        Register().handleClickOpen()
        setOpen(false);
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
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Login
            </Button>
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
                            <TextField
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
                            <TextField
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
                                <a onClick={handleRegister} color="primary">Sign Up!</a> 
                            </DialogContentText>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Login;