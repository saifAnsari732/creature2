import React from "react";
import { Home, Search,  User, ChartBar } from "lucide-react";
// import {Link} from 'react-router-dom';
export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-300 shadow-xl rounded-t-3xl p-4 flex justify-around items-center md:hidden">
      <div className="flex flex-col cursor-pointer items-center text-black">
        <Home size={24} />
        <a href="#home" className="text-xs mt-1 font-medium ">Home</a>
      </div>

      <div className="flex flex-col items-center text-black">
        <Search size={24} />
        <a href="#home" className="text-xs mt-1">Search</a>
      </div>

      <div className="flex flex-col items-center text-black">
        <ChartBar size={24} />
        <a href="#products" className="text-md mt-1">Products</a>
      </div>

      <div className="flex flex-col items-center text-black">
        <User size={24} />
        <span className="text-xs mt-1">Profile</span>
      </div>
    </div>
  );
}
