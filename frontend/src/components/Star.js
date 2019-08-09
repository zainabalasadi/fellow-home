import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
   iconFilled: {
     color: '#FF5240',
   },
   iconHover: {
     color: '#FF5240',
   },
 })(Rating);

export default function SimpleRating() {
   const [value, setValue] = React.useState(Math.random()*5);

  return (
   <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
         <StyledRating
            name="simple-controlled"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
            setValue(newValue);
         }}
        />
      </Box>
    </div>
  );
}