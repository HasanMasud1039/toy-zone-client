// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/tz.jpg'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-cyan-300 rounded py-10 text-black-content">
            <div>
                <img className='w-24 rounded-full' src={logo} alt="" />
                <p className="font-bold">
                    Toy Zone <br />Best Toy for the best baby.
                </p>
                <p>3/4, Hasan Plaza, CDA Aveneue, Nasirabad, Chattogram</p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-12">
                    <Link to='https://www.facebook.com'><FaFacebook className='text-blue-700  w-10 h-10 '></FaFacebook></Link>
                    <Link to='https://www.youtube.com'><FaYoutube className='text-red-700  w-10 h-10 '></FaYoutube></Link>
                    <Link to='https://www.instagram.com'><FaInstagram className='text-red-400  w-10 h-10 '></FaInstagram></Link>
                
                    

                </div>
            </div>
        </footer>
    );
};

export default Footer;