import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import { Mail, Menu, User, X } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import Logo from "../logo/Logo";

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(user);

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
          `w-full md:w-auto px-3 py-1 rounded-full transition-all duration-300
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
        to="/models"
        className={({ isActive }) =>
          `w-full md:w-auto px-3 py-1 rounded-full transition-all duration-300
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
          `w-full md:w-auto px-3 py-1 rounded-full transition-all duration-300
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
    <div>
      <div className="bg-base-200 shadow-xl sticky top-0 z-10">
        <div className="px-4 lg:container lg:mx-auto">
          <div className="navbar relative">
            <div className="navbar-start w-full md:w-1/2">
              <Logo />
            </div>
            <div className="navbar-center hidden md:flex">
              <ul>
                <li className="flex items-center gap-2 font-poppins text-gray-800">
                  {navLinks}
                </li>
              </ul>
            </div>
            <div className="navbar-end w-auto md:w-1/2">
              {loading ? (
                <div className="skeleton w-11 h-11 rounded-full"></div>
              ) : user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="avatar cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                    <div className="hidden md:block w-11 rounded-full ring-2 ring-emerald-500 overflow-hidden">
                      <img
                        src={user?.photoURL}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  <div
                    tabIndex={0}
                    className="mt-3 z-50 px-4 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box"
                  >
                    <div className="flex flex-col items-center py-2 min-w-56">
                      <p className="text-lg text-emerald-500 font-semibold flex gap-1">
                        <User /> {user.displayName || "User"}
                      </p>
                      <p className="text-base text-gray-500 break-all mb-3 flex items-center gap-2">
                        <Mail size={18} /> {user.email}
                      </p>
                      <div className="flex flex-col items-center gap-1 text-sm">
                        <NavLink
                          to="/my-purchase"
                          className={({ isActive }) =>
                            `w-full px-12 text-center py-1.5 rounded-full transition-all duration-300 ${
                              isActive
                                ? "font-semibold border-2 border-emerald-400 text-emerald-700 bg-emerald-50"
                                : "border-2 border-transparent text-gray-800 hover:border-emerald-200 hover:text-emerald-700"
                            }`
                          }
                        >
                          My Purchase
                        </NavLink>
                        <NavLink
                          to="/my-models"
                          className={({ isActive }) =>
                            `w-full px-4 text-center py-1.5 rounded-full transition-all duration-300 ${
                              isActive
                                ? "font-semibold border-2 border-emerald-400 text-emerald-700 bg-emerald-50"
                                : "border-2 border-transparent text-gray-800 hover:border-emerald-200 hover:text-emerald-700"
                            }`
                          }
                        >
                          My Models
                        </NavLink>
                        <button
                          onClick={logoutUser}
                          className="btn btn-primary w-full mt-2"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="hidden md:block">
                  <Link to="/login" className="btn btn-primary ml-2 md:ml-4">
                    Login
                  </Link>
                </div>
              )}
              <div className="">
                <button
                  onClick={handleSetMenu}
                  className={`md:hidden btn btn-ghost transition-transform duration-300 ${
                    menuOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  {menuOpen ? (
                    <X strokeWidth={2.5} size={25} />
                  ) : (
                    <Menu strokeWidth={2.5} size={25} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-20"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`px-4 bg-base-200 min-h-screen w-[300px] fixed top-0 ${
          menuOpen ? "left-0" : "-left-[300px]"
        } transition-all duration-500 ease-in-out z-30 md:hidden`}
      >
        <div className="py-4">
          <div className="flex justify-center mb-5">
            <Logo />
          </div>
          <ul>
            <li
              className="flex flex-col items-center space-y-3 text-center"
              onClick={() => setMenuOpen(false)}
            >
              {user ? (
                <div className="flex flex-col items-center w-full">
                  <div className="w-18 rounded-full ring-2 ring-emerald-500 overflow-hidden mb-4">
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "User avatar"}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-lg text-emerald-500 font-semibold flex gap-1">
                    <User /> {user.displayName || "User"}
                  </p>
                  <p className=" text-gray-500 break-all mb-3 flex items-center gap-2">
                    <Mail size={18} /> {user.email}
                  </p>
                  <div className="flex flex-col items-center gap-1 w-full px-2 ">
                    {navLinks}
                    <NavLink
                      to="/my-purchase"
                      className={({ isActive }) =>
                        `w-full md:w-auto px-3 py-1 rounded-full transition-all duration-300 ${
                          isActive
                            ? "font-semibold border-2 border-emerald-400 text-emerald-700 bg-emerald-50"
                            : "border-2 border-transparent text-gray-800 hover:border-emerald-200 hover:text-emerald-700"
                        }`
                      }
                    >
                      My Purchase
                    </NavLink>
                    <NavLink
                      to="/my-models"
                      className={({ isActive }) =>
                        `w-full md:w-auto px-3 py-1 rounded-full transition-all duration-300 ${
                          isActive
                            ? "font-semibold border-2 border-emerald-400 text-emerald-700 bg-emerald-50"
                            : "border-2 border-transparent text-gray-800 hover:border-emerald-200 hover:text-emerald-700"
                        }`
                      }
                    >
                      My Models
                    </NavLink>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1 w-full px-2">
                  {navLinks}
                </div>
              )}
              {user ? (
                <Link
                  to="/"
                  onClick={logoutUser}
                  className="btn btn-primary w-full"
                >
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="btn btn-primary w-full">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
