// import React from 'react';

import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Reviews from "../../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Outlet></Outlet>

            <Banner></Banner>
            <div>
                <div className="carousel rounded-box my-6 w-full h-[200px] flex justify-evenly">
                    <div className="carousel-item">
                        <img className="w-48 rounded mx-2 " src="https://i.ibb.co/R0w0bsw/117.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-48 rounded mx-2 " src="https://i.ibb.co/qWMF1kb/111.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-48 rounded mx-2 " src="https://i.ibb.co/n8Xnr2m/113.jpg" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-48 rounded mx-2 " src="https://i.ibb.co/mNDYQRW/118.webp" alt="Burger" />
                    </div>
                    <div className="carousel-item">
                        <img className="w-48 rounded mx-2 " src="https://i.ibb.co/7KhMMMM/112.jpg" alt="Burger" />
                    </div>

                </div>
            </div>


        <Reviews></Reviews>
        </div>
    );
};

export default Home;