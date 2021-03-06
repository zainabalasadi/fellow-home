/**
 * Snack component
 * Written by: Jason Love
 */
import React from 'react'
import * as Buttons from './Button'
import {Button, Snackbar, IconButton} from '@material-ui/core/'
import CloseIcon from '@material-ui/icons/Close'
import {theme} from './Theme'
import {ThemeProvider} from "@material-ui/styles"

/**
 * Returns snack componennt
 */
export default function SnackBar(props) {
    const [open, setOpen] = React.useState(false);

    /**
     * Handler for user click on component
     */
    function handleClick() {
        setOpen(true);
    }

    /**
     * Handle user close component
     * @param {*} event user event
     * @param {*} reason why closing component
     */
    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    return (
        <div>
            {props.fill? <Buttons.ButtonFill message={props.buttonLabel} color={props.color} click={()=>handleClick()}/> :null}
            {props.out? <Buttons.ButtonOutline message={props.buttonLabel} color={props.color} click={()=>handleClick()}/> :null}
            {props.link?<Buttons.ButtonLink message={props.buttonLabel} color={props.color} click={()=>handleClick()}/>:null}
            <ThemeProvider theme={theme}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{props.message}</span>}
                action={[
                    <Button key="undo" color={theme.colors.tertiary} size="small" onClick={handleClose}>
                        UNDO
                    </Button>,
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="primary"
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
            </ThemeProvider>
        </div>
    );
}
