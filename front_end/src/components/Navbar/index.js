import React from "react";
import cart from '../images/shopping-cart.png';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    useEffect(() => {
        var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                nav.classList.add('bg-dark', 'shadow');
            } else {
                nav.classList.remove('bg-dark', 'shadow');
            }
        });
    }, []);
    let navigate=useNavigate();
    function helper(){
        navigate("/auth");
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
            <div className="container">
                <a href="#" className="navbar-brand">LOGO</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse blocker" id="navbarNav">
                    <div className="mx-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Pricing</a>
                        </li>
                        <li>
                            <i onClick={helper} className="bi bi-person-circle profile"></i>
                        </li>
                        <li className="nav-item" style={{ marginLeft: "30px" }}>
                            <img style={{ marginTop: "8px", height: "25px", width: "25px" }} src={cart} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;