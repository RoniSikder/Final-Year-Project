import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  axios  from 'axios'

const SignUp_otp = ({ signup_data,identify }) => {
    const navi = useNavigate()
    let [hold, sethold] = useState({
        email: signup_data.email,
        pass: signup_data.pass,
        namea: signup_data.namea,
        contact: signup_data.contact,
        adde: signup_data.adde,
        otp: ""
    })
    let containt = (e) => {
        e.preventDefault();
        const { email ,pass ,namea ,contact ,adde ,otp } = hold;
        axios.post('http://localhost:5700/register/otp_validation', hold)
            .then(res => {
                let username = res.data.username;
                let holder = res.data.code;
                identify(true);
                navi(`../vender/${holder}`);
            })
            .catch(err => { alert(err) })
        console.log(hold);
    }
    let control = (e) => {
        sethold({ ...hold, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="otp">
                <h4>Enter The OTP</h4>
                <input type="text" name="otp" value={hold.otp} onChange={control} />
                <button className="btn btn-success" onClick={containt}>Verify OTP</button>
            </div>
        </>
    )
}

export default SignUp_otp