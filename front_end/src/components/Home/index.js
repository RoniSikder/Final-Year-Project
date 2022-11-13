import React from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router';
import './home.css'
import tab1 from '../images/tab1.jpg';
import card1 from '../images/card1.jpg';
import card2 from '../images/card2.jpg';
import card3 from '../images/card3.jpg';
import tab2 from '../images/tab2.jpg';
import Footer from '../Footer';

const Home = () => {
    const navigation = useNavigate();
    return (
        <div>
            <Navbar />
            <div className='home-background'>
                <div className='text'>
                    Welcome To
                    LOGO
                    Where we care about sharing
                </div>
            </div>
            <div className='tab-cards'style={{display: "flex"}}>
                <div className="card" style={{width: "25rem", cursor: "pointer"}} onClick={()=>navigation("/orderpage")}>
                    <img className="card-img-top" style = {{height: "15rem"}} src={tab1} alt="Card image cap"/>
                        <div className="card-body">
                            <h3>Order Online</h3>
                            <p className = "card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
                <div className="card" style={{width: "25rem", cursor: "pointer"}} onClick={()=>navigation("/blogs")}>
                    <img className="card-img-top" style = {{height: "15rem"}} src={tab2} alt="Card image cap"/>
                        <div className="card-body">
                            <h3>Blogs</h3>
                            <p className = "card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                </div>
            </div>
            <h4 style={{padding: "20px"}}>Top Kitchen Vendors</h4>
            <div className="top-vendors" style={{textAlign: "center"}}>
                <div className='vendor-profile'>
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                    <h4>Name</h4>
                    <h6>Rating..</h6>
                </div>
                <div className='vendor-profile'>
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/>
                    <h4>Name</h4>
                    <h6>Rating..</h6>
                </div>
                <div className='vendor-profile'>
                    <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                    <h4>Name</h4>
                    <h6>Rating..</h6>
                </div>
                <div className='vendor-profile'>
                    <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""/>
                    <h4>Name</h4>
                    <h6>Rating..</h6>
                </div>
            </div>

            <div className='today-special' style={{textAlign: "center"}}>
                <h4>Today's Special</h4>
                <h6>Served Fresh</h6>
                <div className='special-foods'>
                    <div className='special-food'>
                        <img style={{height: "15rem", width: "20rem", borderRadius: "15px"}} src={card1} alt=""/>
                        <h4>Paratha Nan</h4>
                    </div>
                    <div className='special-food'>
                        <img style={{height: "15rem", width: "20rem", borderRadius: "15px"}} src={card2} alt=""/>
                        <h4>Samosa</h4>
                    </div>
                    <div className='special-food'>
                        <img style={{height: "15rem", width: "20rem", borderRadius: "15px"}} src={card3} alt=""/>
                        <h4>Rice Curry</h4>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home;