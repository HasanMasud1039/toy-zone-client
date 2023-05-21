import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ShowCard from '../../ShowCard/ShowCardToy';
const TabToy = ({ categoryToy }) => {
    // console.log("cat", categoryToy);
    const { id, picture, name, price, rating, details, subCategory, sellerName, sellerEmail, quantity } = categoryToy;




    return (
        <div  className=' w-[95%] m-6rounded-lg  '>
            <div >
                <Tabs  className="p-6  ">

                    <TabPanel  className="border-1">
                        <div className="card bg-base-100  h-[90%]  shadow-xl">
                            <div className="px-10 mx-auto pt-10 ">
                                <img src={picture} className="rounded-xl h-64" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p>{details}</p>
                                <div className="card-actions">
                                <button className="btn btn-error text-white "><Link to={`/alltoys/${id}`}>Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>
                    <TabPanel> </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default TabToy;