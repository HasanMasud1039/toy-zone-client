// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
// import Home from "../Pages/Home/Home/Home";
// import Banner from "../Pages/Home/Banner/Banner";
// import Banner from "../Pages/Home/Banner/Banner";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
{/* <Banner></Banner> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;