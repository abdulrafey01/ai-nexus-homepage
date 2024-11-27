import React from "react";
import Picture from "../../assets/img1.svg";

export default function MainSection() {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      className="flex flex-col lg:flex-row p-2 px-4 sm:p-8 items-center mt-10"
    >
      {/* First Container */}
      <div className="max-lg:text-center lg:w-full flex-1 flex flex-col gap-8 max-sm:items-center">
        <p className="text-3xl w-auto sm:text-4xl xl:text-5xl  font-bold">
          Boost Productivity with{" "}
          <span className="text-[#6415ff]">AI Content Generation</span>
        </p>
        <p className="text-lg w-[300px]  sm:w-auto sm:text-xl text-center">
          Boost your productivity and income with our all-in-one AI platform
          that creates SEO-optimized content for blogs, ads, emails, and
          websites 10X faster.
        </p>
        <label
          for="email"
          className="sm:py-4 max-sm:w-full pl-8 pr-1 border-2 border-gray-300 transition-colors duration-300  focus-within:border-[#6415ff] h-16 rounded-full flex justify-between items-center"
        >
          <input
            id="email"
            placeholder="Your E-mail Address"
            className="bg-transparent outline-none"
          />
          <button className="px-5 sm:block hidden sm:px-10 py-2 bg-[#6415ff] h-[50px] text-white rounded-full font-semibold hover:bg-[#4910bb]">
            Get Started
          </button>
        </label>
        <button className="px-5 w-full block sm:hidden sm:px-10 py-2 bg-[#6415ff] h-[50px] text-white rounded-full font-semibold hover:bg-[#4910bb]">
          Get Started
        </button>
      </div>
      {/* Second Container */}
      <div className="flex-1 xl:flex-[1.5] flex justify-center">
        <img src={Picture} className="max-lg:w-[300px] max-lg:h-[300px]" />
      </div>
    </div>
  );
}
