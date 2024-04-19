import * as React from 'react';
import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import { CartDataContext } from '../Home';
import ShopFixRating from './ShopFixRating';
import { DataContext } from '../App';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridBlocks2({ dealdata }) {

    const navigate = useNavigate();

    const { GetWishlistData } = useContext(DataContext);

    const { cartadd, HandleChangePage, CheckLogin } = useContext(CartDataContext);


    const SwitchIndiPage = ()=> {
    navigate('/indipage');
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        {
            dealdata.map((ele, i)=> {

                return (
                    <Grid className='dealgrid' item xs={6} sx={{ width : '100%!important'}}>
                        <div className='tbox'>
                            <div className='wholeshiz3'>
                                <div onClick={()=>{ HandleChangePage(ele); SwitchIndiPage();}}>
                                    <img className='prodimg3' src={`http://localhost:8001/${ele.images[0]}`}></img>
                                </div>
                                <div className='infobox3'>
                                    <h2 className='prodname3'>
                                        <a href=''>{ele.name}</a>
                                    </h2>
                                    <div className='proddesc3'>
                                        <a>{ele.description}</a>
                                    </div>
                                    <div>
                                        <span class="pricebold3">
                                            <bdi>
                                                <span>$</span>{ele.price}
                                            </bdi>
                                        </span>
                                        <del class="striketh3">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>
                                                    <span class="woocommerce-Price-currencySymbol">$</span>{Number(ele.price) + Number(100)}
                                                </bdi>
                                            </span>
                                        </del>
                                        <span>
                                            <ShopFixRating rating={ele.rating}/>
                                        </span>
                                    </div>
                                </div>
                                <div className='cartwhole3'>
                                    <div className='cartbox3'>
                                        <button className='cartline' onClick={()=> cartadd(ele._id)}>ADD TO CART</button>
                                        <div onClick={()=> { CheckLogin(); GetWishlistData(ele) }}> 
                                            <FavoriteBorderIcon className='heartic3'></FavoriteBorderIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                )
            })
        }
      </Grid>
    </Box>
  );
}