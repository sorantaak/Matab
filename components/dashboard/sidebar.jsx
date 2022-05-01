// import Link from "next/link";
import SidebarLogo from "./sidebar-logo";
import * as VsIcons from "react-icons/vsc";
import MnueItem from "./menu-sidebar";
import MenueSideBar from "./menu-sidebar";
// import { useState } from "react";

function Sidebar() {
  // const [isActive, setActive] = useState(false);
  //
  return (
    <div className="">
      <SidebarLogo />
      <MenueSideBar />
    </div>
  );
}

export default Sidebar;
