import * as React from 'react';
import { useContext } from 'react';
import axios from 'axios';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Carousel from 'react-material-ui-carousel';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import { CartDataContext } from '../Home';
import ShopFixRating from './ShopFixRating';
import { DataContext } from '../App';




const BetsellingSection = ({prodData , HandleChangePage }) => {

  const { getCartData, cartadd, CheckLogin } = useContext(CartDataContext);

  const { GetWishlistData } = useContext(DataContext);

  const navigate = useNavigate();


  // const cartadd = async (id)=> {

  //   const userid = localStorage.getItem('userid');

  //   const prodid = id;

  //   console.log(userid)


  //   if(userid === undefined){
  //     navigate('/login');
  //   }


  //   const url = '/apiv1/cart/add-to-cart'


  //   await axios.post(url,{
  //     userID : userid,
  //     productID : prodid
  //   })
  //   .then( response => response)
  //   .then(data => console.log(data.data.data))
  //   .catch(error => console.log(error))

  //   // window.location.reload();


  // }


  const SwitchIndiPage = ()=> {
    navigate('/indipage');
  }

  console.log(prodData);


  return (
    <>
      <section className='mainbox'>
        <div>
          <header className='featH'>
              <h2>Bestselling Products</h2>
              <button onClick={()=> navigate('/shop')}>View All <KeyboardArrowRightIcon/></button>
          </header>
          <div>
            <Carousel>
              <div className='mainshiz'>
                {
                  prodData.map((ele, i)=> {

                    if(i === 0 || i === 4 || i== 8 || i === 12 || i === 9){


                      return (

                        <div className='wholeshiz'>
                          <div onClick={()=>{ HandleChangePage(ele); SwitchIndiPage();}}>
                            <img className='prodimg' src={`http://localhost:8001/${ele.images[0]}`}></img>
                          </div>
                          <div className='infobox'>
                            <h2 className='prodname'>
                              <a href=''>{ele.name}</a>
                            </h2>
                            <div className='proddesc'>
                              <a>{ele.description}</a>
                            </div>
                            <div>
                              <span class="pricebold">
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
                          <div className='cartwhole'>
                            <div className='cartbox'>
                              <button className='cartline' onClick={()=> { cartadd(ele._id)}}>ADD TO CART</button>
                              <div onClick={()=> { CheckLogin(); GetWishlistData(ele) }}> 
                                <FavoriteBorderIcon className='heartic'></FavoriteBorderIcon>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
              <div className='mainshiz'>
                {
                  prodData.map((ele, i)=> {

                    if(i === 1 || i === 5 || i== 9 || i === 13 || i === 10){


                      return (

                        <div className='wholeshiz'>
                          <div onClick={()=>{ HandleChangePage(ele); SwitchIndiPage();}}>
                            <img className='prodimg' src={`http://localhost:8001/${ele.images[0]}`}></img>
                          </div>
                          <div className='infobox'>
                            <h2 className='prodname'>
                              <a href=''>{ele.name}</a>
                            </h2>
                            <div className='proddesc'>
                              <a>{ele.description}</a>
                            </div>
                            <div>
                              <span class="pricebold">
                                <bdi>
                                  <span>$</span>{ele.price}
                                </bdi>
                              </span>
                              <del class="striketh">
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
                          <div className='cartwhole'>
                            <div className='cartbox'>
                              <button className='cartline' onClick={()=> cartadd(ele._id)}>ADD TO CART</button>
                              <div onClick={()=> GetWishlistData(ele)}> 
                                <FavoriteBorderIcon className='heartic'></FavoriteBorderIcon>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
              <div className='mainshiz'>
                {
                  prodData.map((ele, i)=> {

                    if(i === 2 || i === 6 || i== 10 || i === 14 || i === 11){


                      return (

                        <div className='wholeshiz'>
                          <div onClick={()=>{ HandleChangePage(ele); SwitchIndiPage();}}>
                            <img className='prodimg' src={`http://localhost:8001/${ele.images[0]}`}></img>
                          </div>
                          <div className='infobox'>
                            <h2 className='prodname'>
                              <a href=''>{ele.name}</a>
                            </h2>
                            <div className='proddesc'>
                              <a>{ele.description}</a>
                            </div>
                            <div>
                              <span class="pricebold">
                                <bdi>
                                  <span>$</span>{ele.price}
                                </bdi>
                              </span>
                              <del class="striketh">
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
                          <div className='cartwhole'>
                            <div className='cartbox'>
                              <button className='cartline' onClick={()=> cartadd(ele._id)}>ADD TO CART</button>
                              <div onClick={()=> GetWishlistData(ele)}>
                                <FavoriteBorderIcon className='heartic'></FavoriteBorderIcon>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default BetsellingSection



