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
import * as buts from './Button'

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
                  <Grid direction="row" container justify="center" alignItems="center">
                      <img padding-top={20} height={20} src={require("../assets/images/logo.svg")}/>
                      <TextInput.InputText onEnter={(e)=> searchMap(e)} classNames={{width: "100%", height: "10%", fontsize:"8px"}} placeholder="Search by university, city or suburb" startAdornment={<SearchIcon/>}/>
                      <buts.buttonLink colour={props.colour} className="buttonText" href={'../app/listings'} message={"Add Listing"}/>
                      <buts.buttonLink colour={props.colour} href={'../app/'} message={"Saved"}/>
                      <buts.buttonLink colour={props.colour} href={'../app/App'} message={"Messages"}/>
                      <buts.buttonLink colour={props.colour} href={'../'} message={"Help"}/>
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
                      <img padding-top={200} height={20} src={require("../assets/images/fellow.png")}/>
                      <TextInput.InputText colour={props.colour} onEnter={(e)=> searchMap(e)} classNames={{width: "25%", height: "10%", fontsize:"8px"}} placeholder="Search by university, city or suburb" startAdornment={<SearchIcon/>}/>
                      <buts.buttonLink colour={props.colour} className="buttonText" href={'../app/listings'} message={"About Fellow"}/>
                      <buts.buttonLink colour={props.colour} href={'../app/profile'} message={"List your Place"}/>
                      <buts.buttonLink colour={props.colour} href={'../'} message={"Help"}/>
                      <buts.buttonLink colour={props.colour} href={'../app/App'} message={"SignUp"}/>
                      <buts.buttonLink colour={props.colour} href={'../'} message={"Login"} click={()=>props.loggedin=true}/>
                  </Grid>


              </BrowserRouter>
          }
              </overline>
              </header>
   )
}

export default Header