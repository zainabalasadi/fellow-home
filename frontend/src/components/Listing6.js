import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import {CssTextField} from "./Textinputs";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as Buttons from './Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Listing7 from "./Listing7";
import Radio from "@material-ui/core/Radio";

function Listing6 (props) {

    const [rooms, setRooms] = React.useState({
        roomNum: localStorage.getItem("roomNum"),
        currRoom:1,
    });
    const [manyOrOne, setManyOrOne] = React.useState("")
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
                {RoomList(rooms.currRoom,false)}
                <hr style={{height: "4px", width:"60%"}} color={props.color.secondary}/>
            </div>
        )
    }
    function handleBills(event){
        setManyOrOne(event.target.value)

    }
    function RoomList(roomnum,oneOrMany){
    const [values, setValue] = React.useState({
        minStay: localStorage.getItem("minStay"+roomnum)||'',
        date: localStorage.getItem("date"+roomnum)||'',
    });


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
return(
    <div>
        <p className={"body1"}>{localStorage.getItem('name'+roomnum)}</p>
        <Box className={"overline"} fontWeight="fontWeightBold" mt={3} mb={1}>
            DATE AVAILABLE FROM
        </Box>
        <CssTextField
            id="date"
            type="date"
            placeholder="YYYY-MM-DD"
            style={{width:'95px'}}
            onChange={handleChange('date')}
            InputLabelProps={{
                shrink: true,
            }}
        />
        <Box className={"overline"} fontWeight="fontWeightBold" mt={3} mb={0}>
            MINIMUM LENGTH OF STAY
        </Box>
        <FormControl
            variant="outlined"
            margin="normal"
            fullWidth
        >
            <Select
                native
                value={values.minStay}

                onChange={handleChange('minStay')}
                input={
                    <OutlinedInput name="minStay" id="minStay" />
                }
            >
                <option value="" disabled>Select One</option>
                <option value={0}>1 Month</option>
                <option value={1}>2 Months</option>
                <option value={2}>3 Months</option>
                <option value={3}>4 Months</option>
                <option value={4}>5 Months</option>
                <option value={5}>6 Months</option>
                <option value={6}>1 Year</option>
            </Select>
        </FormControl>
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
                            Features
                        </Grid>
                        <Grid item xs>
                            Rent
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
                                Availabilities
                            </Box>
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
                    <h4>When is your property available?</h4>
                </Box>
                Are the rooms available from different dates?
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
                            ? <Buttons.ButtonFill color={props.color.primary} href={'../Listing7'}
                                                  message={"Continue"}/>
                            : <div>
                                <Buttons.ButtonLink color={props.color.primary} click={forwardRoom}
                                                    message={"next room"}/>
                                <Buttons.ButtonFill disabled color={props.color.primary} href={'../Listing7'}
                                                    message={"Continue"}/>
                            </div>

                        :null}
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing6;
