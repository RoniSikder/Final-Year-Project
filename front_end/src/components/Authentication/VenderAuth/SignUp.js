import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { LogIn } from './Log In'
import axios from 'axios'
import "../All_Style.css"

export const SignUp = ({ setAuthen,setDis }) => {
  const navi = useNavigate()
  let [hold, sethold] = useState({
    email: "",
    pass: "",
    namea: "",
    contact: "",
    adde: ""
  })
  let update = e => {
    sethold({ ...hold, [e.target.name]: e.target.value });
  }
  let url = "http://localhost:5700/register"
  let display = (e) => {
    e.preventDefault();
    const { email, pass, namea, contact, adde } = hold;
    axios.post(url, hold)
      .then((res) => {
        setAuthen({ email, pass, namea, contact, adde });
        navi("/signup_otp");
      })
      .catch(err => { alert(err) })
  }
  return (
    <form style={{ padding: "20px", borderRadius: "10px" }}>
      <div className="row mb-3"><span style={{ fontSize: "50px" }}>Sign Up Page</span></div>
      <div className="row mb-3">
        <div>Enter Your Email</div>
        <div>
          <input type="email" className="form-control" name='email' value={hold.email} onChange={update} required />
        </div>
      </div>
      <div className="row mb-3">
        <div>Create An Password</div>
        <div>
          <input type="password" className="form-control" id="inputPassword3" name='pass' value={hold.pass} onChange={update} required />
        </div>
      </div>
      <div className="row mb-3">
        <div>Enter Your Name</div>
        <div>
          <input type="email" className="form-control" name='namea' value={hold.namea} onChange={update} required />
        </div>
      </div>
      <div className="row mb-3">
        <div>Enter Service Contact Number</div>
        <div>
          <input type="number" className="form-control" name='contact' value={hold.contact} onChange={update} required />
        </div>
      </div>
      <div className="row mb-3">
        <div>Enter Full Address</div>
        <div>
          <input type="text" className="form-control" name='adde' value={hold.adde} onChange={update} required />
        </div>
      </div>
      <button type="submit" className="btn btn-success" onClick={display}>Register</button>
      <div><span>or</span></div>
      <span>Already Have an Account </span>
      <button type="submit" className="btn btn-success" onClick={() => { setDis(1) }}>Sign In</button>
    </form>
  )
}
