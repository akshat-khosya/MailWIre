import React from 'react';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <section className="overflow-y-auto  body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-stone-50 ">Build Secure apps
          <br className="hidden lg:inline-block"/>with MailWire
        </h1>
        <p className="mb-8 text-stone-200 leading-relaxed">Verfiy your client just using MailWire API, are you tired of send html mail just use our service.</p>
        
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Docs</button>
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><Link to="/signin">Sign in</Link></button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src={logo}/>
      </div>
    </div>
  </section>
  );
}

export default Home;
