import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/tzL.png'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import 'react-tabs/style/react-tabs.css';
import './Navbar.css/'
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import useCart from '../../../Hook/useCart';
import toast from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogout = () => {
        logOut()
          .then(() => {
            // Code to execute after successful logout
            localStorage.removeItem('TotalPrice');
            toast.success('Successfully logout!');
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        <div className=''>
            <div className='flex justify-between bg-transparent w-full'>
                <div className=' flex justify-between gap-4 w-fit' >
                    <div><img className='md:block hidden align-center h-16 md:mt-1 rounded-xl my-2' src={logo} /></div>
                    <div className='block md:hidden font-sans'><h4 className='py-2 text-xl font-serif'>Toy Zone</h4>
                    </div>
                </div>
                <div className=' md:w-[50%]  flex items-center'>
                    <input placeholder='Search by Name' className='border rounded-s-full w-[80%] h-12 md:px-4 px-2' /><button className='md:px-6 px-2 text-white bg-amber-500 font-semibold text-lg border h-12 rounded-e-full'>Search</button>
                </div>
                <div className='navbar-end w-28 flex items-center mr-8'>
                    {user ? (
                        <div className="navbar-end flex">
                            <img src={user.photoURL} className='border-2 ms-8 w-12 h-12 rounded-full' />
                        </div>
                    ) : <></>
                    }
                </div>

            </div>
            <div className="navbar flex justify-evenly mx-auto space-x-4">

                <div className="">
                    <div className="dropdown my-2">
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52 ">
                            <li className='font-semibold font-serif '><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/home'>Home</NavLink></li>
                            <li className='font-semibold font-serif '><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/category'>Category</NavLink></li>
                            <li className='font-semibold font-serif '><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/alltoys'>All Toys</NavLink></li>
                            <li className='font-semibold font-serif '><NavLink to='/addtoy'>Add Toy</NavLink></li>
                            <li className='font-semibold font-serif '><NavLink to='/blog'>Blog</NavLink></li>
                            {/* <li className='font-semibold font-serif '><NavLink className={({isActive}) => isActive ? 'active' : ''}to='/blog'>Blog</NavLink></li> */}
                            {user?.email ? (<>
                                <li className='font-semibold font-serif '><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/myToy'>My Toys</NavLink></li>
                                <li className='font-semibold font-serif 'onClick={handleLogout}>Logout</li>
                            </>
                            ) : (
                                <li className='font-semibold font-serif '><NavLink to="/login">Login</NavLink></li>
                            )}
                        </ul>
                    </div>

                </div>
                <div className="navbar-start w-[70%] mx-auto space-x-8 hidden lg:flex justify-center">
                    <ul className="menu font-semibold font-serif menu-horizontal space-x-4 px-1">
                        <li className=''><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/home'>Home</NavLink></li>
                        <li className='font-semibold font-serif '><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/category'>Category</NavLink></li>
                        <li className=''><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/alltoys'>All Toys</NavLink></li>
                        <li className=''><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/addtoy'>Add Toy</NavLink></li>
                        <li className=''><NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/blog'>Blog</NavLink></li>
                        {user?.email ? (
                            <li className='space-x-4'>
                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/myToy'><button className=' font-semibold font-serif '>My Toys</button></NavLink>
                                <button className=" font-serif font-bold rounded-2xl  mx-2" onClick={handleLogout} >Logout</button>
                            </li>
                        ) : (
                            <li className="" ><NavLink to="/login">Login</NavLink></li>
                        )}
                    </ul>
                </div>

                <div className='flex md:gap-8 text-3xl  items-center fixed z-10 md:right-32 right-3'>
                    {/* <span className='relative p-2'>
                        <FaHeart className='text-red-500' />
                        <p className='absolute right-[-8px] bottom-[-6px] text-white bg-amber-500 rounded-full border px-2 text-sm font-semibold'>8</p>
                    </span> */}
                    <span className='relative py-4 px-2 me-[-10px] bg-orange-500 rounded-l-full shadow-xl border'>
                        <NavLink to='/cart'>
                            <FaCartPlus className='text-white' />
                            <p className='absolute right-0 bottom-[-6px] text-white bg-fuchsia-600 rounded-l-full border px-2 text-sm font-semibold'>{cart.length || 0}</p>
                        </NavLink>
                    </span>
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