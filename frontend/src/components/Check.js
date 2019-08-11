/**
 * Check button component
 * Written by: Jason Love
 */
import React, {Component} from 'react'
import {Checkbox, FormControlLabel} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'

/**
 * Styles for check component
 */
const useStyles = makeStyles( (props)=>({
    root: {
        color: props.colors.light,
        '&$checked': {
            color: props.colors.primary,
            '&:hover':{
                backgroundColor: "transparent"
            }
        },
        '&:hover':{
            backgroundColor: "transparent"
        }
    },
    checked: {
        '&:hover':{
            backgroundColor: "transparent"
        }},
}));

/**
 * Checkbox component rendering
 */
function CustomCheckbox(props) {
    const classes = useStyles(props.colors);

    return (
        <Checkbox
            disableRipple
            handleCheckboxChange={props.change}
            classes={{
                root: classes.root,
                checked: classes.checked,
            }}
        />
    );
}

/**
 * Check box component
 */
class Check extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    };

    /* Toggling of checkbox */
    toggleCheckbox = (label) => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        this.props.checkMarked(this.selectedCheckboxes, this.props.features);
    };

    /* Create checkbox given label */
    createCheckbox = (labels) => {
        return (<FormControlLabel
            label={labels}
            control={
                <CustomCheckbox
                    handleCheckboxChange={this.toggleCheckbox}
                />
            }

        />)
    };

    createCheckboxes = () => (
        this.props.features.map(this.createCheckbox)
    );

    render(){
        return(
            <form>
                {this.createCheckboxes()}
            </form>
        );
    };
}
export default Check


