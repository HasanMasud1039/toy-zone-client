// import React from 'react';

import { useLoaderData } from "react-router-dom";
import AllToyCard from "../AllToyCard/AllToyCard";

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className="p-8 bg-gradient-to-r from-cyan-200 to-purple-200 overflow-x-auto w-full text-lg">
            <div>
                
            </div>
            <table className="table w-full">
            <thead>
                    <tr className="font-serif">
                        <th className="w-[30%]  text-xl text-center">Toy</th>
                        <th className="w-[12%] text-xl text-center">Price</th>
                        <th className="w-[12%] text-xl text-center">Quantity</th>
                        <th className="w-[12%] text-xl text-center">Rating</th>
                        <th className="w-[24%] text-xl text-center">Seller</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            {
                toys.map(toy => <AllToyCard key={toy.id} toy={toy}></AllToyCard>)
            }
        </div>
    );
};

export default AllToys;