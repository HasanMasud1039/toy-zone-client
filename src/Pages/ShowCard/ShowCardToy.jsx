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
        <div className="p-8">
            <Tabs className="border-0  bg-lime-200 rounded-lg shadow-2xl">
 
            <div style={{display: 'grid', gridTemplateColumns:'1fr 1fr' }}  className="mx-auto">
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