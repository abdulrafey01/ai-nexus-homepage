import React from "react";
import FeatureImage from "../assets/sales.jpg";
export default function Feature({ title, description, image }) {
  return (
    <div className=" flex-col-reverse lg:flex-row flex p-8 justify-center items-center">
      {/* First containet */}
      <div className="flex-1 flex flex-col gap-4 max-lg:items-center">
        <p className="font-semibold tracking-wider text-[#6415ff] max-lg:text-center">
          FEATURE
        </p>
        <p className="text-3xl sm:text-5xl text-[#6415ff] leading-tight sm:w-[600px] lg:max-w-[500px]  font-bold max-lg:text-center">
          {title}
        </p>
        <p className="text-gray-400 text-xl font-semibold max-w-[550px] max-lg:text-center">
          {description}
        </p>
        <button className=" p-2  w-36 bg-[#6415ff] text-white rounded-full font-semibold hover:bg-[#4910bb]">
          Try It Now
        </button>
      </div>
      {/* Second Container */}
      <div className="flex-1">
        <img
          src={image}
          alt=""
          className="max-sm:w-[300px] max-lg:w-[400px] w-auto max-lg:mb-24"
        />
      </div>
    </div>
  );
}
