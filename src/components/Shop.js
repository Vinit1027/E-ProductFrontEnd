import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext, useState} from 'react';
import axios from 'axios';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShopNav from './ShopNav';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
import Copyright from './Copyright';
import { useContext } from 'react';
import { DataContext } from '../App';

export const ShopDataContext = createContext();

const Shop = ({ Shopdata, setCartdata, getCartData}) => {

  const { FilteredData, CategoryShopData, SortData, setCountcart, countcart, iswishdata, setIswishdata } = useContext(DataContext);

    const navigate = useNavigate();



    console.log(FilteredData);


    const CheckLogin = ()=> {

      const userid = localStorage.getItem('userid');

      if(userid === null){
        navigate('/login');
      }
    }




    const cartadd = async  (id)=> {

    const userid = localStorage.getItem('userid');

    const prodid = id;

    console.log(userid)


    if(userid != null || prodid === true){

      const url = 'https://e-products-api.onrender.com/apiv1/cart/add-to-cart'
  
  
      await axios.post(url,{
        userID : userid,
        productID : prodid
      })
      .then( response => response)
      .then(data => console.log(data.data.message))
      .catch(error => console.log(error))
    }
    else if(userid === null || prodid === true){

      navigate('/login');

    }
    else{
      navigate('/login');
    }


    // await axios.get('/apiv1/cart/get-cart',
    // {
    //   headers: {
    //     'Content-Type' : 'multipart/form-data',
    //   }
    // },{
    //   withCredentials:true,
    //   credentials: "include"
    // })
    // .then(response => response)
    // .then(data => setCartdata(data.data.data))
    // .catch( err => console.log(err))

    getCartData();

    setCountcart(true);



  }


  return (
    <>
    <ShopDataContext.Provider value={{ cartadd, Shopdata, SortData, CheckLogin }}>
      <section>
        <div className='borbot'>
          <div className='shopmarg'>
            <div className='mainbox2'>
              <a className='navhead' href=''>Home</a>
              <span className='arrdis'><KeyboardArrowRightIcon className='arrdir'/></span>
              <a className='navhead' href=''>Shop</a>
            </div>
          </div>
        </div>
        {
          countcart === true
          ?  
          <div style={{ display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <p style={{ position: "fixed", zIndex : '2', padding : '8px 24px', backgroundColor: '#161619', color : 'white', borderRadius : '4px'}}>Added to Cart</p>
          </div>
          :
          <p></p>
        }
        {
          iswishdata === true
          ?  
          <div style={{ display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
            <p style={{ position: "fixed", zIndex : '2', padding : '8px 24px', backgroundColor: '#161619', color : 'white', borderRadius : '4px'}}>Added to Wishlist</p>
          </div>
          :
          <p></p>
        }
        <div className='mainbox'>
          <div className='shopmarg'>
            <ShopNav FilteredData={FilteredData} CategoryShopData={CategoryShopData}/>
          </div>
        </div>
        <div>
          <NewsLetter/>
          <Footer/>
          <Copyright/>
        </div>
      </section>
    </ShopDataContext.Provider>
    </>
  )
}

export default Shop