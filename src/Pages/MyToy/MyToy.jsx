import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';
import MyToyCard from './MyToyCard';
import { AuthContext } from '../../Providers/AuthProvider';
import { Helmet } from 'react-helmet';
import DataTable, { createTheme } from 'react-data-table-component';
import { FaCartPlus, FaTrashAlt } from 'react-icons/fa';


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const toys = useLoaderData();
    console.log(toys);
    const   handleRemoveToy = (product) => {
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
            name: <p className="md:mx-auto">Quantity</p>,
            sortable: true,
            width: '10%',
            cell: (row) => (
                <p className='md:mx-auto'>{row.quantity}</p>
            )
        },

        {
            name: <p className="md:mx-auto">Seller</p>,
            width: '20%',
            cell: (row) => (
                <div className='text-center mx-auto'>
                    <p className='md:mx-auto'>{row.sellerName}</p>
                    <p className='md:mx-auto text-xs'>{row.sellerEmail}</p>
                </div>
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
            name: <p className='text-center mx-auto'>Remove</p>,
            cell: (row) => (
                <div className='mx-auto'>
                    <button onClick={() =>   handleRemoveToy(row._id)} className=' p-2 active  md:mx-auto'><FaTrashAlt className='text-3xl text-red-500' /> </button>
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
        <div>
            <Helmet>
                <title>My Toy | Toy Zone</title>
            </Helmet>


            <DataTable
                            columns={columns}
                            data={toys}
                            customStyles={customStyles}
                            theme="solarized"
                            pagination
                            paginationComponentOptions={paginationComponentOptions}
                            highlightOnHover
                        />
        </div>
    );
};

export default MyToy;