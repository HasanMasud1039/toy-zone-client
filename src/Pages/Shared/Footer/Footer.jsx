// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/tz.jpg'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer>
            <div className="footer text-lg p-10 bg-neutral text-neutral-content">
                <div className='text-center  space-y-2'>
                    <img src={logo} className="mx-auto w-24 rounded-full" alt="" />
                    <div>
                        <p className='text-2xl mb-4 font-serif font-bold text-yellow-400'>Toy Zone</p>
                        <p>We provide the best toys!</p>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col mt-4 gap-5">
                        <Link to='https://www.facebook.com'><FaFacebook className='text-blue-600 h-8 w-8'></FaFacebook></Link>
                        <Link to='https://www.youtube.com'><FaYoutube className='text-red-600 h-8 w-8'></FaYoutube></Link>
                        <Link to='https://www.twitter.com'><FaTwitter className='text-blue-400 h-8 w-8'></FaTwitter></Link>
                        <Link to='https://www.instagram.com'><FaInstagram className='text-red-400  w-8 h-8 '></FaInstagram></Link>

                    </div>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <p>516, Cantonment Super Market </p> <p> Baluchara, Baizid </p> <p> Chattogram</p>
                    <p>Bangladesh</p>
                    <div className='flex gap-2'>
                        <FaPhone></FaPhone>018498392989
                    </div>
                    <div className='flex gap-2'>
                        <FaPhone></FaPhone>018498392965
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All rights reserved by Hasan Masud</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;