import {Button} from "semantic-ui-react";
import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export function InputText(props){
    return(
        <TextField
            margin={"theme.spacing(1)"}
            placeholder={props.placeholder}
            variant="outlined"
            id="input"
            InputProps={{
                startAdornment: <InputAdornment position="start">{props.startAdornment}</InputAdornment>,
                endAdornment: <InputAdornment position="start">{props.endAdornment}</InputAdornment>,
            }}
        />
    );
};

export function Named(props) { return(
    <TextField
        margin={"theme.spacing(1)"}
        label={props.name}
        variant="outlined"
        id="input"
    />
);
};

export function Require(props) { return(
    <TextField
        required
        margin={"theme.spacing(1)"}
        label={props.name}
        placeholder={props.placeholder}
        variant="outlined"
        id="input"
    />
);
};

export function Error(props) { return(
    <TextField
        error
        margin={"theme.spacing(1)"}
        label={props.name}
        variant="outlined"
        id="input"
    />
);
};
export function Disabled(props) { return(
    <TextField
        disabled
        margin={"theme.spacing(1)"}
        placeholder={props.placeholder}
        variant="outlined"
        id="input"
    />
);
};

export function Password (props) {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return(
        <FormControl>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
                id="adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
);
};

export function Email (props) { return(
    <TextField
        margin={"theme.spacing(1)"}
        label="email"
        type="email"
        autoComplete="email"
        variant="outlined"
        id="input"
    />
);
};

export function Multiline (props) {
    const [values, setValues] = React.useState({
        multiline: '',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return(
    <TextField
        multiline
        rowsMax={props.lineShow}
        value={values.multiline}
        onChange={handleChange('multiline')}
        margin={"normal"}
        variant="outlined"
        id="input"
    />
);
};


export function SelectDrop(props) {
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return(
    <TextField
        id="filled-select-currency"
        select
        label="Select"

        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
            MenuProps: {width: 200},
        }}
        helperText="Number Fellows"
        margin="normal"

    >
        {props.features.map(option => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
        ))}
    </TextField>
);
};

export function FormDialog(props) {
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
                {props.buttonLabel}
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.submitLabel}</DialogTitle>
                {props.message}

                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        {props.submitLabel}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
