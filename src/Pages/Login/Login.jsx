/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import img1 from '../../assets/log.jpg';
import app from "../../Firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";
import useTitle from "../../Hook/Hook";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

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
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                toast("Login Successful!")
                navigate(from, { replace: true });
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
                toast("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error ', error.message)
                toast("Login Failed")
            })
    }


    return (
        <div className="bg-fixed h-screen w-full " style={{ background: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            <Helmet>
                <title>Login || Toy Zone</title>
            </Helmet>
            <div className="h-full justify-center md:pt-8 pt-2 items-center bg-slate-500 bg-opacity-40">
                    <div className="text-center w-full rounded-3xl shadow-2xl lg:text-left bg-gradient-to-b from-sky-500">
                        <h1 className="text-2xl px-4 py-2 text-center text-white font-bold uppercase">Sign In</h1>
                    </div>
                <div className="hero-content  w-full flex-col space-y-2">
                    <form  onSubmit={handleLogin} className=" bg-slate-500 bg-opacity-50  pb-8">
                        <div className="card w-full">
                            <div className="card-body">
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Email</span>
                                    </label> */}
                                    <input type="text" placeholder="📧 Enter your email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    {/* <label className="label">
                                        <span className="label-text">Password</span>
                                    </label> */}
                                    <input type="password" placeholder="🔐 Enter your password" name="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className=" border bg-gradient-to-r from-red-600 to-lime-500 text-white font-semibold rounded-lg shadow-xl py-1">Sign In</button>
                                </div>
                            </div>

                        </div>
                        <div className="">
                            <img
                                onClick={handleGoogleSignIn}
                                className="w-56 mx-auto social-button"
                                src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                                alt=""
                            />
                            <label className="label">
                                <span className="label-text text-white text-lg px-4">Do not have an account? <Link to='/register'>
                                    <span className="font-bold text-xl text-blue-900">Sign Up!</span></Link></span>
                            </label>
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
                <ToastContainer />
            </div >
        </div>
    );
};

export default Login;
