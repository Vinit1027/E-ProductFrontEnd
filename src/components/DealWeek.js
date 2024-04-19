import React from 'react';
import Carousel from 'react-material-ui-carousel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GridBlocks2 from './GridBlocks2';
import { useNavigate } from 'react-router-dom';

const DealWeek = ({ dealdata }) => {

    const navigate = useNavigate();


    const filterdata = dealdata.filter((ele, i)=> {
        return i === 0 || i === 5
    })

    const filterdata2 = dealdata.filter((ele, i)=> {
        return i === 4 || i === 9
    })

    const filterdata3 = dealdata.filter((ele, i)=> {
        return i === 8 || i === 13
    })

    const filterdata4 = dealdata.filter((ele, i)=> {
        return i === 12 || i === 3
    })


  return (
    <>
        <section className='mainbox backclr'>
            <div>
                <header className='featH'>
                    <h2>Deal Of the Week</h2>
                    <button onClick={()=> navigate('/shop')}>View All <KeyboardArrowRightIcon/></button>
                </header>
                <div>
                    <Carousel className='caroheight'>
                        <div className='mainshiz2'>
                            <GridBlocks2 dealdata={filterdata}/>
                        </div>
                        <div className='mainshiz2'>
                            <GridBlocks2 dealdata={filterdata2}/>
                        </div>
                        <div className='mainshiz2'>
                            <GridBlocks2 dealdata={filterdata3}/>
                        </div>
                        <div className='mainshiz2'>
                            <GridBlocks2 dealdata={filterdata4}/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    </>
  )
}

export default DealWeek