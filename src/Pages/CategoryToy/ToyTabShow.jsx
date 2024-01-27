import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';

const ToyTabShow = ({ item }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const {index, _id, picture, name, price, rating, details, subCategory, sellerName, sellerEmail, quantity } = item;
    const handleAddCart = (item) =>{
        console.log(item);
    } 
    return (
        <div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className='rounded-lg active border-2'>
            <div className="card">
                <div className="relative">
                    <img src={picture} className="rounded-t-xl shadow-red-200 shadow-lg h-56 w-56" />
                    <button
                            onClick={() => handleAddCart(item)}
                            className={`h-8 w-[80%] bg-gradient-to-t from-amber-400 to-amber-600 rounded-lg text-white text-center p-1 hover:bg-green-500 hover:text-white transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        >
                            Add to Cart
                        </button>
                </div>
                <div className="card-body items-center text-black text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-lg font-bold text-[#FCAF09]'>$ {price}</p>
                    <label htmlFor={_id} className="activeBtn w-full px-4 bg-fuchsia-600 hover:bg-violet-600 py-1 rounded text-white">Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={_id} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box gap-4">
                            <div className='gap-4 text-sm flex text-left'>
                                <div>
                                    <img className='active p-1 rounded-lg mb-4 w-full md:h-[200px] h-[100px]' src={picture} alt="" />
                                </div>
                                <div className='md:pt-4 pt-2'>
                                    <p className="font-bold md:text-xl mb-2">{name}</p>
                                    <p className=''>Price: ${price}</p>
                                    <p className=''>Rating: {rating}</p>
                                    <p className='text-sm'>Category: {subCategory}</p>
                                    <p>Quantity: {quantity}</p>
                                    <p>Seller Name: {sellerName}</p>
                                    <p>Seller Email: {sellerEmail}</p>
                                </div>
                            </div>
                            <div className='text-sm px-4 space-y-2 text-left'>
                                <p className='text-sm'>{details}</p>
                            </div>
                            <div>
                                <div className="modal-action">
                                    <label htmlFor={_id} className="btn p-2 text-white bg-gradient-to-t from-red-500 to-red-700 btn-sm">X</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyTabShow;