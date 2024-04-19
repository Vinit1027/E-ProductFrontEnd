import React from 'react';
import FooterGridBlock from './FooterGridBlock';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <>
        <footer className='mainbox footpad'>
            <FooterGridBlock/>
        </footer>
    </>
  )
}

export default Footer