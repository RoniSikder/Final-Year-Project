import { useState } from 'react';
import Blogs from './components/Blogs';
import Home from './components/Home';
import { Route, Routes, Navigate } from "react-router-dom";
import OrderPage_Landing from './components/OrderPage_Landing';
import Shop_Details from './components/Shop_Details';
import Authentication from "./components/Authentication"
import { LogIn } from "./components/Authentication/VenderAuth/LogIn"
import { SignUp } from "./components/Authentication/VenderAuth/SignUp"
import Dashboard from './components/Dashboard'
import Protect_Route from './components/Authentication/Protect_Route';
import LogIn_otp from './components/Authentication/OTP Validation/LogIn_otp';
import SignUp_otp from './components/Authentication/OTP Validation/SignUp_otp';

function App() {
  let [temp, setTemp] = useState(null);
  let [ident,setIdent]=useState(false);
  let [author, setAuthor] = useState({});
  console.log(author);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authentication setAuthen={setAuthor} />} />
        <Route path='/login_otp' element={<LogIn_otp login_data={author} identify={setIdent}/>}/>
        <Route path='/signup_otp' element={<SignUp_otp signup_data={author} identify={setIdent}/>}/>
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/orderpage' element={<OrderPage_Landing setTemp={setTemp} />} />
        <Route path='/shop_details' element={<Shop_Details temp={temp} />} />
        <Route path='/vender/:id' element={<Protect_Route component={Dashboard} ident={ident}/>} />
      </Routes>
    </div>
  );
}

export default App;
