import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './image/logo.jpg';
import './Header.css';  
import image2 from'./image/FF.png';
import twitter from'./image/Twitter.jpg';
import whatsapp from './image/Whatsapplog.png';

const Header = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link className="navbar-brand" to="/">
                    <img src={image1} alt="FERWABA Logo" className="logo-image" />
                </Link>
            </div>
            <div className="links">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About Us</Link>
                <Link className="nav-link" to="/events">Events</Link>
                <Link className="nav-link" to="/contact">Contact Us</Link>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/">
                    <img src={image2} alt="" />
                </a>
                <a href="https://twitter.com/">
                    <img src={twitter} alt="" />
                </a>
                <a href="https://wa.me/yourPhoneNumberHere">
                    <img src={whatsapp} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Header;
