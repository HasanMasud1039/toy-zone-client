
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='container space-y-6 border-1'>
            <div className=' space-y-4 pb-6 h-[50%] w-full space-x-2'>
                <h1 className="text-center text-xl my-4 w-4/12 mx-auto font-bold text-orange-500 uppercase border-y-4 py-4">Out Top Sale Products</h1>
                <div className="text-lime-800 font-semibold flex justify-evenly mb-4"></div>
            </div>

            <div className='row grid grid-cols-2 md:grid-cols-4 h-full'>
                <div className='h-[60%]'>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/7GBQfmj/51-V9-X3-Odb0-L-AC-UL400.jpg" alt="" />
                        <div className='img-text '>
                            <h1>Sports Racer</h1>
                            <h3>Racing Car</h3>
                            <h3>Price: $21</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/xFdZY1X/car.webp" alt="" />
                        <div className='img-text'>
                            <h1>Off Road Adventure</h1>
                            <h3>Regular Car</h3>
                            <h3>Price: $21</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image' src="https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg" alt="" />
                        <div className='img-text'>
                            <h1>Faster Racer</h1>
                            <h3>Racing Car</h3>
                            <h3>Price: $11</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image' src="https://i.ibb.co/qJWNt0w/81l-N7azu-a-L-SS400.jpg" alt="" />
                        <div className='img-text'>
                            <h1>Police Car</h1>
                            <h3>Police Car</h3>
                            <h3>Price: $12</h3>
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-4 col-sm-6'>
                    <div className='img-area'>
                        <img src={photo6} alt="" />
                        <div className='img-text'>
                            <h1>Fire Truck</h1>
                            <h3>Price: $21</h3>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='row  grid grid-cols-2 md:grid-cols-4 h-full'>
                <div className='h-[60%]'>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/vqdV8KT/images-1.jpg" alt="" />
                        <div className='img-text'>
                            <h1>Fire Fighters Van</h1>
                            <h3>Fire Truck</h3>
                            <h3>Price: $12</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/F3Tj6Sd/ebd0d0370f72f217a3ed2e5da8db22b7.jpg" alt="" />
                        <div className='img-text'>
                            <h1>City Truck</h1>
                            <h3>Truck</h3>
                            <h3>Price: $12</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image' src="https://i.ibb.co/9yJwkN2/1-32-die-cast-metal-cars-pullback-toy-long-lamborghini-metal-car-original-imafqjfaznbpzud9.jpg" alt="" />
                        <div className='img-text'>
                            <h1>Limosine Car</h1>
                            <h3>Limo Car</h3>
                            <h3>Price: $12</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image' src="https://i.ibb.co/Bjn2d04/blacks-tobbi-kid-cars-th17u0567-64-600.webp" alt="" />
                        <div className='img-text'>
                            <h1>Black Panther Car</h1>
                            <h3>Sports Car</h3>
                            <h3>Price: $22</h3>
                        </div>
                    </div>
                </div>
                {/* <div className='col-md-4 col-sm-6'>
                    <div className='img-area'>
                        <img src={photo6} alt="" />
                        <div className='img-text'>
                            <h1>Fire Truck</h1>
                            <h3>Price: $21</h3>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Gallery;