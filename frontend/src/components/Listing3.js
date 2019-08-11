import React from "react"
import Container from '@material-ui/core/Container'
import {Grid} from "@material-ui/core"
import Box from '@material-ui/core/Box'
import {CssTextField} from "./Textinputs"
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import * as Buttons from './Button'
import {BrowserRouter} from 'react-router-dom'

function Listing3 (props) {
    function RoomList(roomnum){
        const [value, setValue] = React.useState({
            roomType: localStorage.getItem("roomType"+roomnum)||'',
            bathroomAccess: localStorage.getItem("bathroomAccess"+roomnum)||'',
            name: localStorage.getItem("name"+roomnum)||'',
        });

        const handleChange = name => event => {
            setValue({
                ...value,
                [name]: event.target.value,
            });
            localStorage.setItem(name+roomnum.toString(),event.target.value)
        };
        return (
            <div>
                <Box className={"overline"} fontWeight="fontWeightBold" mt={3}>
                    ROOM NAME
                </Box>
                <CssTextField
                    id={"room"+roomnum}
                    placeholder={"Room "+roomnum}
                    type="text"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    style={{width: "60%"}}
                    onChange={handleChange('name')}
                />
                <Box className={"overline"} fontWeight="fontWeightBold" mt={3}>
                    ROOM TYPE
                </Box>
                <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                >
                    <Select
                        native
                        style={{width: "60%"}}

                        value={value.roomType}
                        onChange={handleChange('roomType')}
                        input={
                            <OutlinedInput name="roomType" id="roomType" />
                        }
                    >
                        <option value="" disabled>Select One</option>
                        <option value={0}>Shared</option>
                        <option value={1}>Private</option>
                    </Select>
                </FormControl>
                <Box className={"overline"} fontWeight="fontWeightBold" mt={3}>
                    BATHROOM ACCESS
                </Box>
                <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                >
                    <Select
                        native
                        style={{width: "60%"}}
                        value={value.bathroomAccess}
                        onChange={handleChange('bathroomAccess')}
                        input={
                            <OutlinedInput name="bathroomAccess" id="bathroomAccess" />
                        }
                    >
                        <option value="" disabled>Select One</option>
                        <option value={0}>Yes</option>
                        <option value={1}>No</option>
                    </Select>
                </FormControl>
            </div>
        )
    }
    const [rooms, setRooms] = React.useState({
        roomNum: 1,
        currRoom:1,
    });
function addRoom() {
    setRooms({
        ...rooms,
        roomNum: rooms.roomNum+1,
        currRoom: rooms.currRoom+1,
    });
    localStorage.setItem("roomNum",rooms.roomNum)
}
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
                            <Box 
                                color="black" 
                                bgcolor="white" 
                                borderBottom={4} 
                                borderColor="tomato" 
                                p={0}
                                style={{height: '2rem'}}
                            >
                                Room
                            </Box>
                        </Grid>
                        <Grid item xs>
                            Features
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
                {rooms.currRoom<rooms.roomNum
                    ?<Buttons.ButtonLink color={props.color.primary} click={forwardRoom} message={"next room"}/>
                    :null
                }
                <Box fontSize={24}>
                    <h4>Tell us about the bedrooms available</h4>
                </Box>
                {manyRooms()}
                <p/>

                {rooms.roomNum<localStorage.getItem("bedroom")
                ?<Buttons.ButtonLink color={props.color.primary} click={addRoom} message={"+ add another room"}/>
                :null
                }
                <BrowserRouter>
                    <Buttons.ButtonFill color={props.color.primary} href={'../Listing4'} message={"Continue"}/>

                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing3;
