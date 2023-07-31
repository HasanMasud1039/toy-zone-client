// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const ToyDetails = () => {
  const toyDetail = useLoaderData();
  const id = useParams();
  console.log(id, toyDetail)
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content bg-yellow-100 rounded-lg flex-col me-8 lg:flex-row">
          <img src={toyDetail.picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="p-8 border-2 space-y-2 bg-cyan-200 rounded-xl font-serif shadow-red-400 shadow-lg">
            <h1 className="text-5xl text-red-800 font-bold text-center mb-8">{toyDetail.name}</h1>
            <p className="py-2 text-amber-700 font-semibold">{toyDetail.details}</p>
            <p className="py-2  font-semibold">Price: <span className="text-red-700">   $ {toyDetail.price}</span></p>
            <p className="py-2  font-semibold">Quantity: <span className="text-red-700">  {toyDetail.quantity}</span></p>
            <p className="py-2  font-semibold">Rating:  <span className="text-red-700">{toyDetail.rating}</span></p>
            <p className="py-2  font-semibold">Seller Name:  <span className="text-red-700">{toyDetail.sellerName}</span></p>
            <p className="py-2  font-semibold">Seller Email:  <span className="text-red-700">  {toyDetail.sellerEmail}</span></p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;