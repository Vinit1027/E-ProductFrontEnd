import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ShopDataContext } from './Shop';
import { DataContext } from '../App';
import { useNavigate } from 'react-router-dom';
import ShopFixRating from './ShopFixRating';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ShopProducts( { FilteredData } ) {

  const navigate = useNavigate();

  const { cartadd, Shopdata, CheckLogin } = useContext(ShopDataContext);

  const { HandleChangePage, GetWishlistData } = useContext(DataContext);


  console.log(Shopdata.length)



  const SwitchIndiPage = ()=> {
    navigate('/indipage');
  }


  console.log(FilteredData)


  return (
    <Box className='gridblk' sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        {
            FilteredData === undefined ? Shopdata.map((ele, i)=> {


                return (

                    <Grid key={ele._id} item lg={3} md={4} sm={4} xs={6} >
                        <div className='wholeshiz2'>
                          <div onClick={()=>{ HandleChangePage(ele); SwitchIndiPage();}}>
                            <img className='prodimg2' src={`https://e-products-api.onrender.com/${ele.images[0]}`}></img>
                          </div>
                          <div className='infobox2'>
                            <h2 className='prodname2'>
                              <a href=''>{ele.name}</a>
                            </h2>
                            <div className='proddesc2'>
                              <a>{ele.description}</a>
                            </div>
                            <div>
                              <span class="pricebold2">
                                <bdi>
                                  <span>$</span>{ele.price}
                                </bdi>
                              </span>
                              <del class="striketh2">
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
                          <div className='cartwhole2'>
                            <div className='cartbox2'>
                              <button className='cartline' onClick={()=> cartadd(ele._id)}>ADD TO CART</button>
                              <div onClick={()=> { CheckLogin(); GetWishlistData(ele) }}>
                                <FavoriteBorderIcon className='heartic2'></FavoriteBorderIcon>
                              </div>
                            </div>
                          </div>
                        </div>
                    </Grid>

                )
            })

            :

            FilteredData.map((ele, i)=> {


                return (

                    <Grid key={ele._id} item lg={3} md={4} sm={4} xs={6} >
                        <div className='wholeshiz2'>
                          <div>
                            <img className='prodimg2' src={`https://e-products-api.onrender.com/${ele.images[0]}`}></img>
                          </div>
                          <div className='infobox2'>
                            <h2 className='prodname2'>
                              <a href=''>{ele.name}</a>
                            </h2>
                            <div className='proddesc2'>
                              <a>{ele.description}</a>
                            </div>
                            <div>
                              <span class="pricebold2">
                                <bdi>
                                  <span>$</span>{ele.price}
                                </bdi>
                              </span>
                              <del class="striketh2">
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
                          <div className='cartwhole2'>
                            <div className='cartbox2'>
                              <button className='cartline' onClick={()=> cartadd(ele._id)}>ADD TO CART</button>
                              <div onClick={()=> { CheckLogin(); GetWishlistData(ele) }}>
                                <FavoriteBorderIcon className='heartic2'></FavoriteBorderIcon>
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