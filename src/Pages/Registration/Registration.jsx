import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hook/Hook';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import img1 from '../../assets/112.jpg';
import { FaEnvelope, FaImage, FaKey, FaLock, FaUser, FaUserLock } from 'react-icons/fa';

const Registration = () => {
  const { registerUser, updateUserProfile } = useContext(AuthContext);
  useTitle("Registration");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleRegistration = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(email, password);




    // createUserWithEmailAndPassword(auth, email, password)
    registerUser(email, password)
      .then(result => {
        const createdUser = result.user;
        updateUserProfile(result.name, result.photoURL)
        console.log(createdUser);
        toast('Successfully Registered');
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.log(error.message);
        toast(error.message);
      })
  }


  return (
    <div className=" bg-fixed h-screen w-full " style={{ background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <Helmet>
        <title>Sign Up || Toy Zone</title>
      </Helmet>
      <div className="h-full justify-center md:pt-8 pt-2 items-center bg-slate-500 bg-opacity-40">
                    <div className="text-center w-full rounded-3xl shadow-2xl lg:text-left bg-gradient-to-b from-sky-500">
                        <h1 className="text-2xl px-4 py-2 text-center text-white font-bold uppercase">Sign up</h1>
                    </div>
                <div className="hero-content  w-full flex-col space-y-2">
        <form onSubmit={handleRegistration} className="active bg-zinc-300 opacity-90 shadow-2xl pb-8">
          <div className="card flex-shrink-0 w-full">
            <div className="card-body">
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Name</span>
                </label> */}
                <div className='flex items-center gap-4'>
                  <FaUser className='text-2xl text-[#052EFC]' />
                  <input type="text" placeholder="Name" name='name' className="input input-bordered  w-full" />
                </div>
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Email</span>
                </label> */}
                                <div className='flex items-center gap-4'>
                  <FaEnvelope className='text-2xl text-[#D705FC]' />
                <input type="email" placeholder="Email" name='email' className="input input-bordered w-full" />
                </div>
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Password</span>
                </label> */}
                                <div className='flex items-center gap-4'>
                  <FaKey className='text-2xl text-[#F11402]' />
                <input type="password" placeholder="Password" name='password' className="input input-bordered w-full" />
                </div>
              </div>
              <div className="form-control">
                {/* <label className="label">
                  <span className="label-text">Photo URL</span>
                </label> */}
                                <div className='flex items-center gap-4'>
                  <FaImage className='text-2xl text-[#FC8C05]' />
                <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered w-full" />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className=" border bg-gradient-to-r from-[#FC0505] to-[#10FC05] text-white font-semibold rounded-lg shadow-xl py-1">Register</button>
              </div>
              <label className="label ">
                <span className="label-text text-white text-lg px-4">Already have an account?
                  <Link to='/login'><span className="font-bold text-xl text-cyan-400 mx-2">Sign In!</span></Link></span>
              </label>
            </div>
          </div>
        </form>
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

export default Registration;


