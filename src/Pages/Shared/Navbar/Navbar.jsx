// import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../../../../public/tz.jpg'

import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

import 'react-tabs/style/react-tabs.css';

import { ToastContainer, toast } from 'react-toastify';
import './Navbar.css/'
const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
                toast('Successfully logout!')
            });
    };
    const userLogin = user;
    // const userLogin = JSON.parse(localStorage.getItem('user'));
    // const {displayName, photoURL} = userLogin;
    console.log(userLogin);
    return (
        <div>

            <div>
                <div className="navbar py-4 d-flex justify-between space-x-8 pe-8 text-white text-xl  bg-gradient-to-b from-cyan-300 to-cyan-100 rounded-lg">

                    <div className="navbar-start  w-[80%]">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className='font-semibold font-serif '><Link to='/'>Home</Link></li>
                                <li className='font-semibold font-serif '><Link to='/alltoys'>All Toys</Link></li>
                                <li className='font-semibold font-serif '><Link to='/addtoy'>Add Toy</Link></li>
                                <li className='font-semibold font-serif '><Link to='/blog'>Blog</Link></li>
                                {user?.email ? (<>

                                    <li className=''><Link to={`/mytoy/${user.email}`}>My Toys</Link></li>
                                    <li className=''><Link onClick={handleLogout}>Logout</Link></li>
                                </>
                                ) : (
                                    <li className=''><Link to="/login">Login</Link></li>
                                )}
                            </ul>

                        </div>
                        <div className='lg:w-[70%] md:w-[89%] ms-4  flex' >
                            <div><img className='align-center w-[50%]   rounded-full border-2 border-red-200 shadow-lg' src={logo} /></div>
                            <div className='w-64'><h4 className='toy border-2 w-[120%]  shadow-2xl rounded-lg text-center p-4 font-serif border-sky-100 text-3xl  font-bold text-red-600'>Toy Zone</h4></div>
                        </div>
                    </div>
                    <div className="navbar-center  space-x-8 hidden lg:flex">
                        <ul className="menu mx-auto  font-semibold font-serif menu-horizontal space-x-8 px-1">
                            <li className=''><Link to='/'>Home</Link></li>
                            <li className=''><Link to='/alltoys'>All Toys</Link></li>
                            <li className=''><Link to='/addtoy'>Add Toy</Link></li>
                            <li className=''><Link to='/blog'>Blog</Link></li>
                            {/* <li className=''><a>My Toys</a></li> */}
                        </ul>

                        {user?.email ? (
                            <div className='space-x-8'>
                                <Link to={`/mytoy/${user.email}`}><button className=' font-semibold font-serif '>My Toys</button></Link>
                                <button className=" font-serif text-red-500 font-bold rounded-2xl  mx-2" onClick={handleLogout} >Logout</button>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="text-lg font-semibold font-serif  rounded-2xl text-red-700  me-8 btn-red-outline" >Login</button>
                            </Link>
                        )}

                    </div>
                    {user?.email && user?.displayName ? (
                        <div style={{ hover: { backgroundColor: 'red' } }} className="navbar-end w-[10%]  ">
                            {/* <p>{userLogin.displayName}</p> */}
                            <img src={user.photoURL} className='border-2  rounded-full ms-4 w-[60px] h-[60px]' />
                        </div>
                    ) : <></>
                    }
                </div>
            </div>

            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <ToastContainer />
        </div>
    );
};


export default Navbar;