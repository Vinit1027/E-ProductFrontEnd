import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ShopDataContext } from './Shop';
import { DataContext } from '../App';

export default function WhishListDropDown() {
  const [age, setAge] = React.useState('');

  const { SortWishData } = useContext(DataContext);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth className='sddw' sx={{ minWidth: 200 }}>
        <InputLabel id="demo-simple-select-label">Showing All Products</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={4} onClick={()=> SortWishData('3')}>4</MenuItem>
          <MenuItem value={8} onClick={()=> SortWishData('7')}>8</MenuItem>
          <MenuItem value={12} onClick={()=> SortWishData('11')}>12</MenuItem>
          <MenuItem value={16} onClick={()=> SortWishData('15')}>16 All</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
