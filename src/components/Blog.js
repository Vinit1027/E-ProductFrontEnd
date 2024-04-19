import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BlogGrid from './BlogGrid';
import BlogPagination from './BlogPagination';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import Copyright from './Copyright';

const Blog = () => {
  return (
    <>
      <section>
        <div className='borbot'>
            <div className='shopmarg'>
                <div className='mainbox2'>
                    <a className='navhead' href=''>Home</a>
                    <span className='arrdis'><KeyboardArrowRightIcon className='arrdir'/></span>
                    <a className='navhead' href=''>Blog</a>
                </div>
            </div>
        </div>
        <div className='mainbox'>
          <div className='blogmarg' >
            <BlogGrid/>
          </div>
        </div>
        <div className='blogpagicenter mainbox'>
          <BlogPagination/>
        </div>
        <NewsLetter/>
        <Footer/>
        <Copyright/>
      </section>
    </>
  )
}

export default Blog