import React from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';
import * as TextInput from "../components/textinputs";
import TextField from '@material-ui/core/TextField';

function Register() {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Sign Up
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="register-title" aria-describedby="register-description">
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
                                id="name"
                                label="Email Address"
                                type="email"
                            />
                        </div>
                        <div>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="f_name"
                                label="First Name"
                                type="text"
                            />
                        </div>
                        <div>
                            <TextField
                            autoFocus
                            margin="dense"
                            id="l_name"
                            label="Last Name"
                            type="text"
                            />
                        </div>
                        <div>
                            <TextInput.Password/>
                        </div>
                        <div>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="University"
                                type="text"
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