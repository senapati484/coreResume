/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="flex flex-col items-center lg:mx-56 md:mx-40 sm:mx-28 mx-16 gap-9 mt-16 bg-[#F7F7F7] p-8 rounded-lg">
      <h1 className="font-extrabold lg:text-[55px] md:text-[50px] sm:text-[44px] text-[32px] text-center leading-tight text-black">
        <span className="text-[#4A90E2]">
          Create Best Minimal Resume within seconds
        </span>{" "}
        No need to be creatinve in resume
      </h1>
      <p className="lg:text-xl md:text-lg sm:text-base text-sm text-[#333333] text-center max-w-2xl">
        Only information that needed too many designes not needed to be hired
        Minimal and Bold
      </p>
      <Link to="/create-pdf">
        <button className="mt-6 bg-[#4A90E2] hover:bg-[#3A78C2] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Get Started: It's Free
        </button>
      </Link>
      <img
        src="/display.svg"
        alt="MacBook view"
        className="hover:opacity-95 my-12 cursor-pointer transition-transform transform"
      />
    </div>
  );
}
