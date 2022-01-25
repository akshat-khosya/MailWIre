import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Logo from "./Logo";
function Navbar() {
  const [theme,setTheme]=useState(localStorage.getItem('theme')||true);
  const changeTheme=()=>{
    if(theme){
      setTheme(!theme);
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme',theme);
    }else{
      setTheme(!theme);
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme',theme);
    }
  }
  return (
    <header className="bg-gray-800 dark:bg-white-800 dark:text-white-200 text-gray-200 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-50 cursor-pointer" to="/">
            Home
          </Link>
          <Link className="mr-5 hover:text-gray-50 cursor-pointer" to="/">
            Docs
          </Link>
          <Link className="mr-5 hover:text-gray-50 cursor-pointer" to="/">
            Support
          </Link>
          <Link className="mr-5 hover:text-gray-50 cursor-pointer" to="/signin">
            Sign in
          </Link>
          <a onClick={changeTheme} className="mr-5 hover:text-gray-50 px-4 cursor-pointer">
            <span className="material-icons">{theme?"dark_mode":"light_mode"}</span>
          </a>
         
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
