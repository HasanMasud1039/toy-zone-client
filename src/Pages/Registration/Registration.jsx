import React, { useContext } from 'react';
import {  Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../Hook/Hook';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
const auth = getAuth(app);


const Registration = () => {
    // const { registerUser } = useContext(AuthContext);
    useTitle("Registration");
    const handleRegistration = event => {
                event.preventDefault();
                const form = event.target;
                const name = form.name.value;
                const email = form.email.value;
                const photo = form.photo.value;
                const password = form.password.value;
                console.log(email, password);
        
            
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const createdUser = result.user;
           console.log(createdUser);
        })
        .catch(error => {
            console.log(error.message);
        })
        // console.log(registerUser);
    }


    return (
        <div className="hero min-h-screen bg-base-200">
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
        <label className="label">
            <span className="label-text text-lg">Already have an account? 
            <Link to='/login'><span className="text-blue-600">Login</span></Link></span>
                                </label>
      </div>

    </div>
    </form>
  </div>

  {/* <Form >

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>         
                </Form.Group>
</Form> */}
</div>
    );
};

export default Registration;



// // import React from 'react';

// import { useContext, useState } from "react";
// import { Form, Link } from "react-router-dom";
// // import { AuthContext } from "../../Providers/AuthProvider";

// const Registration = () => {

//     // const { registerUser } = useContext(AuthContext);
//     const [accepted, setAccepted] = useState(false);

//     const handleRegistration = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const photo = form.photo.value;
//         const password = form.password.value;
//         console.log(email, password);
//     }
//     //     registerUser(email, password)
//     //     .then(result => {
//     //         const createdUser = result.user;
           
//     //     })
//     //     .catch(error => {
//     //         console.log(error);
//     //     })
//     // }

//     const handleAccepted = event => {
//         setAccepted(event.target.checked)
//     }


//     return (
//         <div className='mx-auto w-50'>
//             <h3>Please Register</h3>
//             <Form onSubmit={handleRegistration}>

//                 <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control required type="text" name="name" placeholder="Your Name" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPhoto">
//                     <Form.Label>Photo URL</Form.Label>
//                     <Form.Control required type="text" name="photo" placeholder="Your Photo URL" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label>Email address</Form.Label>
//                     <Form.Control required type="email" name="email" placeholder="Enter email" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control required type="password" name="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check onClick={handleAccepted} type="checkbox" name="accept" label={<>Accept <Link to='/terms'> terms and conditions.</Link></>} />
//                 </Form.Group>
//                 <button disabled={!accepted} type="submit">
//                     Register
//                 </button>
//                 <br />
//                 <Form.Text className="text-secondary">Already have an account?  
//                    <Link to="/login">  Login</Link>
//                 </Form.Text>
//                 <br />
//             </Form>
//         </div>
//     );
// };

// export default Registration;