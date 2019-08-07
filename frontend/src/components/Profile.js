import React from 'react';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import VerifiedUser from '@material-ui/icons/VerifiedUser'
import RateReview from '@material-ui/icons/RateReview'
import * as TextInput from "./Textinputs";
import config from '../utils/config'
import {Button as ButtonStyle} from 'semantic-ui-react';
import ListingCard from "./ListingThumbnail";
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import GridListing from "./GridListing"


export function EditProfileCard(props){
    return(
        <Card style={{width: "70%", position:'relative', left:'240px', top:'80px'}}>
            <p/>
            <Grid container justify="space-around" alignItems="center">
            <Avatar alt={props.user.first_name + " " + props.user.last_name}
                    src={props.user.avatar}
                    margin={10}
                    style={{height: "112px", width: "112px"}}
            />
            </Grid>
            <CardContent>
                <p className="textFellowRed">Update Photo</p>
                <input
                    accept="image/*"
                    id="raised-button-file"
                    multiple
                    type="file"
                />
                <Divider />
                <Typography variant="body2" color={"textPrimary"} component="p">
                    <VerifiedUser/> Verified 🖐Hello World!
                </Typography>
                <Typography variant="body2" color={"textPrimary"} component="p">
                    <RateReview/> {props.numberRev} reviews
                </Typography>
                <Divider />
                <p/>
                <Container style={{textAlign:'center'}}>
                    <ButtonStyle circular color='facebook' icon='facebook' />
                    <ButtonStyle circular color='twitter' icon='twitter' />
                    <ButtonStyle circular color='linkedin' icon='linkedin' />
                    <ButtonStyle circular color='google plus' icon='google plus' />
                </Container>
            </CardContent>
        </Card>
    )
}
export function ProfileCard(props){
    return(
        <Card style={{width: "70%", position:'relative', left:'240px', top:'80px'}}>
            <p/>
            <Grid container justify="space-around" alignItems="center">
                <Avatar alt={props.user.first_name + " " + props.user.last_name}
                        src={props.user.avatar}
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
                <Container style={{textAlign:'center'}}>
                    <ButtonStyle circular color='facebook' icon='facebook' />
                    <ButtonStyle circular color='twitter' icon='twitter' />
                    <ButtonStyle circular color='linkedin' icon='linkedin' />
                    <ButtonStyle circular color='google plus' icon='google plus' />
                </Container>
            </CardContent>
        </Card>
    )
}

export function EditProfile(props){
    return (
        <Grid width="100%" direction="row" container justify="space-around" alignItems="center"style={{position:'relative', top:'70px', width:'700px', left:'150px'}}>
            <Grid item xs>
                <div>
                    <h3 className="textFellowDark">Hi, I'm {props.user.first_name}</h3>
                    <p className="outline textFellowDark">Joined in 2019</p>
                    <p className="body1 textFellowDark"><b>About</b></p>
                    <TextInput.Multiline classNames="body2 lineFellowRed textFellowRed"
                                         styling={{width: "90%"}}
                                         disabledText={false}
                                         value={props.user.description}
                                         id="profileAbstract"

                    />
                    <p className="body1 textFellowDark"><b>University</b></p>
                    <TextInput.InputText id="uni" value={props.user.university} />

                    <p></p>

                    {props.saveProfButton}


                    <Divider style={{width: "90%"}}/>
                    <h5 className="textFellowDark">{props.user.name}'s listings</h5>
                    <div style={{width: "90%"}} className="action-cards">
                        <GridListing/>
                    </div>
                    <Divider style={{width: "90%"}}/>
                </div>
            </Grid>
        </Grid>
    )
}

function Profile(props) {
    return (
        <Grid width="100%" direction="row" container justify="space-around" alignItems="center"style={{position:'relative', top:'70px', width:'700px', left:'150px'}}>
            <Grid item xs>
            <div>
                <h3 className="textFellowDark">Hi, I'm {props.user.first_name}</h3>
                <p className="outline textFellowDark">Joined in 2019 {props.editProfButton}</p>
               <TextInput.Multiline className="body2 textFellowRed"
                                    styling={{width: "90%"}}
                                    disabledText={true}
                                   value={props.user.description}
               />
               <Divider style={{width: "90%"}}/>
               <h5 className="textFellowDark">{props.user.first_name}'s listings</h5>
               <div style={{width: "90%", padding:10}} className="action-cards">
                    <GridListing />

               </div>
               <Divider style={{width: "90%"}}/>
           </div>
            </Grid>
        </Grid>
    )

}

export default Profile;
