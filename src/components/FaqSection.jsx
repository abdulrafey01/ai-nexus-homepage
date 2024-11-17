import React from "react";
import DownArrow from "../assets/down-arrow-svgrepo-com.svg";
export default function FaqSection() {
  const [active, setActive] = React.useState(-1);

  const toggleFaq = (index) => {
    if (active === index) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };
  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="1000"
      className="mt-24 flex flex-col justify-center items-center gap-6"
    >
      <p className="font-semibold tracking-wider text-[#6415ff]">FAQS</p>
      <p className="text-2xl   sm:text-5xl font-bold text-[#243E63]">
        You Have <span className="text-[#6415ff]">Questions&nbsp;?</span>
      </p>
      <p className="text-md sm:text-xl text-gray-500  w-[20rem] max-sm:px-4  sm:w-[36rem] font-semibold text-center">
        And we have got answers to all of them. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>
      {/* Faq */}
      <div
        onClick={() => toggleFaq(0)}
        className="w-[70%] min-w-72 py-4 px-8 bg-[#edf2f7] transition-all cursor-pointer hover:bg-gray-200 rounded-md flex flex-col  select-none"
      >
        <div className="flex justify-between items-center gap-4">
          <p className="text-lg sm:text-2xl text-[#243E63] font-semibold ">
            Can I use this for commercial purposes?
          </p>
          <img
            src={DownArrow}
            alt=""
            className={`w-4 h-4 ${
              active === 0 && "rotate-180"
            } transition-transform duration-300`}
          />
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500  ${
            active === 0 ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          Yes, you can use this for commercial purposes. It is fully licensed
          for commercial use, allowing you to incorporate it into your business
          activities, projects, and products.
        </div>
      </div>
      {/* Faq */}
      <div
        onClick={() => toggleFaq(1)}
        className="w-[70%] min-w-72 py-4 px-8 bg-[#edf2f7] transition-all cursor-pointer hover:bg-gray-200 rounded-md flex flex-col select-none"
      >
        <div className="flex justify-between items-center gap-4">
          <p className="text-lg sm:text-2xl text-[#243E63] font-semibold ">
            Are there any additional fees?
          </p>
          <img
            src={DownArrow}
            alt=""
            className={`w-4 h-4 ${
              active === 1 && "rotate-180"
            } transition-transform duration-300`}
          />
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500  ${
            active === 1
              ? "max-h-screen opacity-100 mt-4"
              : " opacity-0  max-h-0"
          }`}
        >
          No, there are no hidden charges. All costs are clearly outlined
          upfront, so you won’t encounter any unexpected fees.
        </div>
      </div>
      {/* Faq */}
      <div
        onClick={() => toggleFaq(2)}
        className="w-[70%] min-w-72 py-4 px-8 bg-[#edf2f7] transition-all cursor-pointer hover:bg-gray-200 rounded-md flex flex-col select-none"
      >
        <div className="flex justify-between items-center gap-4">
          <p className="text-lg sm:text-2xl text-[#243E63] font-semibold ">
            What types of content can your AI tools generate?
          </p>
          <img
            src={DownArrow}
            alt=""
            className={`w-4 h-4 ${
              active === 2 && "rotate-180"
            } transition-transform duration-300`}
          />
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500  ${
            active === 2
              ? "max-h-screen opacity-100 mt-4"
              : " opacity-0  max-h-0"
          }`}
        >
          Our AI tools can generate a wide range of content, including articles,
          blog posts, social media updates, marketing copy, and more.
        </div>
      </div>
      {/* Faq */}
      <div
        onClick={() => toggleFaq(3)}
        className="w-[70%] min-w-72 py-4 px-8 bg-[#edf2f7] transition-all cursor-pointer hover:bg-gray-200 rounded-md flex flex-col select-none"
      >
        <div className="flex justify-between items-center gap-4">
          <p className="text-lg sm:text-2xl text-[#243E63] font-semibold ">
            Are there any limitations on the content generated?
          </p>
          <img
            src={DownArrow}
            alt=""
            className={`w-4 h-4 ${
              active === 3 && "rotate-180"
            } transition-transform duration-300`}
          />
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500  ${
            active === 3
              ? "max-h-screen opacity-100 mt-4"
              : " opacity-0  max-h-0"
          }`}
        >
          While our AI tools are versatile, there may be some limitations based
          on your chosen plan or specific use cases. Please refer to our product
          documentation for detailed information.
        </div>
      </div>
      {/* Faq */}
      <div
        onClick={() => toggleFaq(4)}
        className="w-[70%] min-w-72 py-4 px-8 bg-[#edf2f7] transition-all cursor-pointer hover:bg-gray-200 rounded-md flex flex-col select-none"
      >
        <div className="flex justify-between items-center gap-4">
          <p className="text-lg sm:text-2xl text-[#243E63] font-semibold ">
            Can I customize the content generated by your tools?
          </p>
          <img
            src={DownArrow}
            alt=""
            className={`w-4 h-4 ${
              active === 4 && "rotate-180"
            } transition-transform duration-300`}
          />
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500  ${
            active === 4
              ? "max-h-screen opacity-100 mt-4"
              : " opacity-0  max-h-0"
          }`}
        >
          Yes, our tools allow for customization to fit your specific needs. You
          can adjust parameters and provide input to tailor the content to your
          requirements.
        </div>
      </div>
      {/* Faq */}
      <div
        onClick={() => toggleFaq(5)}
        className="w-[70%] min-w-72 py-4 px-8 bg-[#edf2f7] transition-all cursor-pointer hover:bg-gray-200 rounded-md flex flex-col select-none"
      >
        <div className="flex justify-between items-center gap-4">
          <p className="text-lg sm:text-2xl text-[#243E63] font-semibold ">
            Do I need any technical skills to use your tools?
          </p>
          <img
            src={DownArrow}
            alt=""
            className={`w-4 h-4 ${
              active === 5 && "rotate-180"
            } transition-transform duration-300`}
          />
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-500  ${
            active === 5
              ? "max-h-screen opacity-100 mt-4"
              : " opacity-0  max-h-0"
          }`}
        >
          No technical skills are required. Our tools are user-friendly and
          designed to be accessible to everyone, regardless of their technical
          background.
        </div>
      </div>
    </div>
  );
}
