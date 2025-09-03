import React, {  useState } from 'react'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="w-[400px] h-[550px] bg-white rounded-3xl shadow-lg p-6 border-2">
        <div className="text-center mt-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Register</h2>
        </div>
        <div className="flex flex-col gap-4 text-bold ">
          <form onSubmit={handleSubmit} >
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border-none outline-none bg-gray-200 rounded-lg mb-4"
            />
            <input
              type="text"
              placeholder="Enter your Username"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 mb-4 border-none outline-none bg-gray-200 rounded-lg"
            />
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 mb-4 border-none outline-none bg-gray-200 rounded-lg"
            />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 mb-4 border-none outline-none bg-gray-200 rounded-lg"
            />
            <button
              type="submit"
              className="w-full mb-4  p-4 bg-violet-600 hover:bg-violet-700 rounded-lg"
            >
              Submit
            </button>
            <button
              type="button"
              className="w-full p-4  bg-blue-600 hover:bg-blue-700 rounded-lg"
              onClick={()=>navigate("/login")}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register