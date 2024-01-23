// import React from 'react';

import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Reviews from "../../Reviews/Reviews";
import CategoryToy from "../CategoryToy/CategoryToy";
import Gallery from "../Gallery/Gallery";
import './Home.css'
import { Helmet } from "react-helmet";
import Featured from "../../Featured/Featured";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Toy Zone</title>
            </Helmet>
            <Banner></Banner>
            <Outlet></Outlet>
            <Featured />
            <div className="md:flex gap-2 p-4 justify-evenly bg-base-200">
                <div className="md:w-[50%]">
                    <img src="https://i.ibb.co/J2pd6d1/1br9qfyl8776ubo16eo.jpg" className="shadow-2xl photo" />

                </div>
                <div className="md:w-[50%] bg-blue-900 m-4 p-8">
                    <h1 className="md:p-4 text-center md:text-3xl text-xl border-y-4 border-fuchsia-700 text-orange-600 font-serif font-bold uppercase">Our goal is to help kids!</h1>
                    <div className="text-center text-amber-300 font-semibold md:text-lg space-y-2 px-4 mt-4">
                        <p >We are thrilled to present the ultimate toy car experience that will rev up your child s playtime to new heights! </p><p> Our toy cars are designed to ignite imagination, inspire endless adventures, and provide hours of exhilarating fun.</p><p>Toys contribute to the physical development of children, promoting gross and fine motor skills as they engage in activities such as building, drawing, or playing sports</p><p>Imaginative play with toys allows children to explore their creativity and develop social skills as they interact with peers, siblings, or parents during playtime.</p><p>Overall, toys are essential for fostering a positive and enjoyable childhood, creating lasting memories and building a foundation for lifelong learning and social interactions.</p>
                    </div>
                </div>
                {/* <div className="gap-8 mx-auto md:flex">
                    <div className="card-body md:w-[50%] mx-auto">
                    </div>
                    <img src="https://i.ibb.co/J2pd6d1/1br9qfyl8776ubo16eo.jpg" className="w-[90%] max-h-[50%] rounded-lg shadow-2xl photo" />
                    <div className="card-body h-[30%] bg-sky-300 md:w-[50%] w-[80%]">


                    </div>
                </div> */}
            </div>

            {/* <div className="flex">
                <div className="carousel rounded-box my-6 w-full  ">
                    

                </div>
            </div> */}

            <CategoryToy></CategoryToy>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;