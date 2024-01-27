import React, { useState } from 'react';
import img0 from '../../../assets/special/11.png'
import img1 from '../../../assets/special/44.webp'
import img2 from '../../../assets/special/33.jpg'
import img3 from '../../../assets/special/22.jpg'
import img4 from '../../../assets/special/11.jpeg'
import img5 from '../../../assets/special/55.jpg'
import img6 from '../../../assets/special/kk.jpg'

const SpecialCollection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const products = [
        {
            id: 0,
            image: img0,
            name: '',
            price: 50
        },
        {
            id: 1,
            image: img1,
            name: '',
            price: 50
        },
        {
            id: 2,
            image: img2,
            name: '',
            price: 50
        },
        {
            id: 3,
            image: img3,
            name: '',
            price: 50
        },
        {
            id: 4,
            image: img4,
            name: '',
            price: 50
        },
        {
            id: 5,
            image: img5,
            name: '',
            price: 50
        },
        {
            id: 6,
            image: img6,
            name: '',
            price: 50
        },
        {
            id: 6,
            image: 'https://i.pinimg.com/originals/df/32/2e/df322ed06b9a32e29462dc65c45d7a7e.jpg',
            name: '',
            price: 50
        },
    ];

    const [bg, setBg] = useState(img1)
    return (
        <div className='relative mb-64 md:mb-0'>
            <h1 className="text-center md:text-3xl text-xl mt-8 w-4/12 mx-auto font-bold text-orange-600 uppercase border-y-4 border-fuchsia-700 py-4">Special Collection</h1>
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'contain', backgroundPosition: '', backgroundRepeat: 'no-repeat' }} className="saturate-150 text-white py-10 my-10 w-full h-[700px] mx-auto">
                <div className="absolute md:bottom-0 bottom-[-250px] flex justify-center items-center bg-purple-100 bg-opacity-50 py-12 md:px-6 w-full">
                    <div className='carousel rounded-lg md:gap-3 flex md:flex-nowrap flex-wrap justify-between '>
                        {
                            products.map((product, index) =>
                                <div
                                    key={index}
                                    className='mx-auto  pb-6 relative'
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}>
                                    <img onClick={() => setBg(product.image)} src={product.image} className='w-28 h-32 md:w-44 md:h-44' alt="" />
                                    <div>
                                        <p className='text-center text-xl font-bold mt-2 text-[#040080]'>$ {product.price}</p>
                                        <button
                                            className={`h-8 w-[80%] bg-gradient-to-t from-amber-400 to-amber-600 rounded-lg text-white text-center p-1 hover:bg-green-500 hover:text-white transition-opacity duration-300 absolute bottom-24 left-1/2 transform -translate-x-1/2 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialCollection;