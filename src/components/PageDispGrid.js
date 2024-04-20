import * as React from 'react';
import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from 'react-material-ui-carousel';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PageTab from './PageTab';
import { DataContext } from '../App';
import ShopFixRating2 from './ShopFixRating2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PageDispGrid({ page }) {

  const { getCartData } = useContext(DataContext)

  const navigate = useNavigate();


  const pageig = [];

  const pagecat = [];

  page.forEach((ig)=> {
    ig.images.forEach((ig2)=> {
      pageig.push(ig2)
    })
  })

  page.forEach((ig3)=> {
    pagecat.push(ig3.category)
  })





  const cartadd = async  (id)=> {

    const userid = localStorage.getItem('userid');

    const prodid = id;

    console.log(userid)


    if(userid != null || prodid === true){

      const url = 'https://e-products-api.onrender.com/apiv1/cart/add-to-cart'
  
  
      await axios.post(url,{
        userID : userid,
        productID : prodid
      },
      {
        headers : {
          'Access-Control-Allow-Origin' : "*"
        }
      }
      )
      .then( response => response)
      .then(data => console.log(data.data.message))
      .catch(error => console.log(error))
    }
    else if(userid === null || prodid === true){

      navigate('/login');

    }
    else{
      navigate('/login');
    }


    // await axios.get('/apiv1/cart/get-cart',
    // {
    //   headers: {
    //     'Content-Type' : 'multipart/form-data',
    //   }
    // },{
    //   withCredentials:true,
    //   credentials: "include"
    // })
    // .then(response => response)
    // .then(data => setCartdata(data.data.data))
    // .catch( err => console.log(err))

    getCartData();


  }

  console.log(pageig);

  console.log(pagecat);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item md={5} xs={12}>
            <div>
                <Carousel sx={{ marginLeft : '16px', marginRight : '16px'}} navButtonsAlwaysVisible={true}>
                  {
                    pageig.map((ig)=> {

                      console.log(ig)

                      return (
                        <div>
                          <img className='prodimg4' src={`https://e-products-api.onrender.com/${ig}`}></img>
                        </div>
                      )
                    })
                  }
                </Carousel>
            </div>
        </Grid>
        <Grid item md={7} xs={12} >
          <div>
            <div className='pagemargname' style={{ marginLeft : '64px'}}>
              <div className='pagename'>
                  {
                    page.map((h)=> {
                      return (
                        <h1 style={{ margin : '0'}}>{h.name}</h1>
                      )
                    })
                  }
              </div>
              <div style={{ marginBottom : '16px'}}>
                <span>
                  {
                    page.map((ele, id)=> {
                      return (
                        <ShopFixRating2 rating={ele.rating}/>
                      )
                    })
                  }
                </span>
              </div>
              <div className='pagecatname'>
                {
                  pagecat.map((cat)=> {
                    return (
                      <p style={{ margin : '0'}}>{cat.name}</p>
                    )
                  })
                }
              </div>
              <div class="pageprice">
                {
                  page.map((pp)=> {
                    return (

                        <p style={{ margin : '0'}}>
                          <span>
                            <bdi>
                              <span>
                                $
                              </span>{pp.price}
                            </bdi>
                          </span>
                        </p>
                    )
                  })
                }
              </div>
              <div className='pagedescript'>
                {
                  page.map((pd)=>{
                    return (
                      <p style={{ margin : '0'}}>{pd.description}</p>
                    )
                  })
                }
              </div>
              <div>
                {
                  page.map((ele, id)=> {

                    return (

                      <button className='pagebutton' onClick={()=> cartadd(ele._id)}>Add to Cart</button>

                    )
                  })
                }
              </div>
              <div className='pagesocial'>
                <div className='pagewish'>
                  <div>
                    <FavoriteBorderOutlinedIcon sx={{ fontSize : '22px', marginRight : '8px'}}/>
                  </div>
                  <div>
                    <p style={{ margin : '0'}}>Add to Wishlist</p>
                  </div>
                </div>
                <div className='pagewish2'>
                  <div>
                    <ShareOutlinedIcon sx={{ fontSize : '22px', marginRight : '8px'}}/>
                  </div>
                  <div>
                    <p style={{ margin : '0'}}>Share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className='mainbox'>
            <PageTab page={page} pagecat={pagecat}/>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
