import React from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Carousel from 'react-material-ui-carousel';
import One from '../images/One.jpg';
import Two from '../images/Two.jpg';
import Three from '../images/Three.jpg';
import Four from '../images/Four.jpg';
import Five from '../images/Five.jpg';


const ProductEndorsers = () => {

    const navigate = useNavigate();

  return (
    <>
        <section className='mainbox marbt'>
            <div>
                <div>
                    <header className='featH3'>
                        <h2>Product Endorsers</h2>
                        {/* <button>View All <KeyboardArrowRightIcon/></button> */}
                    </header>
                </div>
                <div className='carbox'>
                    <Carousel>
                        <div className='totalbox'>
                            <div className='overprofbox opb1'>
                                <div className='profilebox'>
                                    <img alt='' src={One} className='profileimg'></img>
                                </div>
                                <div className='textbox'>
                                    <h2 className='endosz'>A G Riddle</h2>
                                    <div class="descrpend">Fashion</div>
                                </div>
                            </div>
                            <div className='overprofbox opb2'>
                                <div className='profilebox'>
                                    <img alt='' src={Two} className='profileimg'></img>
                                </div>
                                <div className='textbox'>
                                    <h2 className='endosz'>Andre Aciman</h2>
                                    <div class="descrpend">Books</div>
                                </div>
                            </div>
                            <div className='overprofbox opb3'>
                                <div className='profilebox'>
                                    <img alt='' src={Three} className='profileimg'></img>
                                </div>
                                <div className='textbox'>
                                    <h2 className='endosz'>Anna Banks</h2>
                                    <div class="descrpend">Footwear</div>
                                </div>
                            </div>
                            <div className='overprofbox opb4'>
                                <div className='profilebox'>
                                    <img alt='' src={Four} className='profileimg'></img>
                                </div>
                                <div className='textbox'>
                                    <h2 className='endosz'>Anthony Burns</h2>
                                    <div class="descrpend">Mobile Phones</div>
                                </div>
                            </div>
                            <div className='overprofbox opb5'>
                                <div className='profilebox'>
                                    <img alt='' src={Five} className='profileimg'></img>
                                </div>
                                <div className='textbox'>
                                    <h2 className='endosz'>Priya Vance</h2>
                                    <div class="descrpend">Books</div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductEndorsers
