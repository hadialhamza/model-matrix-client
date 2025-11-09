import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { BarChart, Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const [menu, setMenu] = useState(true);

  const handleSetMenu = () => {
    setMenu(!menu);
  };

  const logoutUser = () => {
    logout();
  };
  return (
    <>
      <div className="bg-base-200 shadow-xl sticky top-0 z-10">
        <div className="container">
          <div className="navbar">
            <div className="navbar-start relative">
              <div className="">
                <button
                  onClick={handleSetMenu}
                  className="md:hidden btn btn-ghost"
                >
                  {menu ? (
                    <Menu strokeWidth={2.5} size={25} />
                  ) : (
                    <X strokeWidth={2.5} size={25} />
                  )}
                </button>
              </div>
              <div>
                <Logo />
              </div>
            </div>
            <div className="navbar-center">
              <ul className="space-x-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </ul>
            </div>
            <div className="navbar-end">
              <button
                onClick={logoutUser}
                className={`${loading ? "btn loading" : "btn btn-primary"}`}
              >
                {user ? "Logout" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-base-200 min-h-screen w-[300px] absolute top-0 ${
          menu ? "-left-[300px]" : "left-0"
        } transition-all duration-500 ease-in-out z-9`}
      >
        <div className="mt-20">
          <ul className="flex flex-col items-center space-y-2 text-center">
            <NavLink className="hover:bg-base-300 w-full p-2 rounded-md" to="/">
              Home
            </NavLink>
            <NavLink
              className="hover:bg-base-300 w-full p-2 rounded-md"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="hover:bg-base-300 w-full p-2 rounded-md"
              to="/register"
            >
              Register
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
