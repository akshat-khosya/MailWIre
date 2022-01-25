import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
function Navbar() {
  return (
   
      <header className="bg-gray-800 text-gray-200 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Logo />
            
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
           <Link className="mr-5 hover:text-gray-50 cursor-pointer" to="/">Home</Link>
            <Link className="mr-5 hover:text-gray-50 cursor-pointer">Docs</Link>
            <Link className="mr-5 hover:text-gray-50 cursor-pointer">Support</Link>
            <Link className="mr-5 hover:text-gray-50 cursor-pointer" to="signin">Sign in</Link>
          </nav>
          
        </div>
      </header>
    
  );
}

export default Navbar;
