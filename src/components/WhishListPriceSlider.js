import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useContext } from 'react';
import { DataContext } from '../App';
import { useEffect } from 'react';

function valuetext(value) {
  return `${value}°C`;
}

export default function ShopPriceSlider() {

    const { PriceData2 } = useContext(DataContext);



  const [value, setValue] = React.useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=> {
    PriceData2(value);
  },[value])



  console.log(value)

  return (
    <Box sx={{ width: 250, marginTop : '24px' }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        max={1000}
        sx={{color : '#161619'}}
      />
    </Box>
  );
}