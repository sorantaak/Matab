import React from "react";
import Image from "next/dist/client/image";
import * as VsIcons from "react-icons/vsc";
import UserropDownMenu from "./user-deopdown-menu";
function UserAvatar(props) {
  return (
    <div
      className={`flex flex-row justify-start items-center cursor-pointer relative ${
        props.isClicked && "z-20"
      }`}
      onClick={props.onClick}
    >
      <Image
        className="w-10 h-10 rounded-full ml-1"
        src="/image/user.jpg"
        alt="Rounded avatar"
        width={40}
        height={40}
      />
      <div>
        <VsIcons.VscChevronDown
          className={`transition-all ${props.isClicked && "rotate-180"}`}
        />
      </div>
      <UserropDownMenu isClicked={props.isClicked} />
    </div>
  );
}

export default UserAvatar;
