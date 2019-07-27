import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import '../css/buttons.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Check extends Component {
    /*checkbox*/
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = (label) => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    createCheckbox = (labels) => (
        <FormControlLabel
            label={labels}
            control={
                <Checkbox handleCheckboxChange={this.toggleCheckbox} color="primary"/>
            }
        />
    )

    createCheckboxes = () => (
        this.props.features.map(this.createCheckbox)
    )

    render() {
        return (
            <form>
                {this.createCheckboxes()}
            </form>
        );
    }
}
export default Check
