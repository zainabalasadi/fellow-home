import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import NavigationMenuItem from './NavigationMenuItem';
import * as TextInput from "./Textinputs";
import SearchIcon from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider';
import { BrowserRouter} from 'react-router-dom';
import {Button} from "@material-ui/core";
import {MapContainer} from "./MapContainer";
import * as Buttons from './Button'
import Login from "./Login";
import Register from "./Register";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";

function searchMap() {
    return (
        <MapContainer />
    )
}
function Header(props) {
    const [menuOpen, setMenuOpen] = React.useState(null);

    function handleMenuClick(event) {
        setMenuOpen(event.currentTarget);
    }

    function handleMenuClose() {
        setMenuOpen(null);
    }

    const currUser = JSON.parse(localStorage.getItem('currentUser'));
   return (

      <header className="overline"><overline>
          {currUser ?
          <BrowserRouter>
                  <Grid direction="row" container justify="space-evenly" alignItems="center">
                      <a href="/"><img padding-top={20} height={20} src={require("../assets/images/logo.svg")}/></a>
                      <Grid item xs = {7}>
                      <TextInput.InputText onEnter={(e)=> searchMap(e)} classNames={{fontsize:"8px"}} placeholder="Search by university, city or suburb" startAdornment={<SearchIcon/>}/>
                      </Grid>
                      {/*<Buttons.ButtonLink color={props.color} className="buttonText" href={'../app/listings'} message={"Add Listing"}/>*/}
                      <Buttons.ButtonLink color={props.color.primary} className="buttonText" href={'../listing1'} message={"Add Listing"}/>
                      <Buttons.ButtonLink color={props.color.primary} href={'../app/'} message={"Saved"}/>
                      <Buttons.ButtonLink color={props.color.primary} href={'../app/App'} message={"Messages"}/>
                      <Buttons.ButtonLink color={props.color.primary} href={'../Help'} message={"Help"}/>
                      <Button disableRipple aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
                          <Avatar alt="Remy Sharp"
                              src={require("../assets/images/octar.jpg")}
                              margin={10} />
                      </Button>
                      <Menu id="simple-menu" anchorEl={menuOpen} keepMounted open={Boolean(menuOpen)} onClose={handleMenuClose}>
                          <Grid direction="column" justify="flex-start" alignItems="stretch">
                              <Grid item><Buttons.ButtonLink color={props.color.dark} href={'../Profile'} message={"Profile"}/></Grid>
                              <Grid item><Buttons.ButtonLink color={props.color.dark} href={'../Profile'} message={"Invite Friends"}/></Grid>
                              <Grid item><Buttons.ButtonLink color={props.color.dark} click={props.onUserLogout} message={"Logout"}/></Grid>
                          </Grid>
                      </Menu>
                  </Grid>


          </BrowserRouter>
          :
              <BrowserRouter>
                  <Grid direction="row" container justify="space-evenly" alignItems="center">
                      <a href="/"><img padding-top={20} height={20} src={require("../assets/images/logo.svg")}/></a>
                      <Grid item xs = {6}>
                      <TextInput.InputText color={props.color.dark} onEnter={(e)=> searchMap(e)} classNames={{fontsize:"8px"}} placeholder="Search by university, city or suburb" startAdornment={<SearchIcon/>}/>
                      </Grid>
                      <Buttons.ButtonLink color={props.color.dark} className="buttonText" href={'../About'} message={"About Fellow"}/>
                      <Buttons.ButtonLink color={props.color.dark} href={'../listing1'} message={"List your Place"}/>
                      <Buttons.ButtonLink color={props.color.dark} href={'../Help'} message={"Help"}/>
                      <Register user={props.user} isLoggedIn={props.loggedin} onLogin={props.onLogin}/>
                      <Login openModal={false} user={props.user} isLoggedIn={props.loggedin} onLogin={props.onLogin}/>
                  </Grid>


              </BrowserRouter>
          }
              </overline>
              <Divider/>
              </header>
   )
}

export default Header;