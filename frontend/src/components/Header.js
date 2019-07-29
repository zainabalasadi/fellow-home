import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import NavigationMenuItem from './NavigationMenuItem';
import '../css/NavigationMenu.css';
import * as TextInput from "./Textinputs";
import SearchIcon from '@material-ui/icons/Search'

import { BrowserRouter} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {MapContainer} from "./MapContainer";
import * as Buttons from './Button'
import Login from "./Login";
import Register from "./Register";
import Container from "@material-ui/core/Container";

function searchMap() {
    return (
        <MapContainer />
    )
}
function Header(props) {
   return (

      <header className="overline"><overline>
          {props.loggedin?
          <BrowserRouter>
                  <Grid direction="row" container justify="space-evenly" alignItems="center">
                      <img padding-top={20} height={20} src={require("../assets/images/logo.svg")}/>
                      <TextInput.InputText onEnter={(e)=> searchMap(e)} classNames={{width: "100%", height: "10%", fontsize:"8px"}} placeholder="Search by university, city or suburb" startAdornment={<SearchIcon/>}/>
                      {/*<Buttons.ButtonLink color={props.color} className="buttonText" href={'../app/listings'} message={"Add Listing"}/>*/}
                      <Buttons.ButtonLink color={props.color} className="buttonText" href={'../listing1'} message={"Add Listing"}/>
                      <Buttons.ButtonLink color={props.color} href={'../app/'} message={"Saved"}/>
                      <Buttons.ButtonLink color={props.color} href={'../app/App'} message={"Messages"}/>
                      <Buttons.ButtonLink color={props.color} href={'../'} message={"Help"}/>
                      <Button disableRipple href={'../profile'} >
                          <Avatar alt="Remy Sharp"
                              src={require("../assets/images/octar.jpg")}
                              margin={10} />
                      </Button>
                  </Grid>


          </BrowserRouter>
          :
              <BrowserRouter>
                  <Grid direction="row" container justify="space-between" alignItems="center">
                      <img padding-top={20} height={20} src={require("../assets/images/fellow.png")}/>
                      <TextInput.InputText color={props.color} onEnter={(e)=> searchMap(e)} classNames={{width: "25%", height: "10%", fontsize:"8px"}} placeholder="Search by university, city or suburb" startAdornment={<SearchIcon/>}/>
                      <Buttons.ButtonLink color={props.color} className="buttonText" href={'../app/listings'} message={"About Fellow"}/>
                    {/*<Buttons.ButtonLink color={props.color} href={'../app/profile'} message={"List your Place"}/>*/}
                      <Buttons.ButtonLink color={props.color} href={'../listing1'} message={"List your Place"}/>
                      <Buttons.ButtonLink color={props.color} href={'../'} message={"Help"}/>
                      <Register user={props.user} isLoggedIn={props.loggedin} onLogin={props.onLogin}/>
                      <Login openModal={false} user={props.user} isLoggedIn={props.loggedin} onLogin={props.onLogin}/>
                  </Grid>


              </BrowserRouter>
          }
              </overline>
              </header>
   )
}

export default Header;