import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import MyToyCard from './MyToyCard';


const MyToy = () => {
    const { user} = useContext(AuthContext);
    const toys = useLoaderData();
    console.log(toys);

    return (
        <div>


<div className="p-8 overflow-x-auto w-full text-lg">
            <table className="table w-full">
            <thead>
                    <tr>
                        <th className="w-[29%] text-lg text-center">Toy</th>
                        <th className="w-[12%] text-lg text-center">Price</th>
                        <th className="w-[10%] text-lg text-center">Quantity</th>
                        <th className="w-[10%] text-lg text-center">Rating</th>
                        <th className="w-[15%] text-lg text-center">Seller</th>
                        <th className="w-[20%] text-lg text-center">Action</th>
                        <th className="w-[20%] text-lg text-center"></th>
                        
                    </tr>
                </thead>
            </table>
            {
                toys.map(toy => <MyToyCard key={toy.id} toy={toy}></MyToyCard>)
            }
        </div>
        </div>
    );
};

export default MyToy;