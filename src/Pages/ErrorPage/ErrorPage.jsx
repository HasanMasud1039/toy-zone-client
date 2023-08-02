// import React from 'react';
import { Link } from 'react-router-dom';
import errorPhoto from '../../../public/cat.png'
import { FaArrowLeft } from 'react-icons/fa';
const ErrorPage = () => {
    return (
        <div className='h-[90%]'>
            <img className=' relative ' src={errorPhoto}/>
            <p className='absolute text-4xl font-bold text-white top-5 right-[41%] text-center'>Page Not Found</p>
            <Link to='/'><button className="btn btn-error absolute  right-[10%] top-5 btn-xs sm:btn-sm md:btn-md lg:btn-lg"><FaArrowLeft></FaArrowLeft>  Back to Home</button></Link>
            
        </div>
    );
};

export default ErrorPage;