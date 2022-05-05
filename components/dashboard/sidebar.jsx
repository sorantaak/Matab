// import Link from "next/link";
import SidebarLogo from "./sidebar-logo";
import * as VsIcons from "react-icons/vsc";
import MnueItem from "./menu-sidebar";
import MenueSideBar from "./menu-sidebar";
// import { useState } from "react";

function Sidebar(props) {
  // const [isActive, setActive] = useState(false);
  //
  return (
    <div className="relative">
      <div
        className="absolute -left-[45px] top-5 z-20 rounded-full cursor-pointer lg:hidden"
        onClick={props.onCloseSidebar}
      >
        <VsIcons.VscChromeClose className="text-2xl text-gray-500" />
      </div>

      <SidebarLogo />
      <MenueSideBar />
    </div>
  );
}

export default Sidebar;
