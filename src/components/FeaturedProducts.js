import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProductTab from './ProductTab';

const FeaturedProducts = ({ featdata }) => {
  return (
    <>
      <section className='mainbox'>
        <div>
          <header className='featH2'>
              <h2>Featured Products</h2>
          </header>
          <div>
            <ProductTab featdata={featdata}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedProducts
