import React from "react";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import FeatureSection from "./components/FeatureSection";
import Feature from "./components/Feature";
// import "./App.css";
import FeatureImage1 from "./assets/sales.jpg";
import FeatureImage2 from "./assets/image-creation.png";
import FeatureImage3 from "./assets/blog-writing.jpg";
import FeatureImage4 from "./assets/transcription.png";
import FeatureImage5 from "./assets/product.png";
import FeatureImage6 from "./assets/social-media.png";
import FeatureImage7 from "./assets/business-processes.png";
import StepsSection from "./components/StepsSection";
import GetStarted from "./components/GetStarted";
import "aos/dist/aos.css";
import Aos from "aos";
import FaqSection from "./components/FaqSection";
import PricingSection from "./components/PricingSection";
export default function App() {
  Aos.init();
  return (
    <div className=" min-h-screen flex justify-start items-center flex-col ">
      <div className="max-w-[1270px] flex flex-col overflow-hidden">
        <NavBar />
        <MainSection />
        <FeatureSection />
        <div data-aos="fade-right" data-aos-duration="1000">
          <Feature
            title={"Personalized Sales Messages"}
            description={"Transform content creation instantly."}
            image={FeatureImage1}
          />
        </div>
        <Feature
          title={"Create images from any description at the drop of a hat."}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          image={FeatureImage2}
        />
        <Feature
          title={"Engaging blog posts for consistent content."}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          image={FeatureImage3}
        />
        <Feature
          title={"Convert speech to text and text to speech effortlessly."}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          image={FeatureImage4}
        />
        <Feature
          title={"SEO-friendly, compelling e-commerce product descriptions."}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          image={FeatureImage5}
        />
        <Feature
          title={"Catchy social media posts for engagement."}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          image={FeatureImage6}
        />
        <Feature
          title={"Make quicker, more informed decisions."}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          image={FeatureImage7}
        />
        <StepsSection />
        <PricingSection />
        <FaqSection />
        <GetStarted />
      </div>
    </div>
  );
}
