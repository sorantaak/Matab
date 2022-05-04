import React from "react";
import * as AiIcons from "react-icons/ai";

function SearchDashboard() {
  return (
    <div className="inline-block w-72 relative bg-transparent group">
      <input
        type="text"
        placeholder="جستجو"
        className="w-full pl-8 pr-5 py-3 bg-sidebar text-gray-500 rounded-full placeholder:text-xs text-sm   focus:bg-white focus:outline focus:outline-darkGold focus:shadow-xl focus:shadow-black/5 transition-all hover:shadow-xl hover:shadow-black/5"
      />
      <AiIcons.AiOutlineSearch className="absolute left-1 top-[12px] text-xl ml-3 text-sidebarIcon" />
    </div>
  );
}

export default SearchDashboard;
