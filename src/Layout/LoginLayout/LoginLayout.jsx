// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import Banner from "../../Pages/Home/Banner/Banner";

const LoginLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;