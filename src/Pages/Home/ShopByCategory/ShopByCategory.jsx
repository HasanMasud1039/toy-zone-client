import React from 'react';
import img1 from '../../../assets/cat1.jpg'
import img2 from '../../../assets/cat2.png'
import img3 from '../../../assets/cat6.webp'
import img4 from '../../../assets/cat4.jpg'
import img5 from '../../../assets/cat3.jpg'
import img6 from '../../../assets/cat5.jpg'
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
    const categories = [
        {
            image: img1,
            title: 'Sports Car',
            color: 'bg-orange-300',
            category:'Racing-Cars'
        },
        {
            image: img2,
            title: 'Truck',
            color: 'bg-emerald-300',
            category:'Truck'
        },
        {
            image: img3,
            title: 'Regular Car',
            color: 'bg-[#CCD1D1]',
            category:'Regular-Cars'
        },
        {
            image: img4,
            title: 'Fire Truck',
            color: 'bg-red-300',
            category:'Fire-Truck'
        },
        {
            image: img5,
            title: 'Police Car',
            color: 'bg-blue-300',
            category:'Police-Car'
        },
        {
            image: img6,
            title: 'Limousine Car',
            color: 'bg-fuchsia-300',
            category:'Limo-Cars'
        },
    ]
    return (
        <div className='p-2 bg-lime-200 '>
            <h1 className="text-center md:text-3xl text-xl mt-8 w-4/12 mx-auto font-bold text-orange-600 uppercase border-y-4 border-fuchsia-700 py-4">Shop By category</h1>
            <div className='border md:flex justify-between grid grid-cols-2 gap-2 py-4'>
                {
                    categories.map(category => 
                        <div className={`h-72 border-2 border-black text-center space-y-2 ${category.color}`}>
                            <img className='h-48 w-48' src={category.image} alt="" />
                            <p className='text-lg font-semibold'>{category.title}</p>
                            <button className='p-2 px-4 hover:bg-warning rounded-lg bg-amber-600 text-white text-sm activeBtn'><Link to={`/category/${category.category}`}>BUY NOW</Link></button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShopByCategory;