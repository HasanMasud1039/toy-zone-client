import 'react-tabs/style/react-tabs.css';

const ToyTabShow = ({ item }) => {
    const { _id, picture, name, price, rating, details, subCategory, sellerName, sellerEmail, quantity } = item;
    return (
        <div className='rounded-lg active border-2'>
            <div className="card">
                <div className="">
                    <img src={picture} className="rounded-t-xl shadow-red-200 shadow-lg h-56 w-56" />
                </div>
                <div className="card-body items-center text-black text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm'>$ {price}</p>
                    <label htmlFor={_id} className="activeBtn w-full px-4 bg-amber-600 py-1 rounded text-white">Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={_id} className="modal-toggle" />
                    <div className="modal h-fit">
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