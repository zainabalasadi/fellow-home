import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'

const StyledRating = withStyles({
   iconFilled: {
     color: '#FF5240',
   },
   iconHover: {
     color: '#FF5240',
   },
 })(Rating);

export default function SimpleRating(props) {
   const [value, setValue] = React.useState(Math.random()*5);

  return (
   <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
         <StyledRating
            name="simple-controlled"
            value={props.rating}
            precision={0.5}
            readOnly={props.readOnly}
            onChange={props.onChange}
        />
      </Box>
    </div>
  );
}
