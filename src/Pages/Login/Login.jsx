/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";

import app from "../../Firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../Hook/Hook";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {
     const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle("Login");

    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                toast("Login Successful!")
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                toast("Login Failed")
            })
    }
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser)
                // console.log(loggedInUser);
                localStorage.setItem('user', loggedInUser);
                toast("Login Successful!")
            })
            .catch(error => {
                console.log('error ', error.message)
                toast("Login Failed")
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  space-y-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" name="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>

                        </div>
                    </form>
                    <div className="w-56  border-2">
                        <img
                            onClick={handleGoogleSignIn}
                            className=" social-button"
                            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                            alt=""
                        />
                    </div>
                    <label className="label">
                        <span className="label-text text-lg">Do not have an account? <Link to='/register'>
                            <span className="text-blue-600">Register</span></Link></span>
                    </label>
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
            </div >
        </div>
    );
};

export default Login;
