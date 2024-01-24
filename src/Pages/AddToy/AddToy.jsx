// import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hook/Hook';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const { navigate } = useNavigate();
    useTitle("Add Toy");
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const subCategory = form.sub_category.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const sellerName = form.seller_name.value;
        const sellerEmail = form.seller_email.value;
        const details = form.description.value;
        let category_id;
        subCategory == 'Sports Car' ? (category_id = 100) :
            subCategory == 'Truck' ? (category_id = 300) :
                subCategory == 'Regular Car' ? (category_id = 200) :
                    subCategory == 'Mini Fire Truck' ? (category_id = 400) :
                        subCategory == 'Mini Police Car' ? (category_id = 500) :
                            subCategory == 'Limo Car' ? (category_id = 600) : category_id = 0;


        const newAddedToy = { name, picture, category_id, subCategory, price, rating, sellerEmail, sellerName, quantity, details };
        console.log(newAddedToy);
        fetch(`https://toy-zone-server-new.vercel.app/toys`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                Swal.fire({
                    title: 'Success!',
                    text: 'Toy added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            })
        navigate('/');
    }

    return (
        <div>
            {/* <Helmet>
                <title>Toy Zone || Add Toy</title>
            </Helmet> */}

            <h1 className='text-4xl uppercase font-serif text-center font-bold bg-gradient-to-b from-green-400 to-green-300 pt-4'>Add a toy</h1>
            <div className="hero bg-gradient-to-t to-green-300 from-yellow-100">
                <div className="hero-content py-8 md:w-[50%] w-full  flex-col lg:flex-row-reverse">
                    <div className="card w-full  shadow-2xl  shadow-red-400 bg-base-400">
                        <form onSubmit={handleAddToy}>
                            <div className="card-body ">
                                <div className="form-control grid grid-cols-4">
                                    <label className="label col-span-1">
                                        <span className="label-text text-lg font-semibold">Toy Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="col-span-3 input input-bordered" />
                                </div>
                                <div className="form-control grid grid-cols-4">
                                    <label className="label col-span-1">
                                        <span className="label-text text-lg font-semibold">Picture URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name='picture' className="input input-bordered col-span-3" />
                                </div>

                                <div className="grid grid-cols-4 w-full mb-6 md:mb-0">
                                    <label className="col-span-1 text-lg font-semibold tracking-wide label-text   mb-2">
                                        Category
                                    </label>
                                    <div className="relative col-span-3">
                                        <select className="col-span-4 w-full appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='sub_category' id="grid-state">
                                            <option >Sports Car</option>
                                            <option >Truck</option>
                                            <option >Regular Car</option>
                                            <option >Mini Fire Truck</option>
                                            <option > Mini Police Car</option>
                                            <option>Limo Car</option>
                                        </select>

                                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-control grid grid-cols-4">
                                    <label className="label col-span-1">
                                        <span className="label-text text-lg font-semibold">Price</span>
                                    </label>
                                    <input type="number" placeholder="Price" name='price' className="input input-bordered col-span-3" />
                                </div>
                                <div className="form-control grid grid-cols-4">
                                    <label className="label col-span-1">
                                        <span className="label-text text-lg font-semibold">Rating</span>
                                    </label>
                                    <input type="number" placeholder="Rating Out of 5" name='rating' className="input input-bordered col-span-3" />
                                </div>
                                <div className="form-control grid grid-cols-4">
                                    <label className="label col-span-1">
                                        <span className="label-text text-lg font-semibold">Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered col-span-3" />
                                </div>
                                <div className="form-control grid grid-cols-4">
                                    <label className="label col-span-1">
                                        <span className="label-text text-lg font-semibold">Seller Name</span>
                                    </label>
                                    <input type="text" value={user?.displayName} name='seller_name' className="input input-bordered col-span-3" />
                                </div>
                                <div className="form-control grid grid-cols-4">
                                    <label className="label col-span-1">
                                        <span className="label-text text-lg font-semibold">Seller Email</span>
                                    </label>
                                    <input type="email" value={user.email} name='seller_email' className="input input-bordered col-span-3" />
                                </div>
                                <div className="form-control grid grid-cols-4">
                                    <label className="label col-span-1">
                                        <span className="label-text text-lg font-semibold">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" name='description' className="input col-span-3 textarea row-2 input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-warning activeBtn bg-amber-600 text-white font-bold">Add Toy</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddToy;