import React, { useEffect } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CartGridBlock from './CartGridBlock';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import Copyright from './Copyright';


const Cart = ({ cartData, getCartData }) => {


  // useEffect(()=> {
  //   getCartData();
  // },[])


  return (
    <section>
        <div className='borbot'>
            <div className='shopmarg'>
                <div className='mainbox2'>
                    <a className='navhead' href=''>Home</a>
                    <span className='arrdis'><KeyboardArrowRightIcon className='arrdir'/></span>
                    <a className='navhead' href=''>Cart</a>
                </div>
            </div>
        </div>
        <div className='mainbox cartcolor'>
          <div className='cartmarg'>
            <div className='cartheadbox'>
              <h6>Your Cart : {cartData.length}</h6>
            </div>
            <div>
              <CartGridBlock cartData={cartData}/>
            </div>
          </div>
        </div>
        <NewsLetter/>
        <Footer/>
        <Copyright/>
    </section>
  )
}

export default Cart