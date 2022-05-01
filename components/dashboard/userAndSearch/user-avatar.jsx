import React from "react";

import * as VsIcons from "react-icons/vsc";
function UserAvatar() {
  return (
    <div className="flex flex-row justify-start items-center cursor-pointer">
      <img
        class="w-10 h-10 rounded-full ml-1"
        src="/image/user.jpg"
        alt="Rounded avatar"
      ></img>
      <div>
        <VsIcons.VscChevronDown />
      </div>
    </div>
  );
}

export default UserAvatar;
