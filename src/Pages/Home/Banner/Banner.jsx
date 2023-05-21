// import React from 'react';

import TabToy from "../../Shared/Navbar/TabToy";
// import ShowCard from "../../ShowCard/ShowCardToy";
import photo1 from '../../../assets/b1.png'
import photo2 from '../../../assets/b2.jpg'
import photo3 from '../../../assets/b3.jpg'
import photo4 from '../../../assets/b4.jpg'
import photo5 from '../../../assets/b5.jpg'
const Banner = () => {

  const description = <div className="px-8 pt-12 absolute rounded-xl w-[40%] items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
    <h2 className="text-5xl font-bold text-yellow-100 my-6">TOY ZONE</h2>
    <h5 className="text-2xl font-bold text-yellow-500">Introducing the Perfect Toy Car: Ignite Your Child s Imagination!</h5>

    <p className="text-lg text-slate-200 pt-8">We are thrilled to present the ultimate toy car experience that will rev up your child s playtime to new heights! Our toy cars are designed to ignite imagination, inspire endless adventures, and provide hours of exhilarating fun.</p>
  </div>

  return (
    <div className="carousel w-full relative">
      <div id="slide1" className="carousel-item h-[30%]  relative w-full">
        <img src={photo1} className="w-full h-[500px] " />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle btn-warning">❮</a>
          <a href="#slide2" className="btn btn-circle btn-warning ms-2">❯</a>
        </div>
        {description}
      </div>
      <div id="slide2" className="carousel-item  h-[30%]  relative w-full">
        <img src={photo2} className="w-full h-[500px]" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle  btn-warning ms-2">❮</a>
          <a href="#slide3" className="btn btn-circle  btn-warning ms-2">❯</a>
        </div>
        {description}
      </div>
      <div id="slide3" className="carousel-item h-[30%]  relative w-full">
        <img src={photo3} className="w-full h-[500px]" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle  btn-warning ms-2">❮</a>
          <a href="#slide4" className="btn btn-circle  btn-warning ms-2">❯</a>
        </div>
        {description}
      </div>
      <div id="slide4" className="carousel-item h-[30%] relative w-full">
        <img src={photo4} className="w-full h-[500px]" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle  btn-warning ms-2">❮</a>
          <a href="#slide5" className="btn btn-circle  btn-warning ms-2">❯</a>
        </div>
        {description}
      </div>
      <div id="slide5" className="carousel-item relative   w-full">
        <img src={photo5} className="w-full h-[500px]" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle  btn-warning ms-2">❮</a>
          <a href="#slide1" className="btn btn-circle  btn-warning ms-2">❯</a>
        </div>
        {description}
      </div>

    </div>
    // {/* <div  className="carousel rounded-box  w-full  h-44 border-4 ">
    //     <div className="carousel-item  p-4 border-4  w-40 h-40">
    //         <img src="https://i.ibb.co/VLsp60L/01ebfef79eeb756d2.jpg" />
    //     </div>
    //     <div className="carousel-item p-4 border-4 w-40 h-40">
    //         <img src="https://i.ibb.co/9Z5mw0c/602-1477-scaled.jpg" />
    //     </div>
    //     <div className="carousel-item p-4 border-4 w-40 h-40">
    //         <img src="https://i.ibb.co/vDhHr6N/images-2.jpg" />
    //     </div>
    //     <div className="carousel-item  p-4 border-4 w-40 h-40">
    //         <img src="https://i.ibb.co/QYtKddk/GUEST-26037c93-48fd-423f-80c7-11b193427146.jpg" />
    //     </div>
    //     <div className="carousel-item p-4 border-4 w  w-40 h-40">
    //         <img src="https://i.ibb.co/wpXZfkL/51v8-qn-D32-L.jpg" />
    //     </div>
    //     <div className="carousel-item p-4 border-4 w-40 h-40">
    //         <img src="https://i.ibb.co/8jc56jR/51ye5-E5o-ZDL-SL1000.jpg" />
    //     </div>
    //     <div className="carousel-item w-40  p-4 border-4 h-40">
    //         <img src="https://i.ibb.co/93VfCjk/1.jpg" />
    //     </div>
    // </div> */}


    // </div>
  );
};

export default Banner;