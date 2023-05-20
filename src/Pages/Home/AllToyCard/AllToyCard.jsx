// import React from 'react';

import { Link } from "react-router-dom";

const AllToyCard = ({ toy }) => {
    console.log(toy);
    const {id, picture, name, price, rating, subCategory, sellerName, sellerEmail, quantity } = toy;
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
            
                {/* <thead>
                    <tr>
                        <th>Toy</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Seller</th>
                        <th></th>
                    </tr>
                </thead> */}
                <tbody>
                    
                    {/* row 1 */}
                    <tr className="border-2 text-center">
                        <td className="shadow-lime-300 my-8 border-0 bg-cyan-100 w-[35%]">
                            <div className="flex items-center space-x-3">
                                <div className="avatar me-8">
                                    <div className="mask mask-squircle w-[90px] h-24">
                                        <img src={picture}/>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
                                    <div className="text-sm opacity-50">{subCategory}</div>
                                </div>
                            </div>
                        </td>
                        <td className="shadow-lime-300 my-8 border-0 w-[15%] bg-cyan-200">
                            {price}  
                        </td>
                        <td className="shadow-lime-300 my-8 border-0 w-[12%] bg-cyan-200">
                            {quantity}
                        </td>
                        <td className="shadow-lime-300 my-8 border-0 w-[24%] bg-cyan-200"><a href={sellerEmail}>{sellerName}</a></td>
                        <th className=" bg-cyan-200 w-20">
                            <button className="btn btn-error text-white "><Link to={`/alltoys/${id}`}>Details</Link></button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    
                </tbody>

            </table>
        </div>
    );
};

export default AllToyCard;