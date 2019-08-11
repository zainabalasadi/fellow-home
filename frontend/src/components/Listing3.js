/**
 * List each room type,
 * number of rooms can only be increased here while making listing
 */
import React from "react"
import {Grid, Box, Container, OutlinedInput, FormControl, Select} from "@material-ui/core"
import {CssTextField} from "./Textinputs"
import * as Buttons from './Button'
import {BrowserRouter} from 'react-router-dom'

/**
 * 
 * @param {*} props 
 */
function Listing3 (props) {
    
    
    /**
    * Crafts new fields for listing Room {roomNum}
    *@param {*} roomNum number of the room curently listing
    */
    function RoomList(roomnum){
        const [value, setValue] = React.useState({
            roomType: localStorage.getItem("roomType"+roomnum)||'',
            bathroomAccess: localStorage.getItem("bathroomAccess"+roomnum)||'',
            name: localStorage.getItem("name"+roomnum)||'',
        });

        /**
         * 
         */
        const handleChange = name => event => {
            setValue({
                ...value,
                [name]: event.target.value,
            });
            localStorage.setItem(name+roomnum.toString(),event.target.value)
        };
        
        /*Render room fields*/
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
    
    
    
    
    /**
    * roomNum: total amount of rooms
    * currRoom: what room is curently being looked at
    */
    const [rooms, setRooms] = React.useState({
        roomNum: 1,
        currRoom:1,
    });

    /**
     * increase the number of rooms user is listing
     */
    function addRoom() {
        setRooms({
            ...rooms,
            roomNum: rooms.roomNum+1,
            currRoom: rooms.currRoom+1,
        });
        localStorage.setItem("roomNum",rooms.roomNum)
    }

    /**
     * traverse back to edit previous rooms listing
     */
    function backRoom(){
        setRooms({
            ...rooms,
            currRoom: rooms.currRoom-1,
        });
    }

    /**
     * traverse forward to edit following room listing
     */
    function forwardRoom(){
        setRooms({
            ...rooms,
            currRoom: rooms.currRoom+1,
        });
    }

    /**
     * loops frontend render code over whatever room when going back and forward
     */
    function manyRooms(){
        return(
            <div>
            {RoomList(rooms.currRoom)}
            <hr style={{height: "4px", width:"60%"}} color={props.color.secondary}/>
            </div>
        )
    }

/*Page code*/
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
