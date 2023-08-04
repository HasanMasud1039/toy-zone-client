
// import ShowCard from "../../ShowCard/ShowCardToy";
import photo1 from '../../../assets/b1.png'
import photo2 from '../../../assets/b2.jpg'
import photo3 from '../../../assets/b3.jpg'
import photo4 from '../../../assets/b4.jpg'
import photo5 from '../../../assets/b5.jpg'
import { Link } from "react-router-dom";
const Banner = () => {

  const description = <div className="px-8 pt-12 absolute rounded-xl md:w-[40%] items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
    <h2 className="text-5xl font-bold text-yellow-100 my-6">TOY ZONE</h2>
    <h5 className="md:text-2xl text-sm font-bold text-yellow-500">Introducing the Perfect Toy Car: Ignite Your Child s Imagination!</h5>

    <p className="md:text-lg text-sm text-slate-200 pt-8">We are thrilled to present the ultimate toy car experience that will rev up your child s playtime to new heights! Our toy cars are designed to ignite imagination, inspire endless adventures, and provide hours of exhilarating fun.</p>
    <Link to={'/alltoys'}><button className='btn text-white font-bold text-lg bg-yellow-600 mt-8 btn-warning'>ALL TOYS</button></Link>
  </div>

  return (
    <div autoPlay='true' className="carousel w-full relative">
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
   
  );
};

export default Banner;