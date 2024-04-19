import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import Copyright from './Copyright';

const ContactUs = () => {
  return (
    <>
        <section>
            <div className='borbot'>
                <div className='shopmarg'>
                    <div className='mainbox2'>
                        <a className='navhead' href=''>Home</a>
                        <span className='arrdis'><KeyboardArrowRightIcon className='arrdir'/></span>
                        <a className='navhead' href=''>Contact Us</a>
                    </div>
                </div>
            </div>
            <div className='mainbox'>
                <h6 className='aboutname'>Contact Us</h6>
            </div>
            <div>
                <iframe style={{ height : '500px', width : '100%', border : '0'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835253576489!2d144.95372995111143!3d-37.817327679652266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1581584770980!5m2!1sen!2sin" allowfullscreen=""></iframe>
            </div>
            <div className='aboutmarg'>
                <div>
                    <div className='aboutpad'>
                        <div className='aboutheadpad'>
                            <h2>Contact Information</h2>
                            <p>We will answer any questions you may have about our online sales, rights or partnership service right here.</p>
                        </div>
                        <div className='aboutendpad contactendpad'>
                            <div className='aboutflex contactflex'>
                                <div className='aboutvision'>
                                    <h2>New York Office</h2>
                                    <p>
                                        1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                                    </p>
                                    <div className='contactinfo'>
                                        <a href=''>sale@bookworm.com</a>
                                        <br/>
                                        <a href=''>+1 246-345-0695</a>
                                    </div>
                                </div>
                                <div className='aboutvision'>
                                    <h2>London Office</h2>
                                    <p>
                                        1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                                    </p>
                                    <div className='contactinfo'>
                                        <a href=''>sale@bookworm.com</a>
                                        <br/>
                                        <a href=''>+1 246-345-0695</a>
                                    </div>
                                </div>
                            </div>
                            <div className='contactsocials'>
                                <h2>Social Media</h2>
                                <div className='footicons contacticons'>
                                    <a href=''>
                                        <InstagramIcon sx={{ fontSize : '16px'}}/>
                                    </a>
                                    <a href=''>
                                        <FacebookIcon sx={{ fontSize : '16px'}}/>
                                    </a>
                                    <a href=''>
                                        <YouTubeIcon sx={{ fontSize : '16px'}}/>
                                    </a>
                                    <a href=''>
                                        <TwitterIcon sx={{ fontSize : '16px'}}/>
                                    </a>
                                    <a href=''>
                                        <PinterestIcon sx={{ fontSize : '16px'}}/>
                                    </a>                            
                                </div>
                            </div>
                            <h2 className='contacttouch'>Get In Touch</h2>
                            <div className='contactform'>
                                <form>
                                    <div>
                                        <div className='contactformflex'>
                                            <div className='contactinputbox'>
                                                <label className='contactlabel'>Name</label>
                                                <input type='text' className='contactinp'/>
                                            </div>
                                            <div className='contactinputbox contactmargin'>
                                                <label className='contactlabel'>Email</label>
                                                <input type='text' className='contactinp'/>
                                            </div>
                                        </div>
                                        <div className='contactinputbox2'>
                                            <label>Subject</label>
                                            <input type='text'/>
                                        </div>
                                        <div className='contactinputbox2'>
                                            <label>Subject</label>
                                            <textarea placeholder='What did you like or dislike? What should other shoppers know before buying?'></textarea>
                                        </div>
                                    </div>
                                    <div className='contactbutton'>
                                        <button>Submit Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter/>
            <Footer/>
            <Copyright/>
        </section>
    </>
  )
}

export default ContactUs