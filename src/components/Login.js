import React, { useRef, useState } from 'react';
import Header from './Header';
import bg from '../sources/bg.jpg';
import checkValidData from '../utils/validate';

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    // Validate inputs
    const message = checkValidData(emailValue, passwordValue);
    if (message) {
      setErrorMessage(message);
    } else {
      setErrorMessage(null);
      console.log('Success:', { email: emailValue, password: passwordValue });
      // Proceed with form submission logic
    }
  };

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
    setErrorMessage(null); // Clear error messages on form toggle
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Centered Login Form */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-8 bg-black bg-opacity-85 text-white rounded-md shadow-lg flex flex-col"
        >
          <h2 className="text-3xl font-bold mb-6">{isSignInForm ? 'Sign In' : 'Sign Up'}</h2>

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">
              {errorMessage}
            </div>
          )}

          {/* Full Name Input (Sign Up Only) */}
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 mb-6 rounded-md bg-[#46494a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Full Name"
            />
          )}

          {/* Email Input */}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 mb-6 bg-[#46494a] rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Email Address"
          />

          {/* Password Input */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-6 rounded-md bg-[#46494a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Password"
          />

          {/* Sign In/Sign Up Button */}
          <button
            className="p-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            onClick={handleButtonClick}
          >
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>

          {/* Toggle Form Type */}
          <p
            className="py-4 cursor-pointer hover:underline text-center"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? 'New to Netflix? Sign Up Now.'
              : 'Already Registered? Sign In Now.'}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
