import React from 'react';

const AddToy = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content py-4 w-[50%] flex-col lg:flex-row-reverse">
                <div className="card w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='picture' className="input input-bordered" />
                        </div>
                        {/* <div className="form-control dropdown dropdown-end">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                            <input type="text" placeholder="Sub-category" name='sub-category' className="input input-bordered" />
                        </div> */}
                        {/* ////// */}

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Sub-Category
                                </label>
                                <div className="relative">
             
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='sub-category' id="grid-state">
                                        <option>Sports Car</option>
                                        <option>Truck</option>
                                        <option>Regular Car</option>
                                        <option>Mini Fire Truck</option>
                                        <option> Mini Police Car</option>
                                        <option>Limo Car</option>  
                                    </select>
                          
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            </div>


                            {/* ///// */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" placeholder="Price" name='price' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" placeholder="Rating Out of 5" name='rating' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" placeholder="Seller Name" name='seller-name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="email" placeholder="Seller Email" name='seller-email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" placeholder="Description" name='description' className="input textarea row-2 input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Toy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
};

            export default AddToy;