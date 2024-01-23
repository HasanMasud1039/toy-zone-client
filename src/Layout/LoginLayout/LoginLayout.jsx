// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import Banner from "../../Pages/Home/Banner/Banner";

const LoginLayout = () => {
    const location = useLocation();
    const noNavbar = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div >
             {noNavbar || <Navbar></Navbar>}
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            {noNavbar || <Footer></Footer>}
        </div>
    );
};

export default LoginLayout;