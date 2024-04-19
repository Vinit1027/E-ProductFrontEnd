import * as React from 'react';
import { useContext } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { DataContext } from '../App';

const labels = {
  0.5: '0.5',
  1: '1',
  1.5: '1.5',
  2: '2',
  2.5: '2.5',
  3: '3',
  3.5: '3.5',
  4: '4',
  4.5: '4.5',
  5: '5',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function WhishListRating() {

const { value2, setValue2 } = useContext(DataContext);

  const [hover, setHover] = React.useState(-1);


  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value2}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value2 !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value2]}</Box>
      )}
    </Box>
  );
}