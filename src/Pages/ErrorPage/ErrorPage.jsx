// import React from 'react';
import { Link } from 'react-router-dom';
import errorPhoto from '/cat.png'
import { FaArrowLeft } from 'react-icons/fa';
import useTitle from '../../Hook/Hook';
// import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
    useTitle("Error");
    return (
        <div className='h-[90%] flex justify-center '>
                        {/* <Helmet>
                <title>Toy Zone || Error</title>
            </Helmet> */}
            <img className=' relative ' src={errorPhoto}/>
            <p className='absolute md:text-4xl font-bold text-white top-5 text-center'>Page Not Found</p>
            <div className='absolute flex justify-center  top-20 '> 
            <Link to='/'><button className="btn btn-error  btn-xs sm:btn-sm md:btn-md lg:btn-lg"><FaArrowLeft></FaArrowLeft>  Back to Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;