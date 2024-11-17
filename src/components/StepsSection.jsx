import React from "react";
import Picture from "../assets/hero-screenshot-2.png";
export default function StepsSection() {
  return (
    <div
      data-aos="zoom-in-up"
      className="flex justify-between items-center  gap-8 flex-col lg:flex-row mt-24"
    >
      {/* Image container */}
      <div className="flex-1 p-8">
        <img src={Picture} alt="pc" className="w-[300px] sm:w-[600px] h-auto" />
      </div>
      {/* Steps container */}
      <div className="flex-1 p-4 flex flex-col gap-6 max-lg:items-center">
        <p className=" text-md sm:text-xl text-[#6415ff] font-semibold tracking-wide">
          STEPS
        </p>
        <p className="text-3xl sm:text-5xl font-bold text-[#243E63] mb-8">
          Easy to <span className="text-[#6415ff]">Get Started</span>
        </p>
        {/* Step */}
        <div className="flex justify-start items-start gap-4 max-lg:flex-col max-lg:items-center max-sm:px-4">
          <p className="text-3xl text-gray-300 font-semibold">01</p>
          <div className="flex flex-col gap-2 max-lg:text-center">
            <p className="text-xl font-semibold text-[#243E63] ">Register</p>
            <p className="text-gray-400 font-semibold max-w-[350px]">
              Create an account with us on the Reigster page or by buying a
              plan. A comfirmation email will be sent to you with your login
              details.
            </p>
          </div>
        </div>
        {/* Step */}
        <div className="flex justify-start items-start gap-4 max-lg:flex-col max-lg:items-center max-sm:px-4">
          <p className="text-3xl text-gray-300 font-semibold">02</p>
          <div className="flex flex-col gap-2 max-lg:text-center">
            <p className="text-xl font-semibold text-[#243E63] ">Pick Tool</p>
            <p className="text-gray-400 font-semibold max-w-[350px]">
              After logging in, pick one of our MANY AI tools from our catalog.
            </p>
          </div>
        </div>
        {/* Step */}
        <div className="flex justify-start items-start gap-4 max-lg:flex-col max-lg:items-center max-sm:px-4">
          <p className="text-3xl text-gray-300 font-semibold">03</p>
          <div className="flex flex-col gap-2 max-lg:text-center">
            <p className="text-xl font-semibold text-[#243E63] ">Generate</p>
            <p className="text-gray-400 font-semibold max-w-[350px]">
              After you are logged in and you haver purchased a plan, Generate
              or Create content with ease using our platform!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
