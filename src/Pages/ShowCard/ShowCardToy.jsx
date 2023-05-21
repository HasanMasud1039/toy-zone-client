// import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Link, useLoaderData } from "react-router-dom";
import TabToy from "../Shared/Navbar/TabToy";

const ShowCardToy = () => {
    const categoryToys = useLoaderData();
    console.log(categoryToys);
    // categoryToys.map(categoryToy =>  
    //     <TabToy key={categoryToy.id} categoryToy={categoryToy}></TabToy>
    //  )

    return (
        <div className="d-flex p-8">
            <Tabs className="border-0 shadow-2xl">
 
            <div className="w-68 bg-red-50 space-x-2 border-2 border-orange-500">
                {
                    categoryToys.map(categoryToy =>
                        <TabToy key={categoryToy.id} categoryToy={categoryToy}></TabToy>

                    )}

            </div>
            </Tabs>
        </div>
    );
};

export default ShowCardToy;