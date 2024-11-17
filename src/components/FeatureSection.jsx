import React from "react";
import SheildIcon from "../assets/shield-icon.svg";
import CustomizeIcon from "../assets/customize-icon.svg";
import FastIcon from "../assets/fast-icon.svg";
import ReliableIcon from "../assets/reliable-icon.svg";
import SimpleIcon from "../assets/simple-icon.svg";
export default function FeatureSection() {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="flex  p-4 flex-col justify-center items-center gap-4 mt-24"
    >
      <p className="font-semibold tracking-wider text-[#6415ff] ">FEATURES</p>
      <p className="text-4xl sm:text-5xl w-[300px] sm:w-auto text-center text-[#243E63] leading-normal  font-bold max-w-[900px]">
        AI Content Platform to{" "}
        <span className="text-[#6415ff] ">Start Earning in Minutes</span>
      </p>
      <p className="text-xl text-center w-[300px] sm:w-[439px] font-semibold text-gray-400">
        Designed for AI article and content generation, our AI Writer lets you
        instantly create, edit, export, and publish high-quality texts
        effortlessly.
      </p>
      {/* Fearures List */}
      <div className="flex mt-12 justify-center items-center gap-12  max-w-[70rem] flex-wrap">
        {/* Item */}
        <div className="flex justify-center items-start gap-4">
          <div>
            <div className="h-16 w-16 rounded-full border-gray-200 border-2 flex justify-center items-center">
              <img src={SheildIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-[#243E63] w-44">
              Data Privacy
            </p>
            <p className="text-gray-400 leading-loose font-semibold w-52">
              Your content is protected with industry-leading encryption and
              privacy measures.
            </p>
          </div>
        </div>
        {/* Item */}
        <div className="flex justify-center items-start gap-4">
          <div>
            <div className="h-16 w-16 rounded-full border-gray-200 border-2 flex justify-center items-center">
              <img src={CustomizeIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-[#243E63] w-44">
              Content Customization
            </p>
            <p className="text-gray-400 leading-loose font-semibold w-52">
              Tailor content to match your brand's voice, style, and tone with
              ease.
            </p>
          </div>
        </div>
        {/* Item */}
        <div className="flex justify-center items-start gap-4">
          <div>
            <div className="h-16 w-16 rounded-full border-gray-200 border-2 flex justify-center items-center">
              <img src={ReliableIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-[#243E63] w-44">
              Consistent Output
            </p>
            <p className="text-gray-400 leading-loose font-semibold w-52">
              Our platform ensures high-quality, consistent content generation
              every time.
            </p>
          </div>
        </div>
        {/* Item */}
        <div className="flex justify-center items-start gap-4">
          <div>
            <div className="h-16 w-16 rounded-full border-gray-200 border-2 flex justify-center items-center">
              <img src={FastIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-[#243E63]">Lightning Fast</p>
            <p className="text-gray-400 leading-loose font-semibold w-52">
              Generate articles, blog posts, and creative content in seconds
              with AI-powered speed.
            </p>
          </div>
        </div>
        {/* Item */}
        <div className="flex justify-center items-start gap-4">
          <div>
            <div className="h-16 w-16 rounded-full border-gray-200 border-2 flex justify-center items-center">
              <img src={SimpleIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-2xl text-[#243E63]">User-Friendly</p>
            <p className="text-gray-400 leading-loose font-semibold w-52">
              An intuitive platform designed for seamless content creation, even
              for beginners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
