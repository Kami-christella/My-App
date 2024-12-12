import React from 'react';
import './Footer.css';
import facebook from './image/FF.png';
import twitter from './image/Twitter.jpg';
import whatsapp from './image/Whatsapplog.png';

const Footer = () => {
    return (
        <footer>
            <p>© 2024 RWANDA BASKETBALL FEDERATION. All rights reserved.</p>
            <div className="social-media">
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://twitter.com/">
                    <img src={twitter} alt="Twitter" />
                </a>
                <a href="https://wa.me/yourPhoneNumberHere">
                    <img src={whatsapp} alt="WhatsApp" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
