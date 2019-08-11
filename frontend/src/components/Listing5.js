/**
 * Listing billing info
 */
import React from "react"
import {Grid, Box, Container, OutlinedInput, FormControl, InputAdornment, Radio} from "@material-ui/core"
import {CssTextField} from "./Textinputs"
import Select from '@material-ui/core/Select'
import * as Buttons from './Button'
import {BrowserRouter} from 'react-router-dom'

/**
 * 
 */
function Listing5 (props) {

    /**
    * roomNum: total amount of rooms
    * currRoom: what room is curently being looked at
    */
    const [rooms, setRooms] = React.useState({
        roomNum: localStorage.getItem("roomNum"),
        currRoom:1,
    });

    /*State holder for wether billing info is seperate or same for all rooms*/
    const [manyOrOne, setManyOrOne] = React.useState("")

    /**
     * go back a room to edit
     */
    function backRoom(){
        setRooms({
            ...rooms,
            currRoom: rooms.currRoom-1,
        });
    }

    /**
     * go forward a room to edit
     */
    function forwardRoom(){
        setRooms({
            ...rooms,
            currRoom: rooms.currRoom+1,
        });
    }

     /**
     *  loop through room info when going back and forward
     */
    function manyRooms(){
        return(
            <div>
                {RoomList(rooms.currRoom,false)}
                <hr style={{height: "4px", width:"60%"}} color={props.color.secondary}/>
            </div>
        )
    }

    /**
     * set value of manyToOne wether billing info is seperate {true} or same for all rooms {false}
     */
    function handleBills(event){
        setManyOrOne(event.target.value)

    }

    /**
    * makes listing info different for each room
    * @param {*} oneOrMany true if loop info to all rooms or false if seperate entry for each
    * @param {*} roomNum number of the room curently listing
    */
    function RoomList(roomnum,oneOrMany){
        const [values, setValue] = React.useState({
            amount: localStorage.getItem("amount"+roomnum)||0,
            bond: localStorage.getItem("bond"+roomnum)||'',
            bills: localStorage.getItem("bills"+roomnum)||'',
        });

        /**
         * field change
         * @param {*} name 
         */
        const handleChange = name => event => {
            setValue({
                ...values,
                [name]: event.target.value,
            });
            if(oneOrMany){
                for (var i=1;i<=roomnum;i++){
                    localStorage.setItem(name+i,event.target.value);
                }

            }else{
                localStorage.setItem(name+roomnum,event.target.value);
            }
        };

        /**
         * Numeric  field change
         */
        const handleNumChange = name => event => {
            let val=event.target.value;
            if (val>=0) {
                setValue({
                    ...values,
                    [name]: event.target.value,
                });
                if(oneOrMany){
                    for (var i=1;i<=roomnum;i++){
                        localStorage.setItem(name+i,event.target.value);
                    }

                }else{
                    localStorage.setItem(name+roomnum,event.target.value);
                }
            }
        };

        
        /*Render fields*/
        return(
            <div>
                {oneOrMany===false
                ?<p className={"body1"}>{localStorage.getItem('name'+roomnum)}</p>
                :null}
                <Grid container spacing = {4}>
                    <Grid item xs = {6}>
                        <Box className={"overline"} fontWeight="fontWeightBold" mt={3} mb={2}>
                            WEEKLY RENT
                        </Box>
                        <CssTextField
                            id="amount"
                            variant="outlined"
                            label="Amount"
                            fullWidth
                            value={values.amount}
                            onChange={handleNumChange('amount')}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs = {6}>
                        <Box className={"overline"} fontWeight="fontWeightBold" mt={3} mb={0}>
                            BOND
                        </Box>
                        <FormControl
                            variant="outlined"
                            margin="normal"
                            fullWidth
                        >
                            <Select
                                native
                                value={values.bond}
                                onChange={handleChange('bond')}
                                input={
                                    <OutlinedInput name="bond" id="bond" />
                                }
                            >
                                <option value="" disabled>Select One</option>
                                <option value={0}>None</option>
                                <option value={1}>1 week</option>
                                <option value={2}>2 weeks</option>
                                <option value={3}>3 weeks</option>
                                <option value={4}>4 weeks</option>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Box className={"overline"} fontWeight="fontWeightBold" mt={3} mb={0}>
                    BILLS
                </Box>
                <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                >
                    <Select
                        native
                        value={values.bills}
                        onChange={handleChange('bills')}
                        input={
                            <OutlinedInput name="bills"  id="bills" />
                        }
                    >
                        <option value="" disabled>Select One</option>
                        <option value={0}>Not included in rent</option>
                        <option value={1}>Some included in rent</option>
                        <option value={2}>Available with rent</option>
                        <option value={3}>Included in rent</option>
                    </Select>
                </FormControl>
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
                            Rooms
                        </Grid>
                        <Grid item xs>
                            Features
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
                                Rent
                            </Box>
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
                {rooms.currRoom>1 && manyOrOne==='y'
                    ?<Buttons.ButtonLink color={props.color.primary} click={backRoom} message={"previous room"}/>
                    :null
                }
                <Box fontSize={24}>
                    <h4>Price your property</h4>
                </Box>
                Do the rooms have different billing costs?
                Yes: <Radio
                    checked={manyOrOne==='y'}
                    onClick={handleBills}
                    value={'y'}
                    name={"multiBill"}
                    inputProps={{ 'aria-label': 'Yes' }}/>
                No: <Radio
                    checked={manyOrOne==='n'}
                    onClick={handleBills}
                    value={'n'}
                    name={"multiBill"}
                    inputProps={{ 'aria-label': 'No' }}/>
                <p/>
                {manyOrOne==='y'
                    ?manyRooms()
                    :RoomList(rooms.roomNum,true)
                }
                <p/>
                <BrowserRouter>
                    {manyOrOne==='y'||manyOrOne==='n'
                        ?
                            rooms.currRoom > rooms.roomNum || manyOrOne === 'n'
                                ? <Buttons.ButtonFill color={props.color.primary} href={'../Listing6'}
                                                      message={"Continue"}/>
                                : <div>
                                    <Buttons.ButtonLink color={props.color.primary} click={forwardRoom}
                                                        message={"next room"}/>
                                    <Buttons.ButtonFill disabled color={props.color.primary} href={'../Listing6'}
                                                        message={"Continue"}/>
                                </div>

                    :null}
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing5;
