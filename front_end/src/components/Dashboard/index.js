import React, { useState } from 'react'
import axios from 'axios';
import { useOutlet, useNavigate, useLocation, useParams } from 'react-router-dom';
import '../Dashboard/dashboard.css'
import image from '../images/pexels-alexander-mils-2103949.jpg'

function Dashboard() {
    const { id } = useParams();
    let loca = useLocation()
    // console.log(loca.state.username)
    // console.log(id);
    const navi = useNavigate()
    let [hold, sethold] = useState({
        food_name: "",
        food_price: "",
        food_des: ""
    })
    let update = e => {
        sethold({ ...hold , [e.target.name] : e.target.value });
    }
    let url = `http://localhost:5700/addvenderManu/${id}`
    let display = (e) => {
        e.preventDefault();
        const { food_name, food_price, food_des } = hold;
        axios.post( url , hold )
            .then(res => {
                console.log(res.data.message)
            })
            .catch(err => { alert(err) })
        }
        return (
            <div>
                <input type="checkbox" id="check" />
                <label for="check">
                    <i className="fas fa-bars" id="btn"></i>
                    <i className="fas fa-times" id="cancel"></i>
                </label>
                <div className="sidebar">
                    <header>Admin</header>
                    <ul>
                        <li><a href="#"><i className="fas fa-qrcode"></i>Dashboard</a></li>
                        <li><a href="#"><i className="fas fa-link"></i>Add Dishes</a></li>
                        <li><a href="#"><i className="fas fa-stream"></i>Log Out</a></li>
                    </ul>
                </div>
                <section className="body" style={{ backgroundImage: `url(${image})` }}>
                    <h1>Food Admin</h1>
                    <div className="transparent">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Food Name</label>
                                <input type="text" class="form-control" name='food_name' value={hold.food_name} onChange={update} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Price</label>
                                <input type="text" class="form-control" name='food_price' value={hold.food_price} onChange={update} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Description</label>
                                <textarea type="text" class="form-control" name='food_des' value={hold.food_des} onChange={update} id="exampleInputPassword1" />
                            </div>
                            <button type="submit" onClick={display} class="btn btn-primary">Add Item</button>
                        </form>
                    </div>
                </section>
            </div>
        )
    }

    export default Dashboard;