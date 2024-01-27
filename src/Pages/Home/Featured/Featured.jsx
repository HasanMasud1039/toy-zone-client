import featuredImg from '../../../assets/feat/feat3.jpg'
import { Link } from "react-router-dom";
import AOS from 'aos';

const Featured = () => {
    return (
        <div style={{backgroundImage: `url(${featuredImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="featured-item saturate-150 bg-fixed text-white pt-10 my-20">
            <h1 className="text-center md:text-3xl text-xl mt-8 w-4/12 mx-auto font-bold text-orange-600 uppercase border-y-4 border-fuchsia-700 py-4">Featured Product</h1>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 pt-20 pb-12 md:px-32 px-6">
                <div>
                    <img data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" 
                    className="" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p className='text-lg'>Oct 03, 2023</p>
                    <p className='text-lg'>Electric Car for Kids!</p>
                    <p>Toy Zone is proud to present its featured product, the Electric Car for kids, designed to bring excitement and joy to young adventurers. This miniature electric car replicates the real driving experience for children, offering a safe and thrilling ride. Parents can rest assured knowing that safety is a top priority, as the car comes equipped with child-friendly features and a secure design. The Electric Car for kids from Toy Zone is not just a toy; it's an innovative and fun-filled way for children to explore their surroundings and create unforgettable memories.</p>
                    <button className="btn btn-warning hover:bg-amber-600 text-white active border-0 border-b-4 mt-4"><Link to='/'>Order</Link></button>
                    
                </div>
            </div>
        </div>
    );
};

export default Featured;
