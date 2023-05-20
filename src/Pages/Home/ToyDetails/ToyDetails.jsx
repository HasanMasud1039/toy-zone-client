// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const ToyDetails = () => {
    const toyDetail = useLoaderData();
    const id = useParams();
    console.log(id, toyDetail)
    return (
        <div>
            <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col me-8 lg:flex-row">
    <img src={toyDetail.picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{toyDetail.name}</h1>
      <p className="py-6">{toyDetail.details}</p>
      <p>Price: {toyDetail.price}</p>
      <p>Quantity: {toyDetail.quantity}</p>
      <p>Rating:  {toyDetail.rating}</p>
      <p>Seller Name:  {toyDetail.sellerName}</p>
      <p>Seller Email:  {toyDetail.sellerEmail}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyDetails;