import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, Tabs} from "react-tabs";


const CategoryToy = (params) => {
    const categories = ['Racing-Cars', 'Truck', 'Regular-Cars', 'Fire-Truck', 'Police-Car', 'Limo-Cars'];
    const category = params.category;
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    console.log(params)

    return (
        <div className='py-2 text-xl bg-gradient-to-b from-yellow-100 to-red-200 '> 
            {/* <h3 className='uppercase pt-4 ps-4 font-bold text-red-900'>sub-categories: </h3> */}
            {/* <p className="text-center">Explore Our Collection</p> */}
            <h1 className="text-center text-xl my-4 w-4/12 mx-auto font-bold text-orange-500 uppercase border-y-4 py-4">Explore Our Collection</h1>
            <div className="text-lime-800 font-semibold flex justify-evenly mb-4">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className=" font-serif  me-8">
                        <Tab><Link to='/category/Racing-Cars'>Sports Car</Link></Tab>
                        <Tab><Link to='/category/Truck'>Truck</Link></Tab>
                        <Tab><Link to='/category/Regular-Cars'>Regular Car</Link></Tab>
                        <Tab><Link to='/category/Fire-Truck'>Mini Fire Truck</Link></Tab>
                        <Tab><Link to='/category/Police-Car'>Mini Police Car</Link></Tab>
                        <Tab><Link to='/category/Limo-Cars'>Limo Car</Link></Tab>
                    </TabList>
                </Tabs>

            </div>
        </div>
    );
};

export default CategoryToy;