import MailIcon from "../Icons/MailIcon";
import Phone from "../Icons/Phone";
import TopNavBarFeatuers from "./TopNavBarFeatuers";
import React from "react";
function NavbarRigthSide() {
  return (
    <div className="flex flex-row space-x-3">
      {/* <div class="basis-1/4">01</div>
      <div class="basis-1/4">02</div>
      <div class="basis-1/2">03</div> */}
      <TopNavBarFeatuers icon={<MailIcon />} title="myclinic@gmail.com" />
      <TopNavBarFeatuers icon={<Phone />} title="04442248888" />
    </div>
  );
}

export default NavbarRigthSide;
