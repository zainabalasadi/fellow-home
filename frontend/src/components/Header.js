import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import NavigationMenuItem from './NavigationMenuItem';
import '../css/NavigationMenu.css';
import * as TextInput from "../components/textinputs";
import SearchIcon from '@material-ui/icons/Search'
/*import {Switch} from "@material-ui/core";
*/
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../app/componentTest';
import ListingCard from "./ListingThumbnail";
import {Button} from "@material-ui/core";
import AccountManager from "./AccountManager";
import config from '../utils/config'
import Home from "./Home";
import {MapContainer} from "./MapContainer";

function NavigationMenu(props) {
    return (
        <div className="navigation">
            {
                props.menuItems.map(item => (
                    <NavigationMenuItem
                        value={item.name}
                        img={item.icon}
                        key={item.name}
                        showNotifBubble={item.name === 'message' && props.showNotifBubble}
                    />
                ))
            }
        </div>
    )
}

const menuItems = [
    {name: "home page", icon: "home_heart.png"},
    {name: "listings", icon: "camera.png"},
    {name: "saved", icon: "contract.png"},
    {name: "messages", icon: "coin.png"},
    {name: "profile", icon: "key.png"}
];
function searchMap() {
    return (
        <MapContainer/>
    )
}
function Header() {
   return (

      <header className="overline"><overline>
          <BrowserRouter>
                  <Grid direction="row" container justify="space-between" alignItems="center">
                      <img padding-top={200} height={20} src={require("../assets/images/fellow.png")}/>
                      <TextInput.InputText onEnter={(e)=> searchMap(e)} classNames={{width: "25%", height: "10%", fontsize:"8px"}} placeholder="Search by university, city or suburb" startAdornment={<SearchIcon/>}/>
                      <Button disableRipple className="buttonText" href={'../app/listings'}>Add Listing</Button>
                      <Button disableRipple href={'../app/'}>Saved</Button>
                      <Button disableRipple href={'../app/App'}>Messages</Button>
                      <Button disableRipple href={'../'}>Help</Button>
                      <Button disableRipple href={'../Profile'} >
                          <Avatar alt="Remy Sharp"
                              src={require("../assets/images/octar.jpg")}
                              margin={10} />
                      </Button>
                  </Grid>

              <Switch>

                  <Route exact path="/" component={() => <Home/>} />
                  <Route path="/listings" component={() => <ListingCard/>}/>
                  <Route path="/saved" component={() => <ListingCard/>}/>
                  <Route path="/message" component={() => <ListingCard/>}/>
                  <Route path="/help" component={() => <ListingCard/>}/>
                  <Route path="/profile" component={() => <AccountManager user={config.userProfile}/>}>
                  </Route>
              </Switch>
          </BrowserRouter>
              </overline>
              </header>
   )
}

export default Header