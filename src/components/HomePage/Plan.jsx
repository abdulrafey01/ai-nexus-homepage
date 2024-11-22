import React from "react";

export default function Plan() {
  return (
    <div className="flex-1 h-[60rem] border border-gray-300 px-4 sm:px-8 flex justify-center items-center rounded-md">
      <div className="w-full min-w-[15rem] py-8 px-2 sm:px-4  border border-gray-300 border-t-4 border-t-[#71dacf] rounded-md flex flex-col justify-center items-center gap-4 text-center shadow-md">
        <p className="text-xl sm:text-2xl font-bold ">STARTER PLAN</p>
        <p className="text-3xl sm:text-5xl font-bold">$19.99</p>
        <p className="text-lg sm:text-xl text-gray-400 font-bold">MONTHLY</p>
        <hr className="border border-gray-300 my-4 w-full " />
        <p className="text-lg sm:text-2xl font-bold ">Basic Features</p>
        <p className="text-md sm:text-xl text-gray-400 font-semibold">
          Word Limit: 50000
        </p>
        <p className="text-md sm:text-xl text-gray-400 font-semibold">
          Image Limit: 200
        </p>
        <p className="text-md sm:text-xl text-gray-400 font-semibold">
          Minute Limit: 1000
        </p>
        <p className="text-md sm:text-xl text-gray-400 font-semibold">
          Character Limit: 200000
        </p>
        <p className="text-md sm:text-xl text-gray-400 font-semibold">
          AI Support
        </p>
        <p className="text-md sm:text-xl text-gray-400 font-semibold">
          Max Image Resolution: 256x256
        </p>
        <p className="text-md sm:text-xl text-gray-400 font-semibold">
          AI Support
        </p>
        <hr className="border border-gray-300 my-4 w-full " />
        <button className="px-8 py-4 bg-gradient-to-r from-[#71dacf] to-[#38b2ac] text-white rounded-full font-semibold text-md text-wrap  hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <div className="w-12">BUY NOW</div>
        </button>
      </div>
    </div>
  );
}
