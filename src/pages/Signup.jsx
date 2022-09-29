import React, { useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Signup = () => {
  const navigate = useNavigate();

  const { signUp } = useAuthContext();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      return;
    } else {
      try {
        await signUp(emailRef.current.value, passwordRef.current.value);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="relative bg-loginBg min-h-screen w-screen bg-cover flex justify-center  ">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="z-[100] w-[400px] bg-black/50 p-10 mt-[70px]">
        <h1 className="text-[2.5rem] font-bold">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={emailRef}
            className="block w-full mt-4 mb-3 p-3 bg-gray-700 outline-none rounded"
            type="email"
            placeholder="Email or Phone number"
          />
          <input
            ref={passwordRef}
            className="block w-full p-3 bg-gray-700 outline-none rounded"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-600 w-full text-white py-2 mt-7 font-bold rounded">
            Sign Up
          </button>
        </form>
        <div className="flex justify-between items-center mt-2">
          <span className="flex">
            <input type="checkbox" />
            <p className="ml-1">Remember Me</p>
          </span>
          <p>Need Help?</p>
        </div>
        <div className="flex items-center mt-12 mb-4">
          <FaFacebook className="bg-blue-700 mr-2" />
          <p>Login with Facebook</p>
        </div>
        <div className="flex items-center mb-4">
          <p>Have an account? </p>
          <Link className="ml-2 font-bold text-[1.2rem]" to={"/login"}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
