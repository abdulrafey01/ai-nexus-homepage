import React from "react";

export default function GetStarted() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-8 mt-24 ">
      <div className="rounded-lg bg-[#6415ff] flex-1 h-80 lg:h-60 flex flex-col lg:flex-row justify-center items-center max-lg:w-[80%] max-lg:gap-8">
        <div className="lg:flex-1   flex justify-end items-center">
          <p className="text-2xl sm:text-3xl font-semibold text-white w-auto min-w-[80%] sm:w-[450px] max-lg:text-center ">
            Developers all over the world are happily using Treact.
          </p>
        </div>
        <div className="lg:flex-1 flex-col sm:flex-row  flex justify-center items-center  gap-8">
          <button className="rounded-full bg-[#f56565] hover:bg-[#ec3b3b] transition-colors text-white p-4 font-semibold text-xl w-40 shadow-2xl">
            Get Started
          </button>
          <button className="rounded-full bg-transparent border border-white hover:bg-white transition-colors hover:text-[#6415ff] text-white p-4 font-semibold text-xl w-40 shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
