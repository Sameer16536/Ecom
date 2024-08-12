import React from 'react'
import {BrowserRouter,Link, useNavigate} from 'react-router-dom'
const Navbar = () => {

    return (

        
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <Link to="/" className="text-xl font-bold text-gray-700">EcomApp</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
        <div className="flex space-x-4 items-center">
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-2 py-1 border border-gray-300 rounded"
          />
          <Link to="/profile" className="text-gray-700 hover:text-blue-500">Profile</Link>
        </div>
      </nav>
      
    )
}

export default Navbar