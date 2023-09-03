// import React from 'react';

import { useLoaderData } from "react-router-dom";
import AllToyCard from "../AllToyCard/AllToyCard";
import { useState } from "react";
import useTitle from "../../../Hook/Hook";
// import { Helmet } from "react-helmet-async";

const AllToys = () => {
    const toys = useLoaderData();
    const [alltoy, setAlltoy] = useState(toys);
    const [searchText, setSearchText] = useState("");
    useTitle("All Toys");

    const search = () => {
        fetch(
            `https://toy-zone-server-new.vercel.app/getSearchByToyName/${searchText}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAlltoy(data);
            });
    };
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        search();
    };

    return (
        <div className="p-8 bg-gradient-to-r from-cyan-200 to-purple-200 overflow-x-auto w-full md:text-lg">

            <div className="flex md:gap-4 my-2">
                {/* <input type="text" placeholder="Search" className="input input-bordered input-info w-full max-w-xs" />
                <button className="btn btn-primary">Search</button> */}

                <div>
                    <form onChange={handleSearchSubmit} className="w-[70%] md:w-72">
                        <input className="p-2 rounded-lg"
                            name="search"
                            label="Search"
                            value={searchText}
                            onChange={handleSearchChange}
                            placeholder="Search"
                        />

                        <button className="btn btn-error  mt-3 hidden">
                            Search
                        </button>

                    </form>
                </div>

                <div className="w-full px-3 md:flex justify-end text-secondary gap-2 mb-6 md:mb-0">
                    <label className="block md:text-lg  font-semibold tracking-wide label-text   mb-1">
                        Sort By Price
                    </label>
                    <div className="relative rounded-xl font-semibold">
                        <select className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-2 ps-4 pe-12  rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='sort' id="grid-state">
                            <option >Ascending</option>
                            <option >Descending</option>
                        </select>

                        <div className="pointer-events-none absolute inset-y-0 left-32 flex items-center  text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table w-full">
                <thead>
                    <tr className="font-serif ">
                        <th className="w-[30%]  md:text-xl text-center">Toys</th>
                        <th className="w-[12%] md:text-xl text-center">Price</th>
                        <th className="w-[12%] md:text-xl text-center">Quantity</th>
                        <th className="w-[12%] md:text-xl text-center">Rating</th>
                        <th className="w-[24%] md:text-xl text-center">Seller</th>
                        <th></th>
                    </tr>
                </thead>
            </table>
            {
                alltoy.map(toy => <AllToyCard key={toy.id} toy={toy}></AllToyCard>)
            }
        </div>
    );
};

export default AllToys;