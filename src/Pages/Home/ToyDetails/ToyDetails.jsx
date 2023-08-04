// import React from 'react';

import { FaDownload } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";
import PdfViewer from "../../PDFDownload/PDFViewer";
import { PDFDownloadLink } from "@react-pdf/renderer";

const ToyDetails = () => {
  const toyDetail = useLoaderData();
  const id = useParams();
  // console.log(id, toyDetail);

  const handlePDF = () =>{
    console.log(id);
    // <PdfViewer toyDetail={toyDetail} id={id}></PdfViewer>
    <PDFDownloadLink document={<PdfViewer toyDetail={toyDetail} ></PdfViewer>} fileName="FORM">
      {({loading}) => (loading ? 'Loadimg Document...' : <button>DOWNLOAD</button>)}
    </PDFDownloadLink>
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content  rounded-lg flex-col me-8 lg:flex-row">
          <img src={toyDetail.picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="p-8 border-2 space-y-2 bg-cyan-50 rounded-xl font-serif shadow-red-400 shadow-lg">
            <h1 className="text-5xl text-red-800 font-bold text-center mb-8">{toyDetail.name}</h1>
            <p className="py-2 text-amber-700 font-semibold">{toyDetail.details}</p>
            <p className="py-2  font-semibold">Price: <span className="text-red-700">   $ {toyDetail.price}</span></p>
            <p className="py-2  font-semibold">Quantity: <span className="text-red-700">  {toyDetail.quantity}</span></p>
            <p className="py-2  font-semibold">Rating:  <span className="text-red-700">{toyDetail.rating}</span></p>
            <p className="py-2  font-semibold">Seller Name:  <span className="text-red-700">{toyDetail.sellerName}</span></p>
            <p className="py-2  font-semibold">Seller Email:  <span className="text-red-700">  {toyDetail.sellerEmail}</span></p>
          <div className="mt-6 flex justify-center"><button  className="btn btn-error gap-4"><FaDownload></FaDownload> Download Details as PDF</button></div>
         { handlePDF()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;