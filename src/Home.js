import React from 'react';
import axios from 'axios';
import { createContext } from 'react';
import { useContext } from 'react';
import { DataContext } from './App';
import BetsellingSection from './components/BetsellingSection';
import CarouselSection from './components/CarouselSection';
import DealWeek from './components/DealWeek';
import FeaturedCategories from './components/FeaturedCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Navbar from './components/Navbar';
import NewReleases from './components/NewReleases';
import NewsLetter from './components/NewsLetter';
import ProductEndorsers from './components/ProductEndorsers';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';


export const CartDataContext = createContext();


const Home = ({data, HandleChangePage}) => {

  
  const navigate = useNavigate();

  const { getCartData, cartData, setCartdata, countcart, setCountcart, iswishdata, CategoryShopData } = useContext(DataContext);



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

    console.log(prodid)


    if(userid != null || prodid === true){

      const url = '/apiv1/cart/add-to-cart'
  
  
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



    // window.location.reload();


  }


  // console.log(JSON.stringify(cartData));





  // console.log(data)
  return (
    <>
    <CartDataContext.Provider value={{cartadd, HandleChangePage, CheckLogin, CategoryShopData }}>
      {/* <Navbar/> */}
      {
        countcart === true
        ?  
        <div style={{ display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
          <p style={{ position: "fixed", zIndex : '2', padding : '8px 24px', backgroundColor: '#161619', color : 'white', borderRadius : '4px'}}>Added to Cart</p>
        </div>
        :
        <p style={{ display : 'none'}}></p>
      }
      {
        iswishdata === true
        ?  
        <div style={{ display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
          <p style={{ position: "fixed", zIndex : '2', padding : '8px 24px', backgroundColor: '#161619', color : 'white', borderRadius : '4px'}}>Added to Wishlist</p>
        </div>
        :
        <p style={{ display : 'none'}}></p>
      }
      <CarouselSection productData={data}/>
      <FeaturedCategories/>
      <BetsellingSection prodData={data} HandleChangePage={HandleChangePage}/>
      <FeaturedProducts featdata={data}/>
      <DealWeek dealdata={data}/>
      <NewReleases Newdata={data}/>
      <ProductEndorsers/>
      <NewsLetter/>
      <Footer/>
      <Copyright/>
    </CartDataContext.Provider>
    </>
  )
}

export default Home