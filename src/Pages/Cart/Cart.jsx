import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import DataTable, { createTheme } from 'react-data-table-component';
import Swal from 'sweetalert2';
import useCart from '../../Hook/useCart';
import { FaClock, FaShoppingBag, FaTag, FaTrashAlt, FaTruck, FaWallet } from 'react-icons/fa';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const [itemCounts, setItemCounts] = useState({});
    const discountPercentage = 10;

    const removeFromCart = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-zone-server-new.vercel.app/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    const handleCountPlus = (index) => {
        setItemCounts((prevCounts) => {
            const newCounts = { ...prevCounts };
            newCounts[index] = (newCounts[index] || 0) + 1;
            return newCounts;
        });
    };

    const handleCountMinus = (index) => {
        setItemCounts((prevCounts) => {
            const newCounts = { ...prevCounts };
            newCounts[index] = Math.max((newCounts[index] || 0) - 1, 1);
            return newCounts;
        });
    };

    const calculateTotalAmount = () => {
        return cart.reduce(
            (total, item) =>
                total +
                ((parseFloat(item.price)) * (itemCounts[item._id] || 1)),
            0
        ).toFixed(2);
    };

    const calculateTotalPay = () => {
        return cart.reduce(
            (total, item) =>
                total +
                ((parseFloat(item.price) - (parseFloat(item.price) * parseFloat(discountPercentage) / 100)) * (itemCounts[item._id] || 1)),
            0
        ).toFixed(2);
    };

    const total = calculateTotalAmount();
    const totalPay = calculateTotalPay();

    const columns = [
        {
            // name: <p className="md:mx-auto">#</p>,
            selector: (row, index) => <div className=' mx-2'>{index + 1}</div>,
            // sortable: true,
            width: '8%',
        },
        {
            // name: <p className="md:mx-auto">Photo</p>,
            width: '25%',
            cell: (row) => (

                <div className="md:mx-auto ">
                    <img className=" active p-1 w-32 h-24" src={row.picture} alt="Toy" />
                </div>
            )
        },
        {
            // name: <p className="">Name</p>,
            width: '25%',
            cell: (row) => (
                <div className='space-y-2'>
                    <p className="font-semibold md:mx-auto">{row.name}</p>
                    <p className=" md:mx-auto "><span className='line-through me-2'>${row.price}</span> ${((parseFloat(row.price) - (parseFloat(row.price) * parseFloat(discountPercentage) / 100))).toFixed(2)}</p>

                </div>
            )
        },
        // {
        //     name: <p className="md:mx-auto">Price ($)</p>,
        //     sortable: true,
        //     // width: '10%',
        //     cell: (row) => (
        //         <p className="font-bold md:mx-auto text-center">$ {row.price}</p>
        //     )
        // },
        // {
        //     name: <p className="">Discount</p>,
        //     sortable: true,
        //     width: '10%',
        //     cell: (row) => (
        //         <p className=''>10%</p>
        //     )
        // },
        {
            // name: <p className="">Quantity</p>,
            sortable: true,
            width: '30%',
            cell: (row) => (
                <div className='space-y-2'>
                    <p className='text-center border-b pb-2 font-bold'>
                        $ {((parseFloat(row.price) - (parseFloat(row.price) * parseFloat(discountPercentage) / 100)) * (itemCounts[row._id] || 1)).toFixed(2)}
                    </p>
                    <div className='md:mx-auto'>
                        <button
                            onClick={() => handleCountMinus(row._id)}
                            className=' w-8 active rounded hover:bg-amber-100 hover:text-black text-2xl font-bold text-white'
                        >
                            -
                        </button>
                        <span className='px-4'>

                            {itemCounts[row._id] || 1}
                        </span>
                        <button
                            onClick={() => handleCountPlus(row._id)}
                            className='rounded active w-8 text-2xl font-bold text-black hover:bg-amber-100 hover:text-black'
                        >
                            +
                        </button>
                    </div>
                </div>
            )
        },
        // {
        //     name: <p className="md:mx-auto">Subtotal</p>,
        //     sortable: true,
        //     // width: '1%',
        //     cell: (row) => (
        //         <p className='md:mx-auto'>
        //             {((parseFloat(row.price) - (parseFloat(row.price) * parseFloat(discountPercentage) / 100)) * (itemCounts[row._id] || 1)).toFixed(2)}
        //         </p>
        //     )
        // },
        {
            // name: <p className="md:mx-auto">Action</p>,
            width: '8%',
            cell: (row) => (
                <div className='mx-auto text-black'>
                    <button
                        onClick={() => removeFromCart(row._id)}
                        className='text-red-600 p-2 rounded-lg'
                    >
                        <FaTrashAlt className='md:text-xl text-lg'/>
                    </button>

                </div>
                // <button className='btn activeBtn bg-amber-600 btn-warning text-white md:mx-auto'>Details</button>
            )
        },
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
                display: 'none',
                // padding: '14px',
                // backgroundColor: 'lightgray',
                // fontSize: '16px',
                // fontWeight: 'semibold'
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
            primary: 'black',
            secondary: '#2aa198',
        },
        background: {
            default: '#FBEEFF',
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
        <div className='md:flex gap-4'>
            <div className='md:w-[60%]'>
                <h1 className='py-2 px-4 font-semibold bg-yellow-400 text-xl flex gap-4 items-center'><FaShoppingBag /> Cart Items</h1>
                <DataTable
                    columns={columns}
                    data={cart}
                    noTableHead
                    customStyles={customStyles}
                    theme="solarized"
                    // pagination
                    // paginationComponentOptions={paginationComponentOptions}
                    highlightOnHover
                />
            </div>
            <div className='md:w-[40%]'>
                <div className='border rounded-lg bg-[#FBEEFF] mb-2'>
                    <h1 className='py-2 px-4 font-semibold bg-yellow-400 text-xl flex gap-4 items-center'><FaTag /> Coupon</h1>
                    <div className='py-4 px-2 space-x-4'>
                        <input className='border h-8 w-[70%] rounded px-4 shadow' placeholder='Coupon Code' type="text" />
                        <button className='rounded py-1 px-4 w-[25%] activeBtn hover:bg-green-500  bg-amber-500 text-white font-bold'>Apply</button>
                    </div>
                </div>
                <div className='border rounded-lg bg-[#FBEEFF] mb-2'>
                    <h1 className='py-2 px-4 font-semibold bg-yellow-400 text-xl flex gap-4 items-center'><FaTruck /> Delivery Location</h1>
                    <div className='py-4 px-2 space-x-4'>
                        <input className='border h-8 w-[70%] rounded px-4' placeholder='Address' type="text" />
                        <button className='rounded py-1 px-4 w-[25%] border shadow activeBtn hover:bg-green-500  bg-amber-500 text-white font-bold'>Add</button>
                    </div>
                </div>
                <div className='border rounded-lg bg-[#FBEEFF] mb-2'>
                    <h1 className='py-2 px-4 font-semibold bg-yellow-400 text-xl flex gap-4 items-center'><FaWallet /> Payment Method</h1>
                    <div className='py-4 px-2 flex justify-between gap-4'>
                        <div className='w-full flex items-center gap-4 font-semibold'>
                            <input type="radio" name="radio-1" className="radio-xs" checked />Online Payment
                        </div>
                        <div className='w-full flex items-center gap-4 font-semibold'>
                            <input type="radio" name="radio-1" className="radio-xs" /> Cash on Delivery
                        </div>
                    </div>
                </div>
                <div className='border rounded-lg bg-[#FBEEFF] mb-2'>
                    <h1 className='py-2 px-4 font-semibold bg-yellow-400 text-xl flex gap-4 items-center'><FaClock /> Expected Delivery Date & Time</h1>
                    <div className='py-4 px-2 flex justify-between gap-4'>
                        <div className='w-full text-center font-semibold'>
                            <input type="date" name="date" className="" />
                        </div>
                        <div className='w-full text-center font-semibold'>
                            <input type="time" name="time" className="" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='p-4 bg-[#FBEEFF] mb-2'>
                    <div className="flex flex-col space-y-4 mb-2">
                        <div className="flex justify-between px-2">
                            <p>Total Price:</p>
                            <p className="font-bold">$ {total}</p>
                        </div>
                        <div className="flex justify-between px-2">
                            <p>Discount:</p>
                            <p className="font-bold">$ {(total - totalPay).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between px-2">
                            <p>Price After Discount:</p>
                            <p className="font-bold">$ {totalPay}</p>
                        </div>
                        <div className="flex justify-between px-2">
                            <p>Coupon Discount:</p>
                            <p className="font-bold">$ 00</p>
                        </div>
                        <div className="flex justify-between px-2">
                            <p>VAT Amount:</p>
                            <p className="font-bold">$ {(totalPay * 0.05).toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between px-2">
                            <p>Delivery Charge:</p>
                            <p className="font-bold">$ 6</p>
                        </div>
                        <div className="flex justify-between bg-zinc-300 p-2">
                            <p className='font-bold text-lg'>Total</p>
                            <p className="font-bold text-lg">$ {(parseFloat(totalPay) + parseFloat(totalPay * 0.05) + 6).toFixed(2)}</p>
                        </div>
                    </div>
                    <hr />
                    <div className='p-4 text-center'>
                        <div className='my-auto font-semibold'>
                            <input
                                type="checkbox"
                                className="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />{' '}
                            I accept the <span className='text-blue-500'>Terms & Conditions</span>
                        </div>
                    </div>

                    <button
                        className={`px-4 py-2 activeBtn font-semibold ${!isChecked ? 'opacity-50': ''} bg-yellow-500 rounded-lg uppercase w-full`}
                        disabled={!isChecked}
                    >
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;