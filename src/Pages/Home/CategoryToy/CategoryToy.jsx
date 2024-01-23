import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useToys from "../../../Hook/useToys";
import ToyTab from "./ToyTab";


const CategoryToy = (params) => {
    const categories = ['Racing-Cars', 'Truck', 'Regular-Cars', 'Fire-Truck', 'Police-Car', 'Limo-Cars'];
    const category = params.category;
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(0);
    const toys = useToys();
    const sports_car = toys.filter(item => item.subCategory === 'Racing-Cars');
    const Truck = toys.filter(item => item.subCategory === 'Truck');
    const Regular_Cars = toys.filter(item => item.subCategory === 'Regular-Cars');
    const Fire_Truck = toys.filter(item => item.subCategory === 'Fire-Truck');
    const Police_Car = toys.filter(item => item.subCategory === 'Police-Car');
    const Limo_Cars = toys.filter(item => item.subCategory === 'Limo-Cars');
    // console.log(Truck);

    return (
        <div className='py-2 text-xl bg-gradient-to-b from-base-200 to-cyan-100 '>
            {/* <h3 className='uppercase pt-4 ps-4 font-bold text-red-900'>sub-categories: </h3> */}
            {/* <p className="text-center">Explore Our Collection</p> */}
            <h1 className="text-center md:text-3xl text-xl my-4 w-4/12 mx-auto font-bold text-orange-600 uppercase border-y-4 border-fuchsia-700 py-4">Explore Our Collection</h1>
            <div className="text-red-600 font-semibold flex justify-evenly my-4">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className=" font-serif flex justify-center mx-auto">
                        <Tab>Sports Car</Tab>
                        <Tab>Truck</Tab>
                        <Tab>Regular Car</Tab>
                        <Tab>Mini Fire Truck</Tab>
                        <Tab>Mini Police Car</Tab>
                        <Tab>Limo Car</Tab>
                    </TabList>
                    <TabPanel>
                        <ToyTab items={sports_car}></ToyTab>
                    </TabPanel>
                    <TabPanel>
                        <ToyTab items={Truck}></ToyTab>
                    </TabPanel>
                    <TabPanel>
                        <ToyTab items={Regular_Cars}></ToyTab>
                    </TabPanel>
                    <TabPanel>
                        <ToyTab items={Fire_Truck}></ToyTab>
                    </TabPanel>
                    <TabPanel>
                        <ToyTab items={Police_Car}></ToyTab>
                    </TabPanel>
                    <TabPanel>
                        <ToyTab items={Limo_Cars}></ToyTab>
                    </TabPanel>
                </Tabs>

            </div>
            {/* <ToyTab></ToyTab> */}
        </div>
    );
};

export default CategoryToy;