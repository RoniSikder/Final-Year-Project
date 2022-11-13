import { useState } from 'react';
import Blogs from './components/Blogs';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import OrderPage_Landing from './components/OrderPage_Landing';
import Shop_Details from './components/Shop_Details';
import Authentication from "./components/Authentication"
import {LogIn} from "./components/Authentication/VenderAuth/LogIn"
import {SignUp} from "./components/Authentication/VenderAuth/SignUp"

function App() {
  let [temp,setTemp]=useState(null);
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <Blogs/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Authentication/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/orderpage' element={<OrderPage_Landing setTemp={setTemp} />} />
        <Route path='/shop_details' element={<Shop_Details temp={temp} />} />
        <Route path='/vender_login' element={<LogIn/>}/>
        <Route path='/vender_signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
