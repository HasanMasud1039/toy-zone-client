import React from 'react';
import tb1 from '../../../assets/tb/tb1.png'
import tb2 from '../../../assets/tb/tb2.png'
import tb3 from '../../../assets/tb/tb3.png'
import tb4 from '../../../assets/tb/tb4.png'
import tb5 from '../../../assets/tb/tb5.png'
import tb6 from '../../../assets/tb/tb6.png'
import tbb from '../../../assets/tb/tbb.jpg'
import { FaHandPointRight, FaHandPointer } from 'react-icons/fa';
const ToyBox = () => {
    return (
        <div className=' py-6 px-2 md:h-[750px]'>
            <h1 className="text-center md:text-3xl text-xl mt-8 w-4/12 mx-auto font-bold text-orange-600 uppercase border-y-4 border-fuchsia-700 py-4">Toy Box Collection</h1>

            <div className='md:flex py-6'>
                <div className='md:w-[45%]  border-[16px] border-x-[#0013B4] border-y-[#FA0404]'>
                    <img src={tbb} className='w-full saturate-150 active' alt="" />
                </div>
                <div className='md:w-[52%] relative md:h-[540px] h-[500px] flex-wrap rounded-r-[110px] mt-6 md:mt-0'>
                    <p className='bg-[#0013B4]  md:h-40 h-20 absolute md:bottom-0 bottom-40 md:w-[105%] w-full md:rounded-br-[200px]' />
                    <p className='bg-[#0013B4]  md:h-40 h-20 absolute md:bottom-40 bottom-60 md:w-[105%] w-full md:rounded-tr-[200px]' />
                    <img className='md:w-80 md:h-80 w-56 h-56 md:left-10 absolute' src={tb2} alt="" />
                    <img className='md:w-80 md:h-64 w-56 h-56 absolute top-0  right-0' src={tb3} alt="" />
                    <img className='md:w-80 md:h-80 w-56 h-56 absolute right-0 bottom-0' src={tb4} alt="" />
                    {/* <img className='w-64 t-64' src={tb5} alt="" /> */}
                    <img className='md:w-80 md:h-80 w-56 h-56 absolute left-0 bottom-0' src={tb6} alt="" />
                    <div className='absolute bottom-[-50px] right-10 flex gap-4'>
                        <FaHandPointRight className='text-4xl text-red-600' />
                        <p className='px-4 py-2 rounded-lg shadow-2xl bg-teal-800 hover:bg-amber-600 text-white font-bold uppercase '> Customize Your Toy Box</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyBox;