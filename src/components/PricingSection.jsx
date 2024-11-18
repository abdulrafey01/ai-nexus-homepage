import React from "react";
import Plan from "./Plan";

export default function PricingSection() {
  const [btnType, setBtnType] = React.useState(1);
  return (
    <div className="mt-24 flex flex-col justify-center items-center gap-6">
      <p className="font-semibold tracking-wider text-[#6415ff]">PRICING</p>
      <p className="text-2xl md:text-5xl   sm:text-3xl font-bold text-[#243E63] text-wrap text-center">
        Reasonable & Flexible <span className="text-[#6415ff]">Plans.</span>
      </p>
      <p className="text-md sm:text-xl text-gray-500  w-[20rem] max-sm:px-4  sm:w-[36rem] font-semibold text-center">
        Our flexible plans offer scalable AI content generation for businesses
        of any size. Choose the one that fits your needs.
      </p>
      {/* Toggle Button */}
      <div className="relative flex bg-gray-200  justify-center items-center  rounded-sm w-1/2 text-[10px] sm:text-2xl font-semibold cursor-pointer select-none">
        <div
          onClick={() => setBtnType(1)}
          className={`w-full p-4 h-full flex justify-center items-center transition-colors duration-500 ${
            btnType === 1 && " text-white"
          } z-10`}
        >
          Subscription
        </div>
        <div
          className={`absolute rounded-sm  transition-transform ease-linear ${
            btnType === 2 ? "translate-x-1/2" : "left-0"
          } w-1/2 h-full bg-[#4b244b]`}
        ></div>
        <div
          onClick={() => setBtnType(2)}
          className={`w-full h-full p-4 flex transition-colors  justify-center items-center ${
            btnType === 2 && " text-white"
          } z-10`}
        >
          Credit
        </div>
      </div>
      {/* Plans */}
      <div className="w-full p-2 sm:p-4 flex justify-center items-center gap-4 flex-wrap ">
        <Plan />
        <Plan />
        <Plan />
      </div>
    </div>
  );
}
