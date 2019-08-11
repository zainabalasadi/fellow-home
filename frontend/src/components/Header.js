/**
 * 
 */
import React from 'react'
import {Avatar, Grid, Divider, Button, Menu} from '@material-ui/core'
import * as TextInput from "./Textinputs"
import SearchIcon from '@material-ui/icons/Search'
import { BrowserRouter} from 'react-router-dom'
import * as Buttons from './Button'
import Login from "./Login"
import Register from "./Register"
import { withRouter } from 'react-router-dom'

/**
 * 
 */
function Header(props) {
    const [menuOpen, setMenuOpen] = React.useState(null);
    const [values, setValues] = React.useState({
        searchString: ''
    });

    /**
     * 
     */
    function handleMenuClick(event) {
        setMenuOpen(event.currentTarget);
    }

    /**
     * 
     */
    function handleMenuClose() {
        setMenuOpen(null);
    }

    /**
     * 
     */
    const handleSearchSubmit = (event) => {
        if (event.key === 'Enter') {
            props.history.push('/Search?q='+event.target.value);
        }
    };

    /**
     * 
     * @param {*} prop 
     */
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const currUser = JSON.parse(localStorage.getItem('currentUser'));
    return (
        <>
        <header className="overline"><overline>
            {currUser ?
            <BrowserRouter>
                  <Grid direction="row" container justify="space-evenly" alignItems="center">
                      <a href="/"><img alt="Fellow logo" padding-top={20} height={20} src={require("../assets/images/logo.svg")}/></a>
                      <Grid item xs = {7}>
                      <TextInput.InputText color={props.color.dark} onKeyUp={handleSearchSubmit} 
                        classNames={{fontsize:"8px"}} 
                        placeholder="Search by university, city or suburb" 
                        value={values.searchString}
                        onChange={handleChange('searchString')}
                        startAdornment={<SearchIcon/>}/>
                      </Grid>
                      {/*<Buttons.ButtonLink color={props.color} className="buttonText" href={'../app/listings'} message={"Add Listing"}/>*/}
                      <Buttons.ButtonLink color={props.color.primary} className="buttonText" href={'../listing1'} message={"Add Listing"}/>
                      <Buttons.ButtonLink color={props.color.primary} href={'../Saved'} message={"Saved"}/>
                      <Buttons.ButtonLink color={props.color.primary} href={'../app/App'} message={"Messages"}/>
                      <Buttons.ButtonLink color={props.color.primary} href={'../Help'} message={"Help"}/>
                      <Button disableRipple aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
                          <Avatar alt={currUser.first_name}
                              src={currUser.avatar}
                              margin={10} />
                      </Button>
                      <Menu id="simple-menu" anchorEl={menuOpen} keepMounted open={Boolean(menuOpen)} onClose={handleMenuClose}>
                          <Grid direction="column" justify="flex-start" alignItems="stretch">
                              <Grid item><Buttons.ButtonLink color={props.color.dark} href={'../user/' + currUser.id} message={"Profile"}/></Grid>
                              <Grid item><Buttons.ButtonLink color={props.color.dark} href={'../user/' + currUser.id} message={"Invite Friends"}/></Grid>
                              <Grid item><Buttons.ButtonLink color={props.color.dark} click={props.onUserLogout} message={"Logout"}/></Grid>
                          </Grid>
                      </Menu>
                  </Grid>


          </BrowserRouter>
          :
              <BrowserRouter>
                  <Grid direction="row" container justify="space-evenly" alignItems="center">
                      <a href="/"><img alt="Fellow logo" padding-top={20} height={20} src={require("../assets/images/logo.svg")}/></a>
                      <Grid item xs = {6}>
                      <TextInput.InputText color={props.color.dark} onKeyUp={handleSearchSubmit}
                        classNames={{fontsize:"8px"}}
                        id={"ListingSearch"}
                        placeholder="Search by university, city or suburb"
                        value={values.searchString}
                        onChange={handleChange('searchString')}
                        startAdornment={<SearchIcon/>}/>
                      </Grid>
                      <Buttons.ButtonLink color={props.color.dark} className="buttonText" href={'../About'} message={"About Fellow"}/>
                      <Login openModal={false} user={props.user} isLoggedIn={props.loggedin} addList={true} onLogin={props.onLogin}/>
                      <Buttons.ButtonLink color={props.color.dark} href={'../Help'} message={"Help"}/>
                      <Register user={props.user} isLoggedIn={props.loggedin} onLogin={props.onLogin}/>
                      <Login openModal={false} user={props.user} isLoggedIn={props.loggedin} addList={false} onLogin={props.onLogin}/>
                  </Grid>
              </BrowserRouter>
          }
              </overline>
              <Divider/>
              </header>
       </>
   )
}

export default withRouter(Header);
