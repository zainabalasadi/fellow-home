import React, { Component } from 'react';
import Profile, {EditProfile, EditProfileCard, ProfileCard} from "./Profile";
import {Grid} from "@material-ui/core";
import {Button as ButtonStyle} from "semantic-ui-react";
import * as buts from './Button';
import {theme} from './Theme';

class AccountManager extends Component {
    constructor(props) {
        super(props);

        this.user = this.props.user;

        this.state = {
            isEditMode: false,
        }

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.user.name = event.target.value;
    }

    handleStateChange(event,newState){
        this.user.abstract = document.getElementById("abstract").value;
        this.setState({isEditMode: newState});
    }
    renderSaveButton(newState) {
        return(
        <ButtonStyle.Group>
            <buts.buttonFill colour={theme.colors.primary}
                    click={() => this.handleStateChange(newState)} message={"Save"}/>
            <ButtonStyle.Or />
            <buts.buttonOutline colour={theme.colors.dark}
                    click={() => this.setState({isEditMode: newState})} message={"Cancel"}/>
        </ButtonStyle.Group>
        )
    }
    renderEditButton(newState){
        return(
        <buts.buttonLink className="body2" colour={theme.colors.primary}
                click={() => this.setState({isEditMode: newState})} message={"Edit Profile"}/>
        )
    }

    renderButton(){
        let newState = true;
        if (this.state.isEditMode) {
            newState = false;
        }
        return (
            <Grid item>
                {this.state.isEditMode ? this.renderSaveButton(newState) : this.renderEditButton(newState)}
            </Grid>
        )
    }

    renderProfile(editButton) {
     return(<Profile user={this.user} editProfButton={editButton}/>)
    }

    renderEditProfile(saveButton) {
        return(<EditProfile user={this.user} saveProfButton={saveButton}/>)
    }




    render() {
        const isEditMode = this.state.isEditMode;

        const containerStyle = {
            width: "100%",
            display: "flex",
            flexFlow: "row wrap",
            justify: "center",
            alignItems: "flex-start",
        }

        const cardStyle = {
            width: "28%",
        }
        const contentStyle = {
            width: "68%",
        }
        return (
            <div width="90%" className="content">
                <Grid container  style={containerStyle}>
                    <Grid item style={cardStyle}>
                        {isEditMode ? <EditProfileCard/> : <ProfileCard/>}
                    </Grid>
                    <Grid item style={contentStyle}>
                        <div className="section">
                            {isEditMode ? this.renderEditProfile(this.renderButton()) : this.renderProfile(this.renderButton())}
                        </div>
                    </Grid>
                </Grid>


                {this.renderButton()}
            </div>
        )
    }
}

export default AccountManager;