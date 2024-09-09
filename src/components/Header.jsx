import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="p-2 shadow-sm flex justify-between items-center px-5 w-full bg-white">
      <Link to="/">
        <img
          src="/logo.png"
          alt="CoreResume Logo"
          className="h-10 hover:opacity-85 cursor-pointer transition-opacity duration-300"
        />
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/about">
          <button className="text-[#4A90E2] hover:text-[#3A78C2] font-medium">
            About
          </button>
        </Link>
        <Link to="/contact">
          <button className="text-[#4A90E2] hover:text-[#3A78C2] font-medium">
            Contact
          </button>
        </Link>
        <Link to="/create-pdf">
          <button className="bg-[#4A90E2] hover:bg-[#3A78C2] text-white py-2 px-4 rounded-md font-semibold shadow-md transition-transform transform hover:scale-105">
            Get Started
          </button>
        </Link>
      </div>
    </header>
  );
}
