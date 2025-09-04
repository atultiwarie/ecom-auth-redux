import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";


const Footer = () => {
    const darkMode = useSelector(state =>state.theme.darkMode)
  return (
    <div className={`p-4 text-center ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
      <p>&copy; 2023 E-Commerce. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </div>
  )
}

export default Footer