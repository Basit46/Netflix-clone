import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuthContext();

  const handleLogOut = async () => {
    try {
      await logOut(user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="absolute top-0 left-0 z-[999] w-screen flex justify-between items-center p-3">
      <Link to="/">
        <p className="text-red-600 font-bold text-[2rem]">NETFLIX</p>
      </Link>
      {user ? (
        <div className="flex items-center">
          <Link
            className="text-white mr-2 font-bold text-[1.3rem]"
            to="/account"
          >
            Account
          </Link>
          <div
            onClick={handleLogOut}
            className="text-black bg-red-600 cursor-pointer p-1 font-bold text-[1.3rem] sm:mr-3"
          >
            Log Out
          </div>
        </div>
      ) : (
        <div>
          <Link className="text-white mr-2 font-bold text-[1.3rem]" to="/login">
            Sign In
          </Link>
          <Link
            className="text-black bg-red-600 p-1 font-bold text-[1.3rem] sm:mr-3"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
