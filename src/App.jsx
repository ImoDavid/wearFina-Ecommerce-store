import React from 'react';
import { useEffect } from "react";
import {Route,Routes,Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from './features/products/productSlice';
import { calculateTotals } from './features/cart/cartSlice';
import Home from "./pages/homepage";
import ProductList from "./pages/productList";
import SingleProduct from "./pages/singleProduct";
import Login from "./pages/login";
import Register from "./pages/register";
import Cart from "./pages/cart";
import Error from './pages/error';
import './App.css';




const App = () => {
  const {cartItems}= useSelector((state)=> state.cart);

  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  },[cartItems]);


  useEffect(() => {
       dispatch(getProducts());
   });

  return(
  <React.Fragment>
      <Routes>
      
      {/* <Route path='/movies/:id'  element={<GetId/>}/>  */}
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/:category' element={<ProductList/>}/>
      <Route path='/product/:id' element={<SingleProduct/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path='*' element={<Error/>}/>
      </Routes>
    </React.Fragment>  
)
};
export default App;