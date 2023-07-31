// import React from 'react';
import { Tabs } from "react-tabs";
import { useLoaderData, useParams } from "react-router-dom";
import TabToy from "../Shared/Navbar/TabToy";
import CategoryToy from "../Home/CategoryToy/CategoryToy";
// import CategoryToy from "../Home/CategoryToy/CategoryToy";

const ShowCardToy = () => {
    // <CategoryToy></CategoryToy>
    const categoryToys = useLoaderData();
    const params = useParams();
    console.log(categoryToys);


    return (
        <div className="p-8">

           <div hidden> <CategoryToy params={params}></CategoryToy></div>
            <Tabs className="border-0  bg-lime-200 rounded-lg shadow-2xl">

                <div style={{  display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="mx-auto">
                    {
                        categoryToys.map(categoryToy =>
                            <TabToy key={categoryToy.id} categoryToy={categoryToy} ></TabToy>

                        )}

                </div>
            </Tabs>
        </div>
    );
};

export default ShowCardToy;