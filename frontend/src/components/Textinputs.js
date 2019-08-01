import {Button} from "semantic-ui-react";
import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {theme} from "./Theme";
import * as Buttons from './Button';
import { withStyles } from '@material-ui/core/styles';

export const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: theme.colors.primary,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.colors.primary,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.colors.grey,
            },
            '&:hover fieldset': {
                borderColor: theme.colors.dark,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.colors.primary,
            },
        },
    },
})(TextField);

export function InputText(props){
    return(
        <CssTextField
            className={props.classNames}
            margin={"theme.spacing(1)"}
            margin="dense"
            placeholder={props.placeholder}
            variant="outlined"
            id={props.id}
            style={{width:300, height:42}}
            onChange={props.onChange}
            InputProps={{
                startAdornment: <InputAdornment position="start">{props.startAdornment}</InputAdornment>,
                endAdornment: <InputAdornment position="start">{props.endAdornment}</InputAdornment>,
            }}
        />
    );
}
export function Named(props) { return(
    <Button>JK</Button>
);
}
export function Require(props) { return(
    <CssTextField
        required
        margin={"theme.spacing(1)"}
        label={props.name}
        placeholder={props.placeholder}
        variant="outlined"
        id={props.id}
        onChange={props.onChange}
    />
);
}
export function Error(props) { return(
    <CssTextField
        error
        margin={"theme.spacing(1)"}
        label={props.name}
        variant="outlined"
        id={props.id}
        onChange={props.onChange}
    />
);
}
export function Disabled(props) { return(
    <CssTextField
        disabled
        multiline
        margin={"theme.spacing(1)"}
        defaultValue={props.placeholder}
        variant="outlined"
        id={props.id}
    />
);
}
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
}
export function Email (props) { return(
    <CssTextField
        margin={"dense"}
        label={props.label}
        type="email"
        autoFocus
        autoComplete="email"
        variant="outlined"
        id={props.id}
        onChange={props.onChange}
        className={props.style}
    />
);
}
export function Multiline (props) {
    const [values, setValues] = React.useState({
        multiline: props.value,
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };
    return(
    <CssTextField
        multiline
        disabled={props.disabledText}
        className={props.classNames}
        style={props.styling}
        rowsMax={props.lineShow}
        value={values.multiline}
        onChange={handleChange('multiline')}
        margin={"normal"}
        variant="outlined"
        id={props.id}
    />
);
}
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
    <CssTextField
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
    </CssTextField>
);
}
export function FormModal(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>

            <Buttons.ButtonOutline color={props.color} click={handleClickOpen} message={props.buttonLabel}/>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.submitLabel}</DialogTitle>
                {props.message}
                <DialogActions>
                    <Buttons.ButtonFill color={props.color} click={handleClose} message={"Cancel"}/>
                    <Buttons.ButtonFill color={props.color} onClick={()=>props.handleSave()} message={props.submitLabel}/>
                </DialogActions>
            </Dialog>
        </div>
    );
}