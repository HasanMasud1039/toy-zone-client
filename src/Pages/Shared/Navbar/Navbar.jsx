// import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import logo from '../../../../public/tz.jpg'
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { render } from "react-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import ShowCard from '../../ShowCard/ShowCardToy';
import TabToy from './TabToy';
const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);
    // const user = { email: 'aa@aa.aa', password: 'aaaaaa' };
    // console.log(user?.email);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };
    const userLogin = JSON.parse(localStorage.getItem('user'));
    // const {displayName, photoURL} = userLogin;
    console.log(userLogin);
    return (
        <div>

            <div>
                <div className="navbar bg-cyan-100 mx-4 rounded-lg">

                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <Link to='/alltoys'>All Toys</Link>
                                <li><a>My Toys</a></li>
                                <li><Link to='/addtoy'>Add Toy</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                            </ul>

                        </div>
                        <div><img className='ms-4 w-20 rounded-full border-2 shadow-lg' src={logo} /></div>
                        <h4 className='mx-6 border-1 shadow-2xl rounded-lg p-4 font-serif border-sky-100 text-2xl font-bold text-red-600'>Toy Zone</h4>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-8 px-1">
                            <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><Link to='/'>Home</Link></li>
                            <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><Link to='/alltoys'>All Toys</Link></li>
                            <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><li><Link to='/addtoy'>Add Toy</Link></li></li>
                            <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><a>My Toys</a></li>
                            <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><Link to='/blog'>Blog</Link></li>
                        </ul>
                        {/* <button className='bg-cyan-300 px-4 py-3 ms-4 rounded-2xl text-red-700 font-bold'>
    <Link to='/login'>
        Login
    </Link>
    </button> */}

                        {user?.email ? (
                            <li>
                                {/* <button onClick={handleLogout}>Logout</button> */}
                                <Link to='/myToys'><button className='btn bg-cyan-300 rounded-2xl text-red-700 font-bold me-8'>My Toys</button></Link>
                                <button className="btn bg-cyan-300 rounded-2xl text-red-700 font-bold mx-2" onClick={handleLogout} >Logout</button>
                            </li>
                        ) : (
                            <Link to="/login">
                                <button className="btn bg-cyan-300 rounded-2xl text-red-700 font-bold mx-2" >Login</button>
                            </Link>
                        )}

                    </div>
                    {user?.email ? ( 
                        <div className="navbar-end  pe-8">
                            <p>{userLogin.displayName}</p>
                            {/* <FaUserCircle className='border border-4 w-[60px] h-[60px]'></FaUserCircle> */}
                            <img src={userLogin.photoURL} className='border border-2 rounded-full ms-4 w-[60px] h-[60px]' />
                        </div>
                            ) : <></>
                    }
                </div>
            </div>
            <div>
                <Tab>
                    <TabList className="d-flex me-8">
                        <Tab><Link to='/category/100'>Sports Car</Link></Tab>
                        <Tab><Link to='/category/300'>Truck</Link></Tab>
                        <Tab><Link to='/category/200'>Regular Car</Link></Tab>
                        <Tab><Link to='/category/400'>Mini Fire Truck</Link></Tab>
                        <Tab><Link to='/category/500'>Mini Police Car</Link></Tab>
                        <Tab><Link to='/category/600'>Limo Car</Link></Tab>
                    </TabList>
                </Tab>

            </div>
        </div>
    );
};


export default Navbar;