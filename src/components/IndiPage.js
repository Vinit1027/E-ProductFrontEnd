import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PageGrid from './PageGrid';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import Copyright from './Copyright';


const IndiPage = ({page}) => {

    console.log(page)
  return (
    <>
        <section>
            <div className='borbot'>
                <div className='shopmarg'>
                    <div className='mainbox2'>
                        <a className='navhead' href=''>Home</a>
                        <span className='arrdis'><KeyboardArrowRightIcon className='arrdir'/></span>
                        <a className='navhead' href=''>indipage</a>
                    </div>
                </div>
            </div>
            <div>
                <div className='pagemarg'>
                    <PageGrid page={page}/>
                </div>
            </div>
            <NewsLetter/>
            <Footer/>
            <Copyright/>
        </section>
    </>
  )
}

export default IndiPage