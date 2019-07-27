import React from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from '@material-ui/core/DialogTitle';
import * as TextInput from "../components/textinputs";
import TextField from '@material-ui/core/TextField';

function Login() {
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
                Login
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="login-title" aria-describedby="login-description">
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
                                id="name"
                                label="Email Address"
                                type="email"
                            />
                        </div>
                        <div>
                            <TextInput.Password/>
                        </div>
                        <DialogContentText>
                            Don't have an account? 
                            <a href="/">Sign Up!</a>
                        </DialogContentText>
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