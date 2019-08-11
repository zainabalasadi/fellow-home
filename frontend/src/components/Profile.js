/**
 * 
 */
import React from 'react'
import {CardContent, Divider, Grid, Avatar, Card, Container, Typography} from "@material-ui/core"
import {VerifiedUser, RateReview} from '@material-ui/icons/'
import * as TextInput from "./Textinputs"
import {Button as ButtonStyle} from 'semantic-ui-react'
import GridListing from "./GridListing"

/**
 * 
 * @param {*} props 
 */
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

/**
 * 
 * @param {*} props 
 */
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

/**
 * 
 * @param {*} props 
 */
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
                        <GridListing listings={props.listings}/>
                    </div>
                    <Divider style={{width: "90%"}}/>
                </div>
            </Grid>
        </Grid>
    )
}

/**
 * 
 */
function Profile(props) {
    return (
        <Grid width="100%" direction="row" container justify="space-around" alignItems="center"style={{position:'relative', top:'70px', width:'700px', left:'150px'}}>
            <Grid item xs>
                <div>
                    <h3 className="textFellowDark">Hi, I'm {props.user.first_name}</h3>
                    <p className="outline textFellowDark">Joined in 2019 {props.editProfButton}</p>
                    <p>{props.user.description}</p>
                    <Divider style={{width: "90%"}}/>
                    <h5 className="textFellowDark">{props.user.first_name}'s listings</h5>
                    <div style={{width: "90%", padding:10}} className="action-cards">
                        <GridListing listings={props.listings}/>

                    </div>
                    <Divider style={{width: "90%"}}/>
                </div>
            </Grid>
        </Grid>
    )
}

export default Profile;
