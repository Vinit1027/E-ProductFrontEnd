import * as React from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";

const pages = ['Home', 'Shop', 'Blog', 'About Us', 'Contact Us'];
const settings = ['Dashboard', 'Wishlist', 'Logout'];

function Navbar({cartData}) {

  const [auth, setAuth] = useState({ user : localStorage.getItem("userid")});

  const navigate = useNavigate();


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (index) => {

    console.log(index)

    if( index === 0){
      navigate('home');
    }

    if( index === 1){
      navigate('shop');
    }

    if(index === 2){
      navigate('blog');
    }

    if(index === 3){
      navigate('aboutus');
    }

    if(index === 4){
      navigate('contactus');
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (ele, id) => {

    if( id === 0){
      navigate('dashboard')
    }

    if(id === 1){
      navigate('wishlist')
    }

    if(id === 2){
      Cookies.remove('User');
      localStorage.removeItem("userid");
      navigate('/');
      window.location.reload(true);
    }
    setAnchorElUser(null);
  };



  const CartSwitch = ()=> {
    navigate('cart')
  }

  return (
    <AppBar className='mainnav' position="static" sx={{ background: 'white', color: 'black', boxShadow : 'none', borderBottom : '1px solid #eae8e4!important'}}>
      <Container maxWidth="xl" sx={{ pl : '60px!important', pr : '60px!important'}}>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor : 'pointer'
            }}
            onClick={()=> navigate('/')}
          >
            E-Products
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {
                pages.map((page, index)=> {

                  return (
                    <MenuItem key={page} onClick={()=> handleCloseNavMenu(index)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  )
                })
              }
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            E-Products
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(index)}
                sx={{ pt : '32px', pb : '32px', ml: '24px', mr : '24px', color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {
            !auth.user

            ?

            <div>
              <button type='button' style={{ cursor : 'pointer' , textDecoration : 'none', backgroundColor : 'transparent', border : '0',color : '#161619', fontSize : '17px'}} onClick={()=> navigate('login')}>Log-in</button>
            </div>

            :

            <Box sx={{ flexGrow: 0 , display : 'flex', justifyContent : 'space-between', alignItems :'center'}}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, id) => (
                  <MenuItem key={setting} onClick={()=>handleCloseUserMenu(setting,id)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>


          }
          <div style={{ display : 'flex'}}>
            <ShoppingCartOutlinedIcon sx={{ paddingLeft : '8px', cursor : 'pointer'}} onClick={CartSwitch}/>
            <p style={{ padding : '0', margin : '0'}}>{'[' + cartData.length + ']'}</p>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;