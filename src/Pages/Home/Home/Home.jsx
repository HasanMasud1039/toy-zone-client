// import React from 'react';

import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Reviews from "../../Reviews/Reviews";
import CategoryToy from "../CategoryToy/CategoryToy";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="md:w-[60%] md:ps-12 pe-4"><img src="https://i.ibb.co/J2pd6d1/1br9qfyl8776ubo16eo.jpg" className="max-w-lg max-h-[50%] rounded-lg shadow-2xl" /></div>
                    <div className="  w-[50%]">
                        <h1 className="md:px-6 text-center text-4xl text-orange-600 font-serif font-bold uppercase">Our goal is to help kids!</h1>
                        <div className="md:p-6 text-center text-amber-800 font-semibold text-lg space-y-4">
                        <p >We are thrilled to present the ultimate toy car experience that will rev up your child s playtime to new heights! </p><p> Our toy cars are designed to ignite imagination, inspire endless adventures, and provide hours of exhilarating fun.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="carousel rounded-box my-6 w-full  ">
                    
                

                </div>
                {/* <div>
                    <div>
                        <h1>We want</h1>
                        <h1>Our kids to learn</h1>
                    </div>
                    <div>
                        p
                    </div>
                </div> */}
            </div>

            <CategoryToy></CategoryToy>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;