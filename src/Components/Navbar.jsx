import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../src/assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Sign Out Sucessfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="">Login-User: {user && user.email}</div>
      <div className="nav flex justify-between items-center gap-5 text-accent font-semibold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-4 items-center">
        <img
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
          className="w-12 rounded-full"
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
