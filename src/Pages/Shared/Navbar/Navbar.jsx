// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../public/tz.jpg'
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext);
    const user = {email: 'aa@aa.aa', password: 'aaaaaa'};
    // console.log(user?.email);
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };

    return (
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
                        <li><a>Add a Toy</a></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>

                </div>
                <div><img className='ms-4 w-20 rounded-full border-2 shadow-lg' src={logo} /></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-8 px-1">
                    <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><Link to='/'>Home</Link></li>
                    <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><a>All Toys</a></li>
                    <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><a>My Toys</a></li>
                    <li className='bg-cyan-300 rounded-2xl text-red-700 font-bold'><Link to='/alltoys'>All Toys</Link></li>
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
                        <button className="btn mx-2"  onClick={handleLogout} >Logout</button>
                    </li>
                ) : (
                    <Link to="/login">
                        <button className="btn mx-2" >Login</button>
                    </Link>
                )}

            </div>
            <div className="navbar-end  pe-8">
                <FaUserCircle className='border border-4 w-[60px] h-[60px]'></FaUserCircle>
            </div>
        </div>
    );
};

export default Navbar;