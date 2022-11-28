import { useState } from 'react';
import Blogs from './components/Blogs';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import OrderPage_Landing from './components/OrderPage_Landing';
import Shop_Details from './components/Shop_Details';
import Authentication from "./components/Authentication"
import {LogIn} from "./components/Authentication/VenderAuth/LogIn"
import {SignUp} from "./components/Authentication/VenderAuth/SignUp"
import Dashboard from './components/Dashboard'

function App() {
  let [temp,setTemp]=useState(null);
  let [author,setAuthor]=useState(null);
  function decide(){
    author === null ? <LogIn/> : <Dashboard author={author} setAuthor={setAuthor}/>
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/orderpage' element={<OrderPage_Landing setTemp={setTemp} />} />
        <Route path='/shop_details' element={<Shop_Details temp={temp} />} />
        <Route path='/vender_login' element={<LogIn/>}/>
        <Route path='/vender_signup' element={<SignUp/>}/>
        <Route path='/vender/:id' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
