import React from "react"
import Container from '@material-ui/core/Container'
import {Grid} from "@material-ui/core"
import Box from '@material-ui/core/Box'
import * as Buttons from './Button'
import {BrowserRouter} from 'react-router-dom'
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

class Listing7 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            file: localStorage.getItem("images")||null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        var imag;
        imag=this.addFile(event.target.files);
        this.setState({
            file: imag
        })
        localStorage.setItem('images',imag);
    }

    addFile(imagList){
        let imagePack=[];
        for (var i=0;i<imagList.length;i++){
            let image=URL.createObjectURL(imagList[i]);
            imagePack.push(
                <GridListTile key={image}>
                    <img alt="Fellow" src={image}/>
                </GridListTile>
            )
        }
        return imagePack;
    }
    render(){
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
                                Availabilities
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
                                    Photos
                                </Box>
                            </Grid>
                            <Grid item xs = {2}>
                                Preferences and About
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Container style={{position:'relative',textAlign:'left', padding:10}} maxWidth="md">

                    <Box fontSize={24}>
                        Add photos to your listing
                    </Box>
                    <Box fontSize={10} fontWeight="fontWeightBold" mt={3} mb={0}>
                        Photos
                    </Box>
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file" onChange={this.handleChange}
                        style={{display:'none'}}
                    />
                    <p/>
                    <label htmlFor="contained-button-file">
                        <Buttons.ButtonFill color={this.props.color.dark} disabled={true} classNames={{component: "span"}} message={"Upload"}/>
                    </label>
                    <div style={{backgroundColor: 'whitesmoke',height:'43vh'}} maxWidth="xl">
                        <GridList style={{flexWrap: 'nowrap',
                            transform: 'translateZ(0)',
                            height:'400px',}} cols={2.5} cellHeight={390} >
                            {this.state.file}
                        </GridList>
                    </div>
                    <p/>
                    <BrowserRouter>
                        <Buttons.ButtonFill color={this.props.color.primary} href={'../Listing8'} message={"Continue"}/>
                    </BrowserRouter>
                </Container>
            </Container>
        );
    }
}
 
export default Listing7;
