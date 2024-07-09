import React from "react";
import dark_arrow from "../assets/dark-arrow.png";
const Hero = () => {
  return (
    <>
      <div className="hero w-[100%] min-h-[100vh] containers flex items-center justify-center">
        <div className="hero-text text-center max-w-[800px]">
          <h1 className="font-semibold text-[40px]">
            We ensure better education for a better world
          </h1>
          <p className="text-lg max-w-[700px] m-auto">
            Providing quality education is crucial for creating a more
            equitable, prosperous, and sustainable future for all individuals
            and communities worldwide.
          </p>
          <button className="bg-white rounded-full px-3 py-1 mt-3 text-black inline-flex gap-2 justify-center items-center">
            Explore more <img src={dark_arrow} className="w-[20px] mt-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
