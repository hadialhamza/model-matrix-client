import React, { useState } from "react";
import { NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { Menu, X } from "lucide-react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(true);

  const handleSetMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logoutUser = () => {
    logout();
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-1 rounded-full transition-all duration-300
         ${
           isActive
             ? "font-semibold border-2 border-emerald-400 text-emerald-700 bg-emerald-50"
             : "border-2 border-transparent text-gray-800 hover:border-emerald-200 hover:text-emerald-700"
         }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/all-models"
        className={({ isActive }) =>
          `px-3 py-1 rounded-full transition-all duration-300
         ${
           isActive
             ? "font-semibold border-2 border-emerald-400 text-emerald-700 bg-emerald-50"
             : "border-2 border-transparent text-gray-800 hover:border-emerald-200 hover:text-emerald-700"
         }`
        }
      >
        View Models
      </NavLink>

      <NavLink
        to="/add-model"
        className={({ isActive }) =>
          `px-3 py-1 rounded-full transition-all duration-300
         ${
           isActive
             ? "font-semibold border-2 border-emerald-400 text-emerald-700 bg-emerald-50"
             : "border-2 border-transparent text-gray-800 hover:border-emerald-200 hover:text-emerald-700"
         }`
        }
      >
        Add Model
      </NavLink>
    </>
  );

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
                  {menuOpen ? (
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
              <ul>
                <li className="flex items-center gap-2 font-poppins text-gray-800">
                  {navLinks}
                </li>
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
          menuOpen ? "-left-[300px]" : "left-0"
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
