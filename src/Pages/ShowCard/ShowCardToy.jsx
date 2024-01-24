// import React from 'react';
import { Tabs } from "react-tabs";
import { useLoaderData, useParams } from "react-router-dom";
// import TabToy from "../Shared/Navbar/TabToy";
import CategoryToy from "../CategoryToy/CategoryToy";
// import CategoryToy from "../Home/CategoryToy/CategoryToy";

const ShowCardToy = () => {
    // <CategoryToy></CategoryToy>
    const categoryToys = useLoaderData();
    const params = useParams();
    console.log(categoryToys);


    return (
        <div className="py-8">

           {/* <div hidden> <CategoryToy key={params} params={params} categoryToys={categoryToys}></CategoryToy></div>
            <Tabs className="border-0   rounded-lg shadow-2xl">

                <div style={{  gridTemplateColumns: '1fr 1fr 1fr' }} className=" mx-auto md:grid">
                    {
                        categoryToys.map(categoryToy =>
                            <TabToy key={categoryToy._id} categoryToy={categoryToy} ></TabToy>

                        )}

                </div>
            </Tabs> */}
        </div>
    );
};

export default ShowCardToy;