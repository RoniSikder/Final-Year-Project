import React, { useState } from 'react'
import {LogIn} from './VenderAuth/LogIn.js'
import {SignUp} from './VenderAuth/SignUp.js'
import "./All_Style.css"
import image0 from '../images/pexels-alexander-mils-2103949.jpg'

const Authentication = ({setAuthen}) => {
  let [dis,setDis]=useState(0)
  return (
    <div className='cont'>
        <div className="login">
          {
            dis===2?<SignUp setDis={setDis} setAuthen={setAuthen}/>:<LogIn setDis={setDis} setAuthen={setAuthen}/>
          }
        </div>
        <div className="blank_space">
          <img src={image0}/>
        </div>
    </div>
  )
}

export default Authentication;