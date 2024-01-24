import React from 'react';
import img2 from '../../../assets/fav1.webp'
import gift from '../../../assets/icon/car.png'
import care from '../../../assets/icon/care.png'
import delivery from '../../../assets/icon/delivery.png'
import wallet from '../../../assets/icon/wallet.png'

const FavoriteToy = () => {
    const cardData = [
        {
            image: gift,
            title: 'Best Toys Collection',
            subTitle: 'We ensure the best quality & look.'
        },
        {
            image: care,
            title: '24/7 Customer Support',
            subTitle: 'We cares our valuable customers.'
        },
        {
            image: wallet,
            title: 'Secure Payment',
            subTitle: 'We have a safe & secure payment method.'
        },
        {
            image: delivery,
            title: 'Fast Delivery',
            subTitle: 'Punctuality is our motto in product delivery.'
        }
    ]
    return (
        <div className='md:pt-12 pt-8 bg-violet-50'>
            <h1 className="text-center md:text-3xl text-xl mt-4 w-4/12 mx-auto font-bold text-orange-600 uppercase border-y-4 border-fuchsia-700 py-4">Get Your Favorite Toys</h1>

            <div className='md:flex justify-between md:p-6 p-4 mt-8 md:mt-2'>
                <div className='grid grid-cols-2 md:p-8 p-4 active gap-4 md:w-[45%] border md:h-[460px] md:space-y-2'>
                    {
                        cardData.map(card =>
                            <div className='px-4 rounded-lg border-1 shadow-lg text-center flex flex-col items-center justify-center bg-white space-y-2'>
                                <img src={card.image} className='w-16' />
                                <p className='text-pink-700 font-bold text-lg'>{card.title}</p>
                                <p className='label-text font-semibold text-gray-400'>{card.subTitle}</p>
                            </div>
                        )
                    }
                </div>
                <div className={`space-y-2 bg-cyan-500  md:mt-0 mt-6  md:w-[50%]`}>
                    <img src={img2} alt="" className='h-[100%] w-full rounded-tl-[300px] active shadow-2xl shadow-red-200 border-2' />
                </div>
            </div>
        </div>
    );
};

export default FavoriteToy;