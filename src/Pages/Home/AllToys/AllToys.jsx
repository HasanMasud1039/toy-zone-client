// import React from 'react';

import { useLoaderData } from "react-router-dom";
import AllToyCard from "../AllToyCard/AllToyCard";

const AllToys = () => {
    const toys = useLoaderData();
    return (
        <div className="p-8 overflow-x-auto w-full text-lg">
            <table className="table w-full">
            <thead>
                    <tr>
                        <th className="w-[30%] text-lg text-center">Toy</th>
                        <th className="w-[12%] text-lg text-center">Price</th>
                        <th className="w-[12%] text-lg text-center">Quantity</th>
                        <th className="w-[12%] text-lg text-center">Rating</th>
                        <th className="w-[24%] text-lg text-center">Seller</th>
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