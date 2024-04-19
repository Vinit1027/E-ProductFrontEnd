import React, { useContext } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SellIcon from '@mui/icons-material/Sell';
import { DataContext } from '../App';
import { useNavigate } from 'react-router-dom';




const FeaturedCategories = () => {

    const { CategoryShopData } = useContext(DataContext);

    const navigate = useNavigate();

    const SwitchToShop = ()=> {
        navigate('/shop');
    }



    
  return (
    <>
        <section className='mainbox'>
            <div className='containerbox1'>
                <header className='featH1'>
                    <h2>Featured Categories</h2>
                    <button onClick={()=> navigate('/shop')}>All Categories <KeyboardArrowRightIcon/></button>
                </header>
                <div className='topbox2'>
                    <div className='sellbox'>
                        <div className='svgicon'>
                            <PhotoLibraryIcon sx={{ color: '#a200fc!important', fontSize : '3.125rem'}}/>
                        </div>
                        <div className='shpbox'>
                            <h3>Mobile Phones</h3>
                            <button onClick={()=> { CategoryShopData('Mobile Phones'); SwitchToShop();}}>Shop Now</button>
                        </div>
                    </div>
                    <div className='sellbox2'>
                        <div>
                            <SnowshoeingIcon sx={{ color: '#f79400!important', fontSize : '3.125rem'}}/>
                        </div>
                        <div className='shpbox'>
                            <h3>Footwear</h3>
                            <button onClick={()=> { CategoryShopData('Footwear'); SwitchToShop();}}>Shop Now</button>
                        </div>
                    </div>
                    <div className='sellbox2 sellbox4'>
                        <div>
                            <MenuBookIcon sx={{ color: '#ff8e8e!important', fontSize : '3.125rem'}}/>
                        </div>
                        <div className='shpbox'>
                            <h3>Books</h3>
                            <button onClick={()=> { CategoryShopData('Books'); SwitchToShop();}}>Shop Now</button>
                        </div>
                    </div>
                    <div className='sellbox3'>
                        <div>
                            <SellIcon sx={{ color: '#f01000!important', fontSize : '3.125rem'}}/>
                        </div>
                        <div className='shpbox'>
                            <h3>Outerware</h3>
                            <button onClick={()=> { CategoryShopData('Outerwear'); SwitchToShop();}}>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FeaturedCategories