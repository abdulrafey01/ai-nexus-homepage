import React from "react";
import Logo from "../assets/logo.svg";
export default function NavBar() {
  return (
    <div className="sticky z-10 top-0 bg-white w-full shadow-md flex p-4 justify-between  items-center gap-16">
      <div className="flex justify-center gap-4">
        <div className="flex justify-center items-center">
          <img src={Logo} alt="logo" className="w-10 h-10" />
        </div>
        <p className="text-xl sm:text-2xl  font-bold text-[#243E63] hover:text-[#6415ff] cursor-pointer">
          AI Nexus By Bar Group Solutions
        </p>
      </div>
      {/* Links Container */}
      <div className="hidden lg:flex flex-1 justify-between items-center">
        {/* Link */}
        <div className="flex flex-col mt-1 gap-1 justify-center items-center ">
          <p className="text-[#243E63] font-semibold peer   hover:text-[#6415ff]  cursor-pointer">
            About
          </p>
          <div className="bg-[#6415ff]  opacity-0 peer-hover:opacity-100 transition-opacity duration-300 w-full rounded h-[3px]"></div>
        </div>
        {/* Link */}
        <div className="flex flex-col mt-1 gap-1 justify-center items-center ">
          <p className="text-[#243E63] font-semibold peer hover:text-[#6415ff] cursor-pointer">
            Pricing
          </p>
          <div className="bg-[#6415ff] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 w-full rounded h-[3px]"></div>
        </div>
        {/* Link */}
        <div className="flex flex-col gap-1 mt-1 justify-center items-center ">
          <p className="text-[#243E63] font-semibold peer   hover:text-[#6415ff] cursor-pointer">
            Features
          </p>
          <div className="bg-[#6415ff] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 w-full rounded h-[3px]"></div>
        </div>
        {/* Link */}
        <div className="flex flex-col mt-1 gap-1 justify-center items-center ">
          <p className="text-[#243E63] font-semibold peer   hover:text-[#6415ff] cursor-pointer">
            FAQs
          </p>
          <div className="bg-[#6415ff] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 w-full rounded h-[3px]"></div>
        </div>
        {/* Link */}
        <div className="flex flex-col mt-1 gap-1 justify-center items-center ">
          <p className="text-[#243E63] font-semibold peer   hover:text-[#6415ff] cursor-pointer">
            Contact Us
          </p>
          <div className="bg-[#6415ff] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 w-full rounded h-[3px]"></div>
        </div>
        {/* Link */}
        <div className="flex flex-col mt-1 gap-1 justify-center items-center ">
          <p className="text-[#243E63] font-semibold peer   hover:text-[#6415ff] cursor-pointer">
            Login
          </p>
          <div className="bg-[#6415ff] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 w-full rounded h-[3px]"></div>
        </div>

        {/* SignupButton */}
        <button className="px-10 py-2 bg-[#6415ff] text-white rounded-full font-semibold hover:bg-[#4910bb]">
          Sign Up
        </button>
      </div>
      {/* Hamburger */}
      <div className="flex lg:hidden flex-col justify-center items-center w-6 gap-1 cursor-pointer">
        <div className="bg-[#243E63] w-full rounded h-1"></div>
        <div className="bg-[#243E63] w-full rounded h-1"></div>
        <div className="bg-[#243E63] w-full rounded h-1"></div>
      </div>
    </div>
  );
}
