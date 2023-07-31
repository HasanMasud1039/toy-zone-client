// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

import CategoryToy from "../Pages/Home/CategoryToy/CategoryToy";
import ShowCardToy from "../Pages/ShowCard/ShowCardToy";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <CategoryToy></CategoryToy>
            {/* <ShowCardToy></ShowCardToy> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;