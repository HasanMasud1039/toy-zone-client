/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";

import app from "../../Firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {
    // const [user, setUser] = useState(null);
        const user = {email: 'aa@aa.aa', password: 'aaaaaa'};
        const loginUser = {email: 'aa@aa.aa', password: 'aaaaaa'};
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    // const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error ', error.message)
            })
    }


    return (

        <div className='mx-auto my-4 w-50'>
            <h3>Please Login</h3>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    Email Address
                    <form required type="email" name="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    Password
                    <form required type="password" name="password" placeholder="Password" />
                </div>
                <button type="submit">
                    Login
                </button>
                <br />
                <p className=" mt-4 text-secondary">Dont have an account?
                    <Link to="/register">  Register</Link>
                </p>
            </form>
            <div>
                <div className="">
                    <img
                        onClick={handleGoogleSignIn}
                        className=" social-button"
                        src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
