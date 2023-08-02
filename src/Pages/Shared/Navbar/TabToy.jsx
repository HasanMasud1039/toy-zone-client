
import { Link } from 'react-router-dom';
import {  TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';



const TabToy = ({ categoryToy}) => {

    const { _id, picture, name, price, rating, details, subCategory, sellerName, sellerEmail, quantity } = categoryToy;


    return (
        <div  className=' m-6rounded-lg  '>
            <div >
                <Tabs  className="p-6" >
                    

                    <TabPanel  className="border-1 shadow-lg mt-2">
                        <div className="card bg-orange-200 border-2  shadow-xl">
                            <div className="px-2 w-[90%] mx-auto mt-[-20px] ">
                                <img src={picture} className="rounded-xl w-full h-64" />
                            </div>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p>{details}</p>
                                <div className="card-actions">
                                <button className="btn btn-error text-white "><Link to={`/alltoys/${_id}`}>Details</Link></button>
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