import React, { useState } from 'react';
import img1 from '../../../assets/new/1.jpeg'
import img2 from '../../../assets/new/2.jpg'
import img3 from '../../../assets/new/3.webp'
import img4 from '../../../assets/new/4.webp'
import img5 from '../../../assets/new/5.jpg'
import img6 from '../../../assets/new/6.png'
import img7 from '../../../assets/new/7.webp'
import img8 from '../../../assets/new/8.jpg'
import img9 from '../../../assets/new/9.jpg'
import img10 from '../../../assets/new/10.jpg'
import img11 from '../../../assets/new/11.jpg'
import img12 from '../../../assets/new/12.webp'
import img13 from '../../../assets/new/13.jpg'
import img14 from '../../../assets/new/14.jpg'
import img15 from '../../../assets/new/15.jpg'
import img16 from '../../../assets/new/16.jpg'
import toast from 'react-hot-toast';
import AOS from'aos';
import { useSpring } from '@react-spring/web';

const NewArraival = () => {

    const newToys = [
        {
            image: img1,
            name: 'Electric Scooty',
            price: 50,
            stock: 10
        },
        {
            image: img2,
            name: 'Electric Scooter',
            price: 30,
            stock: 10
        },
        {
            image: img3,
            name: 'Outdoor Bike',
            price: 120,
            stock: 8
        },
        {
            image: img4,
            name: 'Outdoor Car',
            price: 160,
            stock: 7
        },
        {
            image: img5,
            name: 'Tricycle for Kid',
            price: 60,
            stock: 10
        },
        {
            image: img6,
            name: 'Electric Tricycle',
            price: 90,
            stock: 10
        },
        {
            image: img7,
            name: 'Double Decker Bus',
            price: 20,
            stock: 20
        },
        {
            image: img8,
            name: 'Zig-Zag Scooter',
            price: 30,
            stock: 10
        },
        {
            image: img9,
            name: 'Bumper car',
            price: 30,
            stock: 10
        },
        {
            image: img10,
            name: 'Sports Motorbike',
            price: 40,
            stock: 10
        },
        {
            image: img11,
            name: 'Banana Boat',
            price: 10,
            stock: 10
        },
        {
            image: img12,
            name: 'Cart Drift Car',
            price: 50,
            stock: 10
        },
        {
            image: img13,
            name: 'Stroller Car',
            price: 30,
            stock: 10
        },
        {
            image: img14,
            name: 'Scooter Bike',
            price: 18,
            stock: 10
        },
        {
            image: img15,
            name: 'Police Jeep',
            price: 70,
            stock: 10
        },
        {
            image: img16,
            name: 'Travel Car',
            price: 68,
            stock: 10
        },
    ]
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const handleAddCart = (product) => {
        toast.success(`${product.name} added to cart.`, { position: 'top-right' });
        console.log(product);
    }
    const [sliceNum, setSliceNum] = useState(8);
    const handleSeeMore = () => {
        setSliceNum(prevSliceNum => prevSliceNum + 8);
    };
    const handleSeeLess = () => {
        setSliceNum(prevSliceNum => prevSliceNum - 8);
    };
    
    return (
        <div className='bg-[#F5EEF8] md:py-4 py-2 animate__animated animate__slideIn'>
            <h1 className="text-center md:text-3xl text-xl my-8 w-4/12 mx-auto font-bold text-orange-600 uppercase border-y-4 border-fuchsia-700 py-4">New Arrivals</h1>
            <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500" 
            className='grid md:grid-cols-4 grid-cols-2 gap-1 space-y-2'>
                {newToys.slice(0, sliceNum).map((toy, index) => (
                    <div
                        key={index}
                        className='mx-auto  pb-6 relative'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <img
                            src={toy.image}
                            className='w-64 h-64 shadow-xl rounded-lg mb-2'
                            alt=""
                        />
                        <button
                            onClick={() => handleAddCart(toy)}
                            className={`h-8 w-[80%] bg-gradient-to-t from-amber-400 to-amber-600 rounded-lg text-white text-center p-1 hover:bg-green-500 hover:text-white transition-opacity duration-300 absolute bottom-24 left-1/2 transform -translate-x-1/2 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        >
                            Add to Cart
                        </button>

                        <div className='mt-8'>
                            <p className='text-center text-lg text-blue-900 font-bold'>{toy.name}</p>
                            <p className='text-center text-[#FFBF00] text-lg font-bold'>${toy.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Button to see more */}
            {sliceNum < newToys.length && (
                <button className='btn flex md:w-1/6 activeBtn bg-fuchsia-600 mx-auto' onClick={handleSeeMore}>See more</button>
            )}

            {/* Button to see less */}
            {sliceNum === newToys.length && (
                <button className='btn flex md:w-1/6 activeBtn bg-fuchsia-600 mx-auto' onClick={handleSeeLess}>See less</button>
            )}
        </div>
    );
};

export default NewArraival;