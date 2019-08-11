/**
 * 
 */
import React from 'react'
import axios from 'axios'
import {Box, FormControlLabel, Checkbox} from '@material-ui/core'
import {Favorite, FavoriteBorder} from '@material-ui/icons'

/**
 * 
 */
const SaveButton = (props) => {
    const [isSaved, setIsSaved] = React.useState(false);

    React.useEffect(() => {
        checkSaved();
    }, [isSaved]);

    /**
     * 
     */
    const saveListing = () => {
        if (isSaved) {
            axios.delete('http://localhost:5000/api/users/saved', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                },
                data: {
                    listing_id: props.listing_id
                }
            }).then((res) => {
                setIsSaved(false);
            });
        } else {
            axios.post('http://localhost:5000/api/users/saved', {
                listing_id: props.listing_id
            }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then((res) => {
                setIsSaved(true);
            });
        }
    };

    /**
     * 
     */
    const checkSaved = () => {
        axios.get('http://localhost:5000/api/users/saved', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then((res) => {
            const listings = res.data.data;
            for (let i = 0; i < listings.length; ++i) {
                if (listings[i].id === props.listing_id) {
                    setIsSaved(true);
                }
            }
        });
    }

    return (
        <Box mt={5} bgcolor="primary.main">
        <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder/>} 
            checkedIcon={<Favorite />} 
            checked={isSaved}/>}
            onChange={saveListing}
        />
        </Box>
    );
}

export default SaveButton;
