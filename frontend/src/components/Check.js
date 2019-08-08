import React, {Component} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox' ;
import { makeStyles } from '@material-ui/core/styles';


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

class Check extends Component {
    /*checkbox*/
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    };

    toggleCheckbox = (label) => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
        this.props.checkMarked(this.selectedCheckboxes, this.props.features);
    };

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


