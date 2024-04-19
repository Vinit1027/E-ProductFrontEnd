import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FooterGridBlock() {

    const navigate = useNavigate();

    const SwitchToShop = ()=> {
        navigate('/shop');
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} sx={{ justifyContent : 'space-between'}}>
        <Grid item md={4} xs={12} sx={{ marginBottom : '48px'}}>
            <div className='topfoot'>
                <div className='foottitle'>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                        E-Products
                    </Typography>
                </div>
                <div>
                    <address class="footaddr">
                        <span class="mb-2 font-weight-normal text-dark">
                            1418 River Drive, Suite 35 Cottonhall, CA <br/> 9622 <br />United States
                        </span>
                    </address>
                </div>
                <div className='footemail'>
                    <a href=''>sale@e-products.com</a>
                    <a href=''>+1 246-345-0695</a>
                </div>
                <div className='footicons'>
                    <button>
                        <InstagramIcon/>
                    </button>
                    <button>
                        <FacebookIcon/>
                    </button>
                    <button>
                        <YouTubeIcon/>
                    </button>
                    <button>
                        <TwitterIcon />
                    </button>
                    <button>
                        <PinterestIcon/>
                    </button>                            
                </div>
            </div>
        </Grid>
        <Grid item md={2} xs={12} sx={{ marginBottom : '48px'}}>
            <div className='footdesc'>
                <h4>Explore</h4>
                <div className='footopt'>
                    <div>
                        <button>About us</button>
                    </div>
                    <div>
                        <button>Sitemap</button>
                    </div>
                    <div>
                        <button>Bookmarks</button>
                    </div>
                    <div>
                        <button>Sign in/Join</button>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item md={2} xs={12} sx={{ marginBottom : '48px'}}>
            <div className='footdesc'>
                <h4>Customer Service</h4>
                <div className='footopt'>
                    <div>
                        <button>Help Center</button>
                    </div>
                    <div>
                        <button>Returns</button>
                    </div>
                    <div>
                        <button>Product Recalls</button>
                    </div>
                    <div>
                        <button>Accessibility</button>
                    </div>
                    <div>
                        <button>Contact Us</button>
                    </div>
                    <div>
                        <button>Store Pickup</button>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item md={2} xs={12} sx={{ marginBottom : '48px'}}>
            <div className='footdesc'>
                <h4>Policy</h4>
                <div className='footopt'>
                    <div>
                        <button>Return Policy</button>
                    </div>
                    <div>
                        <button>Terms Of Use</button>
                    </div>
                    <div>
                        <button>Security</button>
                    </div>
                    <div>
                        <button>Privacy</button>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item md={2} xs={12} sx={{ marginBottom : '48px'}}>
            <div className='footdesc'>
                <h4>Categories</h4>
                <div className='footopt'>
                    <div>
                        <button>Mobile Phones</button>
                    </div>
                    <div>
                        <button>Footwear</button>
                    </div>
                    <div>
                        <button>Books</button>
                    </div>
                    <div>
                        <button>Outerwear</button>
                    </div>
                </div>
            </div>
        </Grid>
      </Grid>
    </Box>
  );
}
