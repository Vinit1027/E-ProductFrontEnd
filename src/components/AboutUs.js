import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Copyright from './Copyright';
import Footer from './Footer';
import Aboutus from './images/Aboutus.jpg';
import NewsLetter from './NewsLetter';

const AboutUs = () => {
  return (
    <section>
      <div className='borbot'>
        <div className='shopmarg'>
          <div className='mainbox2'>
            <a className='navhead' href=''>Home</a>
            <span className='arrdis'><KeyboardArrowRightIcon className='arrdir'/></span>
            <a className='navhead' href=''>About Us</a>
          </div>
        </div>
      </div>
      <div className='mainbox'>
        <h6 className='aboutname'>About Us</h6>
      </div>
      <div style={{ position: 'relative'}}>
        <img className='aboutimg' src={Aboutus}/>
      </div>
      <div className='aboutmarg'>
        <div>
          <div className='aboutpad'>
            <div className='aboutheadpad'>
              <h2>Welcome to E - Products</h2>
              <p>“Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model search for eolved over sometimes by accident, sometimes on purpose ”</p>
            </div>
            <div className='aboutmidpad'>
              <h2>What we really do?</h2>
              <p>Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt urna. 
                Integer tincidunt nec nisl vitae ullamcorper. 
                Proin sed ultrices erat. Praesent varius ultrices massa at faucibus. 
                Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. 
                Pellentesque vitae eros eget enim mollis placerat. 
                Aliquam non tincidunt urna. 
                Integer tincidunt nec nisl vitae ullamcorper. 
                Proin sed ultrices erat. 
                Praesent varius ultrices massa at faucibus. 
                Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. 
                Pellentesque vitae eros eget enim mollis placerat.</p>
            </div>
            <div className='aboutendpad'>
              <div className='aboutflex'>
                <div className='aboutvision'>
                  <h2>Our Vision</h2>
                  <p>
                    Pellentesque sodales augue eget ultricies ultricies. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Curabitur sagittis ultrices condimentum.
                  </p>
                </div>
                <div className='aboutvision'>
                  <h2>Our Vision</h2>
                  <p>
                    Pellentesque sodales augue eget ultricies ultricies. 
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                    Curabitur sagittis ultrices condimentum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter/>
      <Footer/>
      <Copyright/>
    </section>
  )
}

export default AboutUs