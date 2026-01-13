import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser()
   
      .then(() => {
        toast.success("Log Out Successfully");
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        toast.error("Error During Logout");
      });
  };
  const links = (
    <>
      <li>
        <Link to={"/"}> Home </Link>
      </li>
      <li>
        <Link to={"/models"}>All Models</Link>
      </li>
      {user && (
        <li>
          <Link to={"/addmodels"}> Add Models</Link>
        </li>
      )}
      <li>
        <Link to={"/register"}>Registration</Link>
      </li>
      <li>
        <Link to={"/login"}>Log In</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-br from-black-300 via-purple-500 to-slate-500 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">AI HUB </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            {/* <img src={user?.photoURL} alt="" /> */}
            {/* <p>{user?.email} </p> */}
            {/* <div className="dropdown dropdown-left dropdown-hover">
              <img className="mask mask-circle w-18" src={user?.photoURL} />
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-2  w-52 p-2 shadow-sm"
              >
                <li> {user?.displayName} </li>
                <li>{user?.email} </li>
                <li> Model Purchased </li>
                <li> My Model </li>
              </ul>
            </div> */}
            {/* <div className="dropdown dropdown-left dropdown-hover">
              <img
                className="mask mask-circle w-12 h-12 object-cover ring-2 ring-blue-500 ring-offset-2 cursor-pointer hover:ring-4 transition-all"
                src={user?.photoURL}
                alt="User"
              />
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-2xl z-50 w-64 p-4 shadow-2xl border border-gray-200"
              >
                <li className="mb-3 pb-3 border-b border-gray-200">
                  <div className="flex items-center gap-3 pointer-events-none">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={user?.photoURL}
                      alt="User"
                    />
                    <div>
                      <p className="font-bold text-gray-800">
                        {user?.displayName}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                </li>

                <li>
                  <a className="hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium">
                    📦 Model Purchased
                  </a>
                </li>
                <li>
                  <a className="hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium">
                    🤖 My Model
                  </a>
                </li>

                <li className="mt-2 pt-2 border-t border-gray-200">
                  <a
                    onClick={handleLogOut}
                    className="hover:bg-red-50 hover:text-red-600 rounded-lg font-medium text-red-600"
                  >
                    🚪 Sign Out
                  </a>
                </li>
              </ul>
            </div> */}

            <div className="dropdown dropdown-left dropdown-hover">
              <img
                className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2 cursor-pointer hover:ring-blue-600 hover:ring-4 transition-all"
                src={user?.photoURL}
                alt="User"
              />
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-2xl z-50 w-64 p-4 shadow-2xl border border-gray-200"
              >
                {/* User Info Header */}
                <li className="mb-3 pb-3 border-b border-gray-200 pointer-events-none hover:bg-transparent">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-gray-800 text-base">
                      {user?.displayName}
                    </p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </li>

                {/* Menu Items */}
                <li>
                  <a className="hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium py-2.5">
                    📦 Model Purchased
                  </a>
                </li>
                <li>
                  <a className="hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium py-2.5">
                    🤖 My Model
                  </a>
                </li>

                {/* Logout Button */}
                <li className="mt-2 pt-2 border-t border-gray-200">
                  <a className="hover:bg-red-50 hover:text-red-600 rounded-lg font-medium text-red-600 py-2.5">
                    🚪 Sign Out
                  </a>
                </li>
              </ul>
            </div>

            <a onClick={handleLogOut} className="btn ml-4">
              Log Out
            </a>
          </>
        ) : (
          <Link to={"/login"} className="btn ml-4">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
