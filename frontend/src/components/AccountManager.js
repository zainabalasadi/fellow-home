import React, { Component } from 'react';
import Switch from 'react-switch';
import Profile, {EditProfile, EditProfileCard, ProfileCard} from "./Profile";
import {Button, Avatar, Card, CardContent, CardMedia, Divider, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import VerifiedUser from "@material-ui/core/SvgIcon/SvgIcon";
import {Button as ButtonStyle} from "semantic-ui-react";
import * as TextInput from "./textinputs";
import config from "../utils/config";
import ListingCard from "./ListingThumbnail";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import RateReview from '@material-ui/icons/RateReview'

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
            <Button disableRipple variant="contained" color="primary"
                    onClick={() => this.handleStateChange(newState)}>Save</Button>
            <ButtonStyle.Or />
            <Button disableRipple variant="outlined"
                    onClick={() => this.setState({isEditMode: newState})}>Cancel</Button>
        </ButtonStyle.Group>
        )
    }
    renderEditButton(newState){
        return(
        <Button className="body2" color={"primary"}
                onClick={() => this.setState({isEditMode: newState})}>Edit Profile</Button>
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
                <h1>Profile</h1>
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