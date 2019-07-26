import React from 'react';
import {Button,CardContent,Divider,Grid,Avatar,Card,CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import RateReview from '@material-ui/icons/RateReview'
import * as TextInput from "../components/textinputs";
import config from '../utils/config'
import {Button as ButtonStyle} from 'semantic-ui-react';
import ListingCard from "./ListingThumbnail";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


let abs="Hey! I’m Laura. I’m a Biomedical Science student at UNSW. My hobbies include hiking, bouldering," +
    " breadmaking and watching National Geographic. I have a fascination with turtles and love dogs and cats.";
export function EditProfileCard(props){
    return(
        <Card>
            <p/>
            <Grid container justify="space-around" alignItems="center">
            <Avatar alt="Remy Sharp"
                    src={require("../assets/images/octar.jpg")}
                    margin={10}
                    style={{height: "112px", width: "112px"}}
            />
            </Grid>
            <CardContent>
                <p className="textFellowRed">Update Photo</p>
                <Divider />
                <Typography variant="body2" color={"textPrimary"} component="p">
                    <VerifiedUser/> Verified 🖐Hello World!
                </Typography>
                <Typography variant="body2" color={"textPrimary"} component="p">
                    <RateReview/> {props.numberRev} reviews
                </Typography>
                <Divider />
                <p/>
                <ButtonStyle circular color='facebook' icon='facebook' />
                <ButtonStyle circular color='twitter' icon='twitter' />
                <ButtonStyle circular color='linkedin' icon='linkedin' />
                <ButtonStyle circular color='google plus' icon='google plus' />
            </CardContent>
        </Card>
    )
}
export function ProfileCard(props){
    return(
        <Card style={{width: "90%"}}>
            <p/>
            <Grid container justify="space-around" alignItems="center">
                <Avatar alt="Remy Sharp"
                        src={require("../assets/images/octar.jpg")}
                        margin={10}
                        style={{height: "112px", width: "112px"}}
                />
            </Grid>
        <CardContent>
        <Divider />
        <Typography variant="body2" color={"textPrimary"} component="p">
        <VerifiedUser/> Verified 🖐Hello World!
    </Typography>
    <Typography variant="body2" color={"textPrimary"} component="p">
        <RateReview/> {props.numberRev} reviews
    </Typography>
    <Divider />
            <p/>
    <ButtonStyle circular color='facebook' icon='facebook' />
        <ButtonStyle circular color='twitter' icon='twitter' />
        <ButtonStyle circular color='linkedin' icon='linkedin' />
        <ButtonStyle circular color='google plus' icon='google plus' />
        </CardContent>
</Card>

    )
}

export function EditProfile(props){
    return (
        <Grid width="100%" direction="row" container justify="space-around" alignItems="center">
            <Grid item xs>
                <div>
                    <h3 className="textFellowDark">Hi, I'm {props.user.name}</h3>
                    <p className="outline textFellowLight">Joined in 2019</p>
                    <p className="body1 textFellowDark"><b>About</b></p>
                    <TextInput.Multiline classNames="body2 lineFellowRed textFellowRed"
                                         styling={{width: "90%"}}
                                         disabledText={false}
                                         value={props.user.abstract}
                                         id="abstract"

                    />
                    <p className="body1 textFellowDark"><b>University</b></p>
                    <TextInput.InputText id="uni" value={props.user.uni} />

                    <p></p>

                    {props.saveProfButton}


                    <Divider />
                    <h5 className="textFellowDark">{props.user.name}'s listings</h5>
                    <div style={{width: "90%"}} className="action-cards">
                        {config.listings.map(ListingCard)}
                    </div>
                    <h5>{props.numberRev} Reviews</h5>
                    <List style={{width: "90%"}} className="action-lists">
                        {config.reviews.map(({ id, primary, secondary, person }) => (
                            <React.Fragment key={id}>
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar alt="Profile Picture" src={person} />
                                    </ListItemAvatar>
                                    <ListItemText primary={primary} secondary={secondary} />
                                </ListItem>
                            </React.Fragment>
                        ))}
                    </List>
                </div>
            </Grid>
        </Grid>
    )
}

function Profile(props) {
    return (
        <Grid width="100%" direction="row" container justify="space-around" alignItems="center">

            <Grid item xs>
           <div>
               <h3 className="textFellowDark">Hi, I'm {props.user.name}</h3>
               <hr style={{width: "90%"}}/>
               <p className="outline textFellowLight">Joined in 2019 {props.editProfButton}</p>
               <TextInput.Multiline className="body2 textFellowRed"
                                    styling={{width: "90%"}}
                                    disabledText={true}
                                   value={props.user.abstract}
               />
               <Divider style={{width: "90%"}}/>
               <h5 className="textFellowDark">{props.user.name}'s listings</h5>
               <div style={{width: "90%"}} className="action-cards">
                   {config.listings.map(ListingCard)}
               </div>
               <h5>{props.numberRev} Reviews</h5>
               <List style={{width: "90%"}} className="action-lists">
                   {config.reviews.map(({ id, primary, secondary, person }) => (
                       <React.Fragment key={id}>
                           <ListItem button>
                               <ListItemAvatar>
                                   <Avatar alt="Profile Picture" src={person} />
                               </ListItemAvatar>
                               <ListItemText primary={primary} secondary={secondary} />
                           </ListItem>
                       </React.Fragment>
                   ))}
               </List>
           </div>
            </Grid>
        </Grid>
    )

}

export default Profile;