import React from 'react'
import axios from 'axios'
import Container from '@material-ui/core/Container'
import GridListing from "./GridListing"

function Saved () {
    const [listings, setListings] = React.useState([]);

    React.useEffect(() => {
        getSaved();
    }, []);

    const getSaved = () => {
        axios.get('http://localhost:5000/api/users/saved', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then((res) => {
            setListings(res.data.data)
        })
    }

	return (
		<Container maxWidth="lg" style={{position:'relative', top:'100px', height:'100vh'}}>
            <h5>Saved Listings</h5>
            <GridListing listings={listings}/>
        </Container>
    )
}

export default Saved
