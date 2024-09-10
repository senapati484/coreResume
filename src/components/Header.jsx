import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="p-2 shadow-sm flex justify-between items-center px-5 w-full bg-white">
      <Link to="/">
        <button className="lg:h-16 md:h-12 h-10 lg:w-60 md:w-52  w-48">
          <img
            src="/logo.png"
            alt="CoreResume Logo"
            className="hover:opacity-85 cursor-pointer transition-opacity duration-300"
          />
        </button>
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/about">
          <button className="text-[#4A90E2] hover:text-[#3A78C2] font-medium hidden lg:block md:block">
            About
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-[#4A90E2] hover:text-[#3A78C2] font-medium hidden lg:block md:block">
            Contact
          </button>
        </Link>
        <Link to="/create-pdf">
          <button className="bg-[#4A90E2] hover:bg-[#3A78C2] text-white py-2 px-4 rounded-md font-semibold shadow-md transition-transform transform hover:scale-105 break-keep text-sm lg:text-lg md:text-base">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
}
