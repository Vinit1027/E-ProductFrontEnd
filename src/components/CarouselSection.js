import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import Trousers from '../images/Trousers.jpeg';
import TheFaultInOurStars2 from '../images/TheFaultInOurStars2.jpg';
import Motog60s from '../images/Motog60s.jpg';
import GooglePixel6 from '../images/GooglePixel6.jpg';
import Shoes from '../images/Shoes.jpeg';
import CasualShoes from '../images/CasualShoes.png'
import { useNavigate } from 'react-router-dom';



function CarouselSection({productData}){


    console.log(productData)

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props){

        const navigate = useNavigate();

    return (

        <div className='padbetween'>
            <div className='topbox'>
                <div className='centerbox'>
                    <div className='bx1'>
                        <p className='tptext'>The bookworm Editor</p>
                        <h2 className='mdtext'><span className='minimd1'>Featured Products of the</span><span className='minimd2'>February</span></h2>
                        <Button className='seebtn' onClick={()=> navigate('/shop')}>See More</Button>
                    </div>
                    <div className='bx2'>
                        {/* <img alt='' src={CasualShoes} style={{ height: '200px', width: '200px', objectFit: 'contain'}}></img> */}
                        <img alt='' src={GooglePixel6} className='imgbx'></img>
                        <img alt='' src={TheFaultInOurStars2} className='imgbx2'></img>
                        <img alt='' src={Trousers} className='imgbx'></img>
                        {/* <img alt='' src={Shoes} style={{ height: '200px', width: '200px', objectFit: 'contain'}}></img> */}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CarouselSection