import React from "react";
import * as AiIcons from "react-icons/ai";

function SearchDashboard() {
  return (
    <div className="flex items-center gap-1 w-72  lg:w-72 relative bg-transparent group">
      <div className="flex lg:hidden">menu</div>
      <input
        type="text"
        placeholder="جستجو"
        className="hidden md:flex w-full pl-8 pr-5 py-3 bg-sidebar text-gray-500 rounded-full placeholder:text-xs text-sm   focus:bg-white focus:outline focus:outline-darkGold focus:shadow-xl focus:shadow-black/5 transition-all hover:shadow-xl hover:shadow-black/5"
      />
      <AiIcons.AiOutlineSearch className="hidden md:flex absolute left-1 top-[12px] text-xl ml-3 text-sidebarIcon" />
    </div>
  );
}

export default SearchDashboard;
