import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useMyToys from '../../Hook/useMyToys';
import DataTable, { createTheme } from 'react-data-table-component';

const Cart = () => {
    const { user } = useContext(AuthContext);
    const cart = (useMyToys(user?.email))?.toys;
    const [itemCounts, setItemCounts] = useState({});
    const discountPercentage = 10;

    const removeFromCart = (id) => {
        console.log(id);
    }

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
                    {/* <p className="text-sm text-white md:mx-auto">{row.subCategory}</p> */}

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
            // width: '10%',
            cell: (row) => (
                <div className='md:mx-auto'>
                    <button
                        onClick={() => handleCountMinus(row._id)}
                        className='rounded-[40%] w-8 bg-[#5207DE] text-2xl font-bold text-white'
                    >
                        -
                    </button>
                    {' '}
                    {itemCounts[row._id] || 1}{' '}
                    <button
                        onClick={() => handleCountPlus(row._id)}
                        className='rounded-[40%] w-8 bg-[#5207DE] text-2xl font-bold text-white'
                    >
                        +
                    </button>
                </div>
            )
        },
        {
            name: <p className="md:mx-auto">Price</p>,
            sortable: true,
            // width: '1%',
            cell: (row) => (
                <p className='md:mx-auto'>
                    {((parseFloat(row.price) - (parseFloat(row.price) * parseFloat(discountPercentage) / 100)) * (itemCounts[row._id] || 1)).toFixed(2)}
                </p>
            )
        },
        {
            name: <p className="md:mx-auto">Action</p>,
            // width: '15%',
            cell: (row) => (
                <div className='mx-auto text-black'>
                    <button
                        onClick={() => removeFromCart(item._id)}
                        className='bg-red-500 text-white p-2 rounded-lg'
                    >
                        Remove
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
            <div className='flex justify-evenly bg-[#032FB8] text-white p-4'>
                <p className=' text-xl space-x-4'>
                    Total Amount: <span className='font-bold'>$ {total}</span>{' '}
                </p>
                <p className=' text-xl space-x-4'>
                    After Discount: <span className='font-bold'>$ {totalPay}</span>{' '}
                </p>
                <button className='px-4 py-2 activeBtn font-semibold hover:bg-yellow-500 text-white rounded-lg'>
                    PAY
                </button>
            </div>

            <DataTable
                columns={columns}
                data={cart}
                customStyles={customStyles}
                theme="solarized"
                pagination
                paginationComponentOptions={paginationComponentOptions}
                highlightOnHover
            />
        </div>
    );
};

export default Cart;