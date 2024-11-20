import React, { useState } from 'react';
import Header from './Header';
import bg from '../sources/bg.jpg';

const Login = () => {
  const [isSignInForm, setSignInForm]=useState(true);

    const toggleSignInForm=()=>{
      setSignInForm(!isSignInForm);
    }

  return (
    <div className="relative h-screen w-full">   
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
      </div>
      
      {/* Centered Login Form */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-8 bg-black bg-opacity-85 text-white rounded-md shadow-lg flex flex-col">
          <h2 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign in":"Sign Up"}</h2>
          
          {/* Email Input */}
          {!isSignInForm && (<input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-2 rounded-md bg-transparent border border-white-500 focus:outline-none focus:ring-2 focus:ring-white-700"
          />)}
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 mb-2 bg-transparent rounded-md border border-white-500 focus:outline-none focus:ring-2 focus:ring-white-700"
          />
           <input
            type="password"
            placeholder="Password"
            className="p-3 mb-6 rounded-md bg-transparent border border-white-500 focus:outline-none focus:ring-2 focus:ring-white-700"
          />
          
          {/* Sign In Button */}
          <button className="p-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
          {isSignInForm ? "Sign in":"Sign Up"}
          </button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now.":"Already Ragistered? Sign In Now."}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
