import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../Redux/slices/darkModeSlice"; 

const Navbar = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex justify-between items-center p-3 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
    >
      <div>
        <Link
          to="/"
          className="text-4xl p-2 hover:text-blue-600 hover:underline"
        >
          Logo
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          className={`p-2 border-2 rounded-md outline-none w-[500px] ${
            darkMode
              ? "bg-gray-700 text-white placeholder-white"
              : "bg-white text-black placeholder-gray-500"
          }`}
        />
      </div>
      <ul className="flex  gap-6 text-2xl p-2">
        <li>
          <Link
            to="/"
            className="cursor-pointer hover:text-blue-600 hover:underline"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/carts"
            className="cursor-pointer hover:text-blue-600 hover:underline"
          >
            Carts
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="cursor-pointer hover:text-blue-600 hover:underline"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="cursor-pointer hover:text-blue-600 hover:underline"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="cursor-pointer hover:text-blue-600 hover:underline"
          >
            Login/Signup
          </Link>
        </li>
      </ul>
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="rounded bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
      >
        Toggle {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default Navbar