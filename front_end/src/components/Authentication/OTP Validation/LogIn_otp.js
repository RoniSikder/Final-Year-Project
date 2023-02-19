import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  axios  from 'axios'

const LogIn_otp = ({login_data,identify}) => {
    const navi = useNavigate()
    let [hold, sethold] = useState({
        email: login_data.email,
        pass: login_data.pass,
        otp: ""
    })
    let containt = (e) => {
        e.preventDefault();
        const { email, pass, otp } = hold;
        axios.post('http://localhost:5700/login/otp_validation', hold)
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

export default LogIn_otp