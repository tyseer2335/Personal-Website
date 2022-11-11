import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-5xl mx-auto px-4 absolute">
        <div className="flex items-center justify-between h-16 p-4">
          <div className="flex space-x-4 text-gray-900">
            <a href="#" className=" hover:text-zinc-700 text-black text-2xl">
              Home
            </a>
            <a href="#" className=" hover:text-zinc-700 text-black text-2xl">
              About
            </a>
            <a href="#" className=" hover:text-zinc-700 text-black text-2xl">
              Projects
            </a>
            <a href="#" className=" hover:text-zinc-700 text-black text-2xl">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
