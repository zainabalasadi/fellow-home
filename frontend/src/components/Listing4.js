import React from "react"
import Container from '@material-ui/core/Container'
import {Grid} from "@material-ui/core"
import Box from '@material-ui/core/Box'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import * as Buttons from './Button'
import {BrowserRouter} from 'react-router-dom'
import Check from "./Check"
import config from "../utils/config"

function Listing4 (props) {

function RoomList(roomnum){
    const [values, setValue] = React.useState({
        bedType: localStorage.getItem("bedType"+roomnum)||'',
    });

    const handleChange = name => event => {
        setValue({
            ...values,
            [name]: event.target.value,
        });
        localStorage.setItem(name+roomnum,event.target.value);
    };

    function getChecked(checked,labels) {
        let feature=[]
        labels.forEach(function (label) {
            if (this.selectedCheckboxes.has(label)) {
                feature.push(label)
            }
        })
        localStorage.setItem('feature'+roomnum,feature.toString());
    }
        return(
            <div>
                <p className={"body1"}>{localStorage.getItem('name'+roomnum)}</p>
                <Box className={"overline"} fontWeight="fontWeightBold" mt={3}>
                    BED TYPE
                </Box>
                <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                >

                    <Select
                        native
                        value={values.bedType}
                        style={{width:"60%"}}
                        onChange={handleChange('bedType')}
                        input={
                            <OutlinedInput name="bedType" id="bedType" />
                        }
                    >
                        <option value="" disabled>Select One</option>
                        <option value={0}>Single</option>
                        <option value={1}>Double</option>
                        <option value={2}>Queen</option>
                        <option value={3}>King</option>
                        <option value={4}>Bunk</option>
                        <option value={5}>None</option>
                    </Select>
                </FormControl>
                <Box className={"subtitle"} fontWeight="fontWeightBold" mt={2}>
                    Amenities
                </Box>
                <p style={{width:"60%"}} className={"overline"}>These are just the amenities housemates usually expect, but you can add even more after you publish</p>
                <div style={{width:"60%"}}>
                    <Check features={config.checkAmenities} checkMarked={getChecked}/>
                </div>
            </div>
        )
}
    const [rooms, setRooms] = React.useState({
        roomNum: localStorage.getItem("roomNum"),
        currRoom:1,
    });
    function backRoom(){
        setRooms({
            ...rooms,
            currRoom: rooms.currRoom-1,
        });
    }
    function forwardRoom(){
        setRooms({
            ...rooms,
            currRoom: rooms.currRoom+1,
        });
    }
    function manyRooms(){
        return(
            <div>
                {RoomList(rooms.currRoom)}
                <hr style={{height: "4px", width:"60%"}} color={props.color.secondary}/>
            </div>
        )
    }
    return (
        <Container style={{height:'100vh',backgroundColor: 'white', textAlign:'center'}} maxWidth="xl">
            <Container style={{padding: 20}} maxWidth="md">
                <Box 
                    color="tomato" 
                    borderBottom={4} 
                    borderColor="gainsboro" 
                    p={0}
                    style={{height: '2rem'}}
                >
                    <Grid container spacing={0}>
                        <Grid item xs = {2}>
                            Type of accomodation
                        </Grid>
                        <Grid item xs>
                            Basics
                        </Grid>
                        <Grid item xs>
                            Housemates
                        </Grid>
                        <Grid item xs>
                            Rooms
                        </Grid>
                        <Grid item xs>
                            <Box 
                                color="black" 
                                bgcolor="white" 
                                borderBottom={4} 
                                borderColor="tomato" 
                                p={0}
                                style={{height: '2rem'}}
                            >
                                Features
                            </Box>
                        </Grid>
                        <Grid item xs>
                            Rent
                        </Grid>
                        <Grid item xs>
                            Availabilities
                        </Grid>
                        <Grid item xs>
                            Photos
                        </Grid>
                        <Grid item xs = {2}>
                            Preferences and About
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container style={{position:'relative',textAlign:'left', padding:10}} maxWidth="md">
                {rooms.currRoom>1
                    ?<Buttons.ButtonLink color={props.color.primary} click={backRoom} message={"previous room"}/>
                    :null
                }
                <Box fontSize={24}>
                    <h4>What ammenities do the rooms offer?</h4>
                </Box>
                {manyRooms()}
                <p/>

                <BrowserRouter>
                    {rooms.currRoom>rooms.roomNum
                        ?<Buttons.ButtonFill color={props.color.primary} href={'../Listing5'} message={"Continue"}/>
                        :<div>
                        <Buttons.ButtonLink color={props.color.primary} click={forwardRoom} message={"next room"}/>
                        <Buttons.ButtonFill disabled color={props.color.primary} href={'../Listing5'} message={"Continue"}/>
                        </div>

                    }
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing4;
