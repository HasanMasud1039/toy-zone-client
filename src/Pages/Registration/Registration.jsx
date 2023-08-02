import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hook/Hook';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
// const auth = getAuth(app);
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
  const { registerUser , updateUserProfile} = useContext(AuthContext);
  useTitle("Registration");
  const handleRegistration = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, password);


    // createUserWithEmailAndPassword(auth, email, password)
    registerUser(email, password)
      .then(result => {
        const createdUser = result.user;
        updateUserProfile(result.name, result.photoURL)
        console.log(createdUser);
        toast('Successfully Registered');
      })
      .catch(error => {
        console.log(error.message);
        toast(error.message);
      })
    // console.log(registerUser);
  }


  return (
    <div className="hero min-h-screen bg-gradient-to-b to-slate-800 from-cyan-400">
      <div className="hero-content flex-col space-y-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        {/* <form> */}
        <form onSubmit={handleRegistration}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name='password' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label font-bold">
                <span className="label-text text-lg">Already have an account?
                  <Link to='/login'><span className="ms-2 text-xl text-blue-600">Login</span></Link></span>
              </label>
            </div>
          </div>
        </form>
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
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Registration;


