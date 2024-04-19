import * as React from 'react';
import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ShopAccord from './ShopAccord';
import ShopDropDown from './ShopDropDown';
import ShopDropDown2 from './ShopDropDown2';
import ShopProducts from './ShopProducts';
import { ShopDataContext } from './Shop';
import { DataContext } from '../App';
import WhishlistProducts from './WhishlistProducts';
import WhishlistAccord from './WhishlistAccord';
import WhishListDropDown from './WhishListDropDown';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function WhishlistNav() {

    const { wishdata } = useContext(DataContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item sm={3} xs={12}>
            <WhishlistAccord/>
        </Grid>
        <Grid item sm={9} xs={12}>
          <div className='shopdropbox'>
            <div className='shopnumcen'>
                <p>Total Products : {wishdata.length}</p> 
            </div>
            <div className='shopdropbox2'>
              <div className='shopspace2'>
                <WhishListDropDown/>
              </div>
            </div>
          </div>
          <div className='shopprodmar'>
            <WhishlistProducts/>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}