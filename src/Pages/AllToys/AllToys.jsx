// import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import useTitle from "../../Hook/Hook";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaCartPlus } from 'react-icons/fa';
import { CiViewTable } from "react-icons/ci";
import { MdOutlineGridView } from "react-icons/md";
import { Toaster, toast } from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
// import { Helmet } from "react-helmet-async";

const AllToys = () => {
    const toys = useLoaderData();
    const discountPercentage = 10;
    const [alltoy, setAllToy] = useState(toys);
    const [searchText, setSearchText] = useState("");
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [gridView, setGridView] = useState(true);
    useTitle("All Toys");

    useEffect(() => {
        const filtered = toys.filter((item) => {
            return item.name.toLowerCase().match(searchText.toLocaleLowerCase());
        })
        const priceFiltered = filtered.filter((product) => {
            const price = parseFloat(product.price);
            const min = minPrice === '' ? Number.NEGATIVE_INFINITY : parseFloat(minPrice);
            const max = maxPrice === '' ? Number.POSITIVE_INFINITY : parseFloat(maxPrice);
            return price >= min && price <= max;
        });
        setAllToy(priceFiltered);
    }, [searchText, minPrice, maxPrice, toys]);

    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the array based on the current page
    const currentObjects = alltoy.slice(startIndex, endIndex);

    const totalPages = Math.ceil(alltoy.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleAddCart = (product) => {
        toast.success(`${product.name} added to cart.`, { position: 'top-right' });
        console.log(product);
    }

    const columns = [
        {
            name: <p className="md:mx-auto">#</p>,
            selector: (row, index) => <div className=' mx-2'>{index + 1}</div>,
            // sortable: true,
            width: '8%',
        },
        {
            name: <p className="md:mx-auto">Photo</p>,
            // width: '17%',
            cell: (row) => (

                <div className="md:mx-auto ">
                    <img className=" active p-1 w-32 h-24" src={row.picture} alt="Toy" />
                </div>
            )
        },
        {
            name: <p className="md:mx-auto">Name & Category</p>,
            width: '18%',
            cell: (row) => (
                <div className='mx-auto text-center space-y-2'>
                    <p className="text-semibold text-white md:mx-auto">{row.name}</p>
                    <p className="text-sm text-white md:mx-auto">{row.subCategory}</p>

                </div>
            )
        },
        {
            name: <p className="md:mx-auto">Price ($)</p>,
            sortable: true,
            // width: '10%',
            cell: (row) => (
                <p className="font-bold md:mx-auto text-center">$ {row.price}</p>
            )
        },
        {
            name: <p className="md:mx-auto text-center">Discount (%)</p>,
            sortable: true,
            // width: '12%',
            cell: (row) => (
                <p className='md:mx-auto'>10%</p>
            )
        },
        {
            name: <p className="md:mx-auto">Quantity</p>,
            sortable: true,
            width: '10%',
            cell: (row) => (
                <p className='md:mx-auto'>{row.quantity}</p>
            )
        },
        {
            name: <p className="md:mx-auto">Rating</p>,
            sortable: true,
            width: '10s%',
            cell: (row) => (
                <p className='md:mx-auto'>{row.rating}</p>
            )
        },
        {
            name: <p className="md:mx-auto">Seller</p>,
            width: '15%',
            cell: (row) => (
                <p className='md:mx-auto'>{row.sellerName}</p>
            )
        },
        {
            name: <p className="md:mx-auto">Action</p>,
            // width: '15%',
            cell: (row) => (
                <div className='mx-auto text-black'>
                    <label htmlFor={row._id} className="btn activeBtn bg-amber-600 btn-warning text-white md:mx-auto">Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={row._id} className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box gap-4">
                            <div className='gap-4 text-sm flex text-left'>
                                <div>
                                    <img className='active p-1 rounded-lg mb-4 w-full md:h-[200px] h-[100px]' src={row.picture} alt="" />
                                </div>
                                <div className='md:pt-4 pt-2 space-y-1 '>
                                    <p className="font-bold md:text-xl mb-2">{row.name}</p>
                                    <p className=''><span className='font-semibold'>Price:</span> ${row.price}</p>
                                    <p className=''><span className='font-semibold'>Rating:</span> {row.rating}</p>
                                    <p><span className='font-semibold'>Quantity:</span> {row.quantity}</p>
                                    <p><span className='font-semibold'>Seller Name:</span> {row.sellerName}</p>
                                    <p><span className='font-semibold'>Seller Email:</span> {row.sellerEmail}</p>
                                </div>
                            </div>
                            <div className='text-sm px-4 space-y-2 text-left'>
                                <p className='text-sm'>{row.details}</p>
                            </div>
                            <div>
                                <div className="modal-action">
                                    <label htmlFor={row._id} className="btn p-2 text-white bg-gradient-to-t from-red-500 to-red-700 btn-sm">X</label>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                // <button className='btn activeBtn bg-amber-600 btn-warning text-white md:mx-auto'>Details</button>
            )
        },
        {
            name: <p>Add to Cart</p>,
            cell: (row) => (
                <div className='mx-auto'>
                    <button onClick={() => handleAddCart(row)} className=' p-2 active  md:mx-auto'><FaCartPlus className='text-3xl text-fuchsia-500' /> </button>
                </div>
            )
        }
    ];
    const customStyles = {
        table: {
            style: {
                overflow: true,
            },
        },
        rows: {
            style: {
                minHeight: '80px',
                fontSize: '16px',
                padding: '5px'
            },
        },
        headCells: {
            style: {
                padding: '14px',
                backgroundColor: 'lightgray',
                fontSize: '16px',
                fontWeight: 'semibold'
            },
        },
        cells: {
            style: {
                padding: '5px',
                fontSize: '18px'
            },
        },
        pagination: {
            style: {
                backgroundColor: 'gray',
                color: 'darkblue',
                width: '100%',
                display: 'flex',
                justifyContent: 'left'

            },
            pageButtonsStyle: {
                backgroundColor: 'black',
                color: 'darkblue',
            },
            pageButtonsActiveStyle: {
                backgroundColor: 'lightblue',
                color: 'darkblue',
            },
            pageButtonsDisabledStyle: {
                backgroundColor: 'lightgray',
                color: 'gray',
            },
            pageButtonsHoverStyle: {
                backgroundColor: 'gray',
                color: 'darkblue',
            },
            currentPageStyle: {
                backgroundColor: 'lightcyan',
                color: 'darkblue',
            },
            pageSizeOptionsStyle: {
                backgroundColor: 'red',  // Set the background color to red
                color: 'white',           // Set the text color to white
                width: '100px',           // Set the width of the dropdown
            },

        }
    };
    createTheme('solarized', {
        text: {
            primary: '#268bd2',
            secondary: '#2aa198',
        },
        background: {
            default: '#002b36',
        },
        context: {
            background: '#cb4b16',
            text: '#FFFFFF',
        },
        divider: {
            default: '#073642',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'rgba(0,0,0,.08)',
            disabled: 'rgba(0,0,0,.12)',
        },
    }, 'dark');
    const paginationComponentOptions = {
        rowsPerPageText: 'Rows per page:', // Text displayed before the rows per page select field
        rangeSeparatorText: 'of', // Text displayed between the page range
        selectAllRowsItem: true, // Display an option to select all rows
        selectAllRowsItemText: 'All', // Text displayed for the "Select All" option
        noRowsPerPage: false, // Do not display the rows per page options if there is only one page
    };

    return (
        <div className="px-2">
            <div className='md:flex space-y-4 md:space-y-0 justify-between md:px-8 px-2 py-2 shadow-xl border-b-2 mb-4'>
                <div className='md:w-fit'>
                    <input
                        type='text'
                        className='form-control border-2 rounded p-2 h-12 active'
                        placeholder=' Search by Name'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="number"
                        placeholder="Min Price"
                        onChange={(e) => setMinPrice(e.target.value)}
                        className="border text-black rounded-lg p-2 mr-2 shadow-xl"
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        onChange={(e) => setMaxPrice(e.target.value)}
                        className="border text-black rounded-lg p-2 shadow-xl"
                    />
                </div>
                <div className='flex items-center  gap-4 text-lg'>
                    <MdOutlineGridView onClick={() => setGridView(true)} className={gridView ? "text-green-500 text-3xl" : " text-3xl text-red-500"} />
                    <CiViewTable onClick={() => setGridView(false)} className={gridView ? "text-red-500 text-3xl" : " text-3xl text-green-500"} />
                </div>

            </div>
            <div>
                {
                    !gridView ?
                        <DataTable
                            columns={columns}
                            data={alltoy}
                            customStyles={customStyles}
                            theme="solarized"
                            pagination
                            paginationComponentOptions={paginationComponentOptions}
                            highlightOnHover

                        />
                        :
                        <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                            {currentObjects.map((product) => (
                                <div key={product.id} className="relative border p-4 shadow-xl space-y-2 bg-gradient-to-b from-teal-100">
                                    {/*Modal Start*/}
                                    <label htmlFor={product._id} className=""><img className='w-full h-48 hover:scale-[110%]' src={product.picture} alt="" /></label>
                                    <input type="checkbox" id={product._id} className="modal-toggle" />
                                    <div className="modal ">
                                        <div className="modal-box gap-4">
                                            <div className='gap-4 text-sm flex text-left'>
                                                <div>
                                                    <img className='active p-1 rounded-lg mb-4 w-full md:h-[200px] h-[100px]' src={product.picture} alt="" />
                                                </div>
                                                <div className='md:pt-4 pt-2 space-y-1 '>
                                                    <p className="font-bold md:text-xl mb-2">{product.name}</p>
                                                    <p className=''><span className='font-semibold'>Price:</span> ${product.price}</p>
                                                    <p className=''><span className='font-semibold'>Rating:</span> {product.rating}</p>
                                                    <p><span className='font-semibold'>Quantity:</span> {product.quantity}</p>
                                                    <p><span className='font-semibold'>Seller Name:</span> {product.sellerName}</p>
                                                    <p><span className='font-semibold'>Seller Email:</span> {product.sellerEmail}</p>
                                                </div>
                                            </div>
                                            <div className='text-sm px-4 space-y-2 text-left'>
                                                <p className='text-sm'>{product.details}</p>
                                            </div>
                                            <div>
                                                <div className="modal-action">
                                                    <label htmlFor={product._id} className="btn p-2 text-white bg-gradient-to-t from-red-500 to-red-700 btn-sm">X</label>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    {/*Modal End*/}
                                    <p className='font-bold'>{product.name}</p>
                                    <p className='text-lg'><span className='line-through'>${product.price}</span><span className='mx-2 font-bold'>${parseFloat(product.price).toFixed(3) - (parseFloat(product.price).toFixed(3) * parseFloat(discountPercentage).toFixed(3) / 100).toFixed(2)}</span></p>
                                    <p className='absolute top-2 bg-yellow-400 px-4 rounded-r-lg md:w-[50%] p-1 bg-opacity-80 font-semibold'>Save ${(parseFloat(product.price).toFixed(3) * parseFloat(discountPercentage).toFixed(3) / 100).toFixed(2)}</p>
                                    <div className='flex justify-between'>
                                        <p>Stock: <span className='font-semibold'> {product.quantity}</span></p>
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            value={product.rating}
                                            readOnly
                                        />
                                    </div>
                                    <button onClick={() => handleAddCart(product)} className="activeBtn bg-amber-600 flex-end rounded-lg w-full text-white text-center  p-1 mt-4 hover:bg-green-500 hover:text-white">
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                }
            {/* Pagination controls */}
                {
                    gridView ? 
                    <div className='flex justify-center   bottom-0'>
                    <button className='text-3xl text-orange-600'
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <FaArrowAltCircleLeft />
                    </button>
                    <span className='m-4 text-xl'> Page {currentPage} of {totalPages} </span>
                    <button className='text-3xl text-orange-600'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <FaArrowAltCircleRight />
                    </button>
                </div>
                : <></>
                }
            </div>
            <Toaster />
        </div>
    );
};

export default AllToys;