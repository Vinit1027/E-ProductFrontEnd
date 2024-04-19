import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PageDispGrid from './PageDispGrid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PageGrid({ page }) {
  return (
    <Box sx={{ flexGrow: 1 }} className='mainbox'>
      <Grid container spacing={1}>
        <Grid item sm={9} xs={12}>
            <div>
                <PageDispGrid page={page}/>
            </div>
        </Grid>
        <Grid item sm={3} xs={12}>
          <div>
            <div className='delbox'>
              <div className='delicon'>
                <LocalShippingOutlinedIcon sx={{ color: '#f75454!important', fontSize : '40px'}}/>
              </div>
              <div className='delcs'>
                <h4>Free Delivery</h4>
                <p>Orders over $100</p>
              </div>
            </div>
            <div className='delbox'>
              <div className='delicon'>
                <CreditScoreOutlinedIcon sx={{ color: '#f75454!important', fontSize : '40px'}}/>
              </div>
              <div className='delcs'>
                <h4>Secure Payment</h4>
                <p>100% Secure Payment</p>
              </div>
            </div>
            <div className='delbox'>
              <div className='delicon'>
                <DoneOutlineOutlinedIcon sx={{ color: '#f75454!important', fontSize : '40px'}}/>
              </div>
              <div className='delcs'>
                <h4>Money Back Guarantee</h4>
                <p>Within 30 Days</p>
              </div>
            </div>
            <div className='delbox'>
              <div className='delicon'>
                <SupportAgentOutlinedIcon sx={{ color: '#f75454!important', fontSize : '40px'}}/>
              </div>
              <div className='delcs'>
                <h4>24/7 Support</h4>
                <p>Within 1 Business Day</p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
