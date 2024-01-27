import { Parallax } from 'react-parallax';
import './Gallery.css'

const Gallery = () => {
    const topProducts = [
        {
            image: 'https://i.ibb.co/7GBQfmj/51-V9-X3-Odb0-L-AC-UL400.jpg',
            name: 'Sports Racer',
            category: 'Racing Car',
            price: 21
        },
        {
            image: 'https://i.ibb.co/xFdZY1X/car.webp',
            name: 'Off Road Adventure',
            category: 'Regular Car',
            price: 15
        },
        {
            image: 'https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg',
            name: 'Faster Racer',
            category: 'Racing Car',
            price: 14
        },
        {
            image: 'https://i.ibb.co/Bjn2d04/blacks-tobbi-kid-cars-th17u0567-64-600.webp',
            name: 'Black Panther',
            category: 'Racing Car',
            price: 18
        },
        {
            image: 'https://i.ibb.co/qJWNt0w/81l-N7azu-a-L-SS400.jpg',
            name: 'Police Car',
            category: 'Police Car',
            price: 18
        },
        {
            image: 'https://i.ibb.co/vqdV8KT/images-1.jpg',
            name: 'Fire Fighters Van',
            category: 'Fire Truck',
            price: 16
        },
        {
            image: 'https://i.ibb.co/F3Tj6Sd/ebd0d0370f72f217a3ed2e5da8db22b7.jpg',
            name: 'City Truck',
            category: 'Truck',
            price: 15
        },
        {
            image: 'https://i.ibb.co/9yJwkN2/1-32-die-cast-metal-cars-pullback-toy-long-lamborghini-metal-car-original-imafqjfaznbpzud9.jpg',
            name: 'Limousine Car',
            category: 'Limo Car',
            price: 16
        },
    ]
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage='https://s.abcnews.com/images/Health/parents-children-playing-stock-gty-jef-181129_hpMain_16x9_1600.jpg'
            bgImageAlt="the Product"
            strength={-200}
             className=' p-4 space-y-6 bg-gradient-to-b to-base-200 from-cyan-100'>
            <div className=' space-y-4 pb-6 h-[50%] w-full space-x-2'>
                <h1 className="text-center md:text-3xl text-xl my-4 w-4/12 mx-auto font-bold text-orange-600 uppercase border-y-4 border-fuchsia-700 py-4">Our Top Sale Products</h1>
            </div>
            <div
             data-aos="fade-up"
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1500" 
            className='row grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-2 md:mx-4'>
                {
                    topProducts.map(product =>
                        <div className=''>
                            <div className='img-area'>
                                <img className='image h-full' src={product.image} alt="" />
                                <div className='img-text'>
                                    <h1>{product.name}</h1>
                                    <h3>{product.category}</h3>
                                    <h3>Price: ${product.price}</h3>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </Parallax>
    );
};

export default Gallery;