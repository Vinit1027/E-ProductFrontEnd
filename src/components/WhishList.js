import React from 'react';
import axios from 'axios';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
import Copyright from './Copyright';
import WhishlistNav from './WhishlistNav';
import { useContext } from 'react';
import { DataContext } from '../App';


export const WishDataContext = createContext();


const WhishList = () => {

  const { getCartData, wishdata, setWishdata2, wishFilteredData, setWishFilteredData } = useContext(DataContext);

  const navigate = useNavigate();



  const wishcartadd = async  (id)=> {

    const userid = localStorage.getItem('userid');

    const prodid = id;

    console.log(userid)

    console.log(prodid)


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

    getCartData();

    const updatedWishlistData = wishdata.filter((ele, id)=> {
      return ele._id !== prodid
    })

    if(wishFilteredData !== undefined){
      const updatedWishFilteredlistData = wishFilteredData.filter((elem, id)=> {
        return elem._id !== prodid
      })
      setWishFilteredData(updatedWishFilteredlistData);
    }

    setWishdata2(updatedWishlistData);
    localStorage.setItem('wishdata', JSON.stringify(updatedWishlistData));





    // window.location.reload();


  }


  return (
    <WishDataContext.Provider value={{ wishcartadd }}>
      <section>
        <div className='borbot'>
            <div className='shopmarg'>
              <div className='mainbox2'>
                <a className='navhead' href=''>Home</a>
                <span className='arrdis'><KeyboardArrowRightIcon className='arrdir'/></span>
                <a className='navhead' href=''>Wishlist</a>
              </div>
            </div>
          </div>
          <div className='mainbox'>
            <div className='shopmarg'>
              <WhishlistNav/>
            </div>
          </div>
          <div>
            <NewsLetter/>
            <Footer/>
            <Copyright/>
          </div>
      </section>
    </WishDataContext.Provider>
  )
}

export default WhishList