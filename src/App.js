import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './Home';
import Shop from './components/Shop';
import IndiPage from './components/IndiPage';
import Blog from './components/Blog';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import WhishList from './components/WhishList';

export const DataContext = createContext();

function App() {


  const [data, setData] = useState([]);

  const [cartData, setCartdata] = useState([]);

  const [countcart, setCountcart] = useState(false);

  const [message, setMessage] = useState(); 

  const [page, setPage] = useState([]);

  const [page2, setPage2] = useState([]);

  useEffect(()=>{

    setTimeout(() => {
      setCountcart(false)
    },1000);

  },[countcart])


  const getProductData = async ()=> {

     await axios.get('https://e-products-api.onrender.com/apiv1/products/get-products',
    {
      headers: {
        'Content-Type' : 'multipart/form-data',
      }
    },{
      withCredentials:true,
      credentials: "include"
    })
    .then(response => response)
    .then(data => setData(data.data.data))
    .catch( err => console.log(err))
  }






    const getCartData = async ()=> {

     await axios.get('https://e-products-api.onrender.com/apiv1/cart/get-cart',
    {
      headers: {
        'Content-Type' : 'multipart/form-data',
      }
    },{
      withCredentials:true,
      credentials: "include"
    })
    .then(response => response)
    .then(data => setCartdata(data.data.data))
    .catch( err => console.log(err))
  }

  
  
  useEffect(()=> {
    getProductData();
  }, [])
  
  
  useEffect(()=>{
    getCartData();
  },[])

  
  useEffect(()=>{
    const items = JSON.parse(localStorage.getItem('page'));
    if (items) {
    setPage(items);
    }
  },[page2])


  const HandleChangePage = (ele)=> {

    localStorage.setItem('page', JSON.stringify([ele]))

    setPage2([ele]);

  }


  const [wishdata, setWishdata] = useState([]); 

  const [wishdata2, setWishdata2] = useState([]); 

  const [FilteredData, setFilteredData] = useState();

  const [wishFilteredData, setWishFilteredData] = useState();

  const [statusData, setStatusData] = useState('');

  const [statusData2, setStatusData2] = useState('');

  const [iswishdata, setIswishdata]  = useState(false);

    const CategoryShopData = (catdata)=> {

      let FinalData
      
      if(catdata === 'Mobile Phones' || catdata === 'Footwear' || catdata === 'Books' || catdata === 'Outerwear'){
        FinalData = data.filter((ele,id)=> {
          if(ele.category.name === catdata){
            return ele
          }
        });

        setFilteredData(FinalData);
        setStatusData(catdata);

      }
      else if(catdata === 'All'){
        setFilteredData(data);
        setStatusData(catdata);
      }

    }


    const CategoryWishData = (catdata)=> {

      let FinalData

      if(catdata === 'Mobile Phones' || catdata === 'Footwear' || catdata === 'Books' || catdata === 'Outerwear'){
        FinalData = wishdata.filter((ele,id)=> {
          if(ele.category.name === catdata){
            return ele
          }
        });

        setWishFilteredData(FinalData);
        setStatusData2(catdata);

      }
      else if(catdata === 'All'){
        setWishFilteredData(wishdata);
        setStatusData2(catdata);
      }
    }


    const SortData = (sd)=> {

      let FinalData2

      if(( FilteredData !== undefined && statusData === 'All' && FilteredData.length > 4 ) || data.length === 16){
        FinalData2 = data.filter((ele,id)=> {
          return id <= sd
        });

        setFilteredData(FinalData2);

      }

      if(( sd === '3' ||  sd === '7' || sd === '11' || sd === '15') && ( statusData === 'Mobile Phones' || statusData === 'Footwear' || statusData === 'Books') || statusData === 'Outerwear'){

        FinalData2 = data.filter((ele,id) => {
          if(ele.category.name === statusData){
            return ele
          }
        });

        setFilteredData(FinalData2);
      }
      

    }


    const SortWishData = (sd)=> {

      let FinalData2

      if(( statusData2 === 'All' || wishdata.length > 4 )){
        FinalData2 = wishdata.filter((ele,id)=> {
          return id <= sd
        });

        setWishFilteredData(FinalData2);

      }

      if(( sd === '3' ||  sd === '7' || sd === '11' || sd === '15') && ( statusData2 === 'Mobile Phones' || statusData2 === 'Footwear' || statusData2 === 'Books') || statusData2 === 'Outerwear'){

        FinalData2 = wishdata.filter((ele,id) => {
          if(ele.category.name === statusData2){
            return ele
          }
        });

        setWishFilteredData(FinalData2);
      }
      

    }


    const GetWishlistData = (ele)=> {

      const userid = localStorage.getItem('userid');

      const prodid = ele._id;


      let wishfilter;
      
      wishdata.forEach((id)=> {
        if(id._id === ele._id){
          wishfilter = id._id;
        }
      })

      if(ele._id !== wishfilter){
        setWishdata2([...wishdata, ele])
        localStorage.setItem('wishdata', JSON.stringify([...wishdata, ele]));
        setIswishdata(true);
      }

    }


  useEffect(()=>{

    setTimeout(() => {
      setIswishdata(false)
    },1000);

  },[iswishdata])



    useEffect(()=> {

      const items = JSON.parse(localStorage.getItem('wishdata'));
      if (items) {
      setWishdata(items);
      }

    }, [wishdata2])







    const [value, setValue] = useState(0);

    const [value2, setValue2] = useState(0);


    const RatingData = ()=> {

      let FinalData3

      if(value === 0 || value === null){
        setFilteredData(undefined)
      }
      else{
        FinalData3 = data.filter((ele,id)=> {
          return ele.rating <= value
        });
      }


      setFilteredData(FinalData3)
    }


    const RatingData2 = ()=> {

      let FinalData3

      if(value2 === 0 || value2 === null){
        setWishFilteredData(undefined)
      }
      else{
        FinalData3 = wishdata.filter((ele,id)=> {
          return ele.rating <= value2
        });
      }


      setWishFilteredData(FinalData3)
    }


    useEffect(()=> {

      RatingData();

    }, [value])

    useEffect(()=> {

      RatingData2();

    }, [value2])


    const PriceData = (val)=> {

      let FinalData4

      FinalData4 = data.filter((ele,id)=> {
        return ele.price >= val[0] && ele.price <=val[1]
      });

      setFilteredData(FinalData4)


    }
    const PriceData2 = (val)=> {

      let FinalData4

      FinalData4 = wishdata.filter((ele,id)=> {
        return ele.price >= val[0] && ele.price <=val[1]
      });

      setWishFilteredData(FinalData4)


    }





  return (
    <div className="App">
      <BrowserRouter>
      <Navbar cartData={cartData}/>
        <Routes>
          <Route path='/' element={<DataContext.Provider value={{getCartData, cartData, setCartdata, CategoryShopData, GetWishlistData, setCountcart, countcart, iswishdata, setIswishdata}}><Home data={data} HandleChangePage={HandleChangePage}/></DataContext.Provider>}/>
          <Route path='home' element={<DataContext.Provider value={{ getCartData, cartData, setCartdata, CategoryShopData, GetWishlistData, setCountcart,countcart, iswishdata, setIswishdata}}><Home data={data} HandleChangePage={HandleChangePage}/></DataContext.Provider>}/>
          <Route path='shop' element={<DataContext.Provider value={{ FilteredData, CategoryShopData, SortData, HandleChangePage, value, setValue, PriceData, GetWishlistData, setCountcart, countcart, iswishdata, setIswishdata }}><Shop setCartdata={setCartdata} Shopdata={data} getCartData={getCartData}/></DataContext.Provider>}/>
          <Route path='indipage' element={<DataContext.Provider value={{getCartData}}><IndiPage page={page}/></DataContext.Provider>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='aboutus' element={<AboutUs/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
          <Route path='cart' element={<DataContext.Provider value={{ setCartdata, getCartData }}><Cart cartData={cartData} /></DataContext.Provider>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='wishlist' element={<DataContext.Provider value={{ getCartData, wishdata, setWishdata2, CategoryWishData, wishFilteredData, setWishFilteredData, SortWishData, value2, setValue2, PriceData2 }}><WhishList/></DataContext.Provider>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
