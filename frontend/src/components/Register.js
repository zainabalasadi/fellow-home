import React from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';
import * as TextInput from "../components/TextInputs";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'

function Register() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
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
                Sign Up
            </Button>
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
                                autoFocus
                                margin="dense"
                                id="f_name"
                                label="First Name"
                                type="text"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                            autoFocus
                            margin="dense"
                            id="l_name"
                            label="Last Name"
                            type="text"
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
                            <TextField
                                autoFocus
                                margin="dense"
                                id="uni"
                                label="University"
                                type="text"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                            <DialogContentText>
                                Already have a fellow account?  
                                <a href="/">Log in</a>
                            </DialogContentText>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Submit
                  </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Register;
