import * as React from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataContext } from '../App';
import { useState } from 'react';
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CartDataGridBlock({ cartData }) {

    const { setCartdata, getCartData } = useContext(DataContext);



    const initialValue = 0;
    const total = cartData.reduce( (accumulator,current) => accumulator + current.price * current.quantity, initialValue);




    const increment = async (id, prodprice, prodquant)=> {

        await axios.patch(`https://e-products-api.onrender.com/apiv1/cart/update-quantity/${id}`,
        {
            type : 'increment'
        },
        {
            headers : {
            'Access-Control-Allow-Origin' : 'https://e-products.onrender.com/'
            }
        }
        )
        .then(response => response)
        .then(data => console.log(data))
        .catch( err => console.log(err))


        getCartData();

        // let initialProdvalue = 0

        // const prodsingledata = cartData.filter((ele)=> {
        //     return ele._id === id
        // })

        // const totalprodprice = prodsingledata.reduce( (accumulator,current) => accumulator + current.price * current.quantity, initialProdvalue);

        // console.log(totalprodprice + prodprice)




    }



    const decrement = async (id, prodprice, prodquant)=> {

        await axios.patch(`https://e-products-api.onrender.com/apiv1/cart/update-quantity/${id}`,
        {
            type : 'decrement'
        },
        {
            headers : {
            'Access-Control-Allow-Origin' : 'https://e-products.onrender.com/'
            }
        }
        )
        .then(response => response)
        .then(data => console.log(data))
        .catch( err => console.log(err))
        

        // await axios.get('/apiv1/cart/get-cart',
        // {
        // headers: {
        //     'Content-Type' : 'multipart/form-data',
        // }
        // },{
        // withCredentials:true,
        // credentials: "include"
        // })
        // .then(response => response)
        // .then(data => setCartdata(data.data.data))
        // .catch( err => console.log(err))

        getCartData();


        // let initialProdvalue = 0

        // const prodsingledata = cartData.filter((ele)=> {
        //     return ele._id === id
        // })

        // const totalprodprice = prodsingledata.reduce( (accumulator,current) => accumulator + current.price * current.quantity, initialProdvalue);

        // console.log(totalprodprice - prodprice)


    }


    const deletecartprod = async (id)=> {

        await axios.delete(`https://e-products-api.onrender.com/apiv1/cart/deleteCartData/${id}`,
        {
            headers : {
            'Access-Control-Allow-Origin' : 'https://e-products.onrender.com/'
            }
        })
        .then(response => response)
        .then(data => console.log(data))
        .catch( err => console.log(err))


        // await axios.get('/apiv1/cart/get-cart',
        // {
        // headers: {
        //     'Content-Type' : 'multipart/form-data',
        // }
        // },{
        // withCredentials:true,
        // credentials: "include"
        // })
        // .then(response => response)
        // .then(data => setCartdata(data.data.data))
        // .catch( err => console.log(err))

        getCartData();

        // window.location.reload(true);
    }






    console.log(cartData)
  return (

    <>
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item sm={3} xs={12} sx={{ padding : '0!important'}}>
                        <div>
                            <div className='cartdatapad'>
                                <h3>Product</h3>
                            </div>
                            {
                                cartData.map((data)=> {
                                    return (

                                        <div>
                                            <div className='cartdatapad2 cartboxflex cartboxgrid'>
                                                <div>
                                                    <img src={`https://e-products-api.onrender.com/${data.image}`} className='cartimag'/>
                                                </div>
                                                <div className='cartmargleft'>
                                                    <a href='' className='cartname'>{data.name}</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item sm={2} xs={12} sx={{ padding : '0!important'}}>
                        <div>
                            <div className='cartdatapad'>
                                <h3>Price</h3>
                            </div>
                            {
                                cartData.map((data)=>{

                                    return (

                                        <div>
                                            <div className='cartdatapad2 cartboxgrid cartboxflex2'>
                                                <div>
                                                    <span class="cartprice">
                                                        <bdi>
                                                            <span class="woocommerce-Price-currencySymbol">$</span>
                                                            {data.price}
                                                        </bdi>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item sm={3} xs={12} sx={{ padding : '0!important'}}>
                        <div>
                            <div className='cartdatapad'>
                                <h3>Quantity</h3>
                            </div>
                            {
                                cartData.map((data)=> {

                                    return (

                                        <div>
                                            <div className='cartdatapad2 cartboxgrid cartboxflex2'>
                                                <div className='cartbuttonflex'>
                                                    <button className='cartbutton' onClick={()=> { decrement(data._id, data.price, data.quantity)}}> - </button>
                                                    <p style={{ margin : '0', marginLeft : '8px', marginRight : '8px'}}>{data.quantity}</p>
                                                    <button className='cartbutton' onClick={()=> { increment(data._id, data.price, data.quantity) }}> + </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item sm={2} xs={12} sx={{ padding : '0!important'}}>
                        <div>
                            <div className='cartdatapad'>
                                <h3>Total</h3>
                            </div>
                            {
                                cartData.map((data)=>{

                                    let initialProdvalue = 0

                                    const filterprodprice = cartData.filter((ele)=> {
                                            return ele._id === data._id
                                        })

                                    const totalprodprice = filterprodprice.reduce( (accumulator,current) => accumulator + current.price * current.quantity, initialProdvalue);


                                    // console.log(totalprodprice + prodprice)

                                    return (

                                        <div>
                                            <div className='cartdatapad2 cartboxgrid cartboxflex2'>
                                                <div>
                                                    <span class="cartprice">
                                                        <bdi>
                                                            <span class="woocommerce-Price-currencySymbol">$</span>
                                                            {totalprodprice}
                                                        </bdi>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                    <Grid item sm={2} xs={12} sx={{ padding : '0!important'}}>
                        <div>
                            <div className='cartdatapad cartheadcenter'>
                                <h3>Remove</h3>
                            </div>
                            {
                                cartData.map((data)=> {
                                    return (
                                        <div>
                                            <div className='cartdatapad2 cartboxgrid cartboxflex3'>
                                                <div className='cartbuttonflex'>
                                                    <button className='cartbutton' onClick={()=> {deletecartprod(data._id)}}> Delete </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, marginTop : '32px'}}>
                <Grid container spacing={2}>
                    <Grid item sm={3} xs={0}>
                        <div></div>
                    </Grid>
                    <Grid item sm={2} xs={2}>
                        <div></div>
                    </Grid>
                    <Grid item sm={3} xs={3} sx={{ padding : '0!important'}}>
                        <div>
                            <div className='cartdatapad cartboxgrid2'>
                                <h3>Total</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={2} xs={5} sx={{ padding : '0!important'}}>
                        <div>
                            <div className='cartdatapad cartboxgrid2'>
                                <span class="cartprice">
                                    <bdi>
                                        <span class="woocommerce-Price-currencySymbol">$</span>
                                        {total}
                                    </bdi>
                                </span>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={2} xs={0}>
                        <div></div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    </>
  );
}
