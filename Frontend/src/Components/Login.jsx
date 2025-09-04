import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();


    }

  return (
    <>
      <Navbar />
    <div className="h-screen  flex justify-center items-center p-4 ">
      <div className="w-[400px] h-[500px] border-2 rounded-3xl bg-white shadow-lg">
        <div className=" mt-4 text-center">
          <h2 className="text-gray-800 text-2xl font-bold"> Login</h2>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <form onSubmit={handleLogin} className="mt-4 text-bold">
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full p-4 rounded-lg border-none mb-4 bg-gray-200 outline-none"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter your password"
              className="w-full p-4 rounded-lg border-none bg-gray-200 mb-4 outline-none"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <button className="w-full p-4 rounded-lg border-none bg-blue-400 hover:bg-blue-500 mb-4">
              Login
            </button>
            <button className="w-full p-4 rounded-lg border-none bg-gray-300 hover:bg-gray-400 mb-4">
              Continue with Google
            </button>
            <button className="w-full p-4 rounded-lg border-none bg-violet-700 hover:bg-violet-600"
                onClick={()=>navigate('/register')}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login