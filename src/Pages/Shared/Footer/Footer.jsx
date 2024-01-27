// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/tz.jpg'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (

        <footer>
            <div className="footer p-10 md:flex justify-between gap-2 space-y-6 bg-[#04675B]">
                <div className=' text-center md:w-[30%] space-y-2'>
                    <img src={logo} className="mx-auto w-24 rounded-xl" alt="" />
                    <div className='px-4'>
                        <p className=' mb-4 font-serif font-bold text-2xl text-amber-500'>Toy Zone</p>
                        <div className='text-zinc-200 font-semibold'>
                            <p>We provide the best toys!</p>
                            <p>We are thrilled to present the ultimate toy car experience that will rev up your child s playtime to new heights!</p>
                        </div>
                    </div>
                </div>

                <div className='text-white px-6'>
                    <span className="footer-title">Contact</span>

                    <div className='space-y-2 '>
                        <p>516, Cantonment Super Market </p> <p> Baluchara, Baizid, Chattogram</p>
                        <p>Bangladesh</p>
                        <div className='flex items-center gap-3'>
                            <FaPhone className='text-orange-600'></FaPhone>018498392989
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaEnvelope className='text-orange-600'></FaEnvelope>response@toyzone.com
                        </div>
                    </div>
                    <div className="grid grid-flow-col mt-4 gap-5">
                        <Link to='https://www.facebook.com'><FaFacebook className='text-blue-500 h-8 w-8'></FaFacebook></Link>
                        <Link to='https://www.youtube.com'><FaYoutube className='text-red-500 h-8 w-8'></FaYoutube></Link>
                        <Link to='https://www.twitter.com'><FaTwitter className='text-sky-500 h-8 w-8'></FaTwitter></Link>
                        <Link to='https://www.instagram.com'><FaInstagram className='text-red-500  w-8 h-8 '></FaInstagram></Link>
                        <Link to='https://www.linkedin.com'><FaLinkedin className='text-violet-500  w-8 h-8 '></FaLinkedin></Link>
                    </div>
                </div>
                <div className='text-white pe-8 md:w-[35%]'>
                    <span className="footer-title ps-8">Feedback</span>
                    <div className='mx-8 space-y-2 w-full'>
                        <div className="flex-row form-control">
                            <label className="label w-[90px]">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control flex-row">
                            <label className="label w-[90px]">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered w-full" />

                        </div>
                        <div className="form-control flex-row">
                            <label className="label w-[90px]">
                                <span className="label-text text-white">Feedback</span>
                            </label>
                            <input type="text" placeholder="Feedback" name="feedback" className="input input-bordered w-full h-[60px]" />

                        </div>
                        <button className='activeBtn btn btn-warning bg-amber-600 text-white mx-auto flex justify-center px-4 mt-4'>Send</button>
                    </div>

                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-400 text-base-content">
                <div>
                    <p>Copyright © 2023 - All rights reserved by Toy Zone</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;