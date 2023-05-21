import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ShowCard from '../../ShowCard/ShowCardToy';
const TabToy = ({ categoryToy }) => {
    // console.log("cat", categoryToy);
    const { id, picture, name, price, rating, details, subCategory, sellerName, sellerEmail, quantity } = categoryToy;




    return (
        <div className=' w-[35%] bg-lime-200 border-4  p-6'>
            <div >
                <Tabs className="border-4 ">

                    <TabPanel className="border-4">
                        <div className="card w-96 bg-base-100 border-2  shadow-xl">
                            <div className="px-10 pt-10 ">
                                <img src={picture} className="rounded-xl" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p>{details}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Buy Now</button>
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