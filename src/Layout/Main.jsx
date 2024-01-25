// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

import CategoryToy from "../Pages/CategoryToy/CategoryToy";

const Main = () => {
    const location = useLocation();
    const noNavbar = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div className="px-0">
            {noNavbar || <Navbar></Navbar>}
            <div className="max-w-screen-2xl mx-auto ">
                <Outlet></Outlet>
            </div>
            {noNavbar || <Footer></Footer>}
        </div>

    );
};

export default Main;