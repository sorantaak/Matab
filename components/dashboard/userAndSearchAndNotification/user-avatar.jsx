import React from "react";
import Image from "next/dist/client/image";
import * as VsIcons from "react-icons/vsc";
import UserropDownMenu from "./user-deopdown-menu";
function UserAvatar(props) {
  return (
    <div className={`relative ${props.isClicked && "z-20"}`}>
      <div
        className="flex flex-row gap-1 justify-start items-center cursor-pointer"
        onClick={props.onClick}
      >
        <Image
          className="w-10 h-10 rounded-full"
          src="/image/user.jpg"
          alt="Rounded avatar"
          width={45}
          height={45}
        />
        <div>
          <VsIcons.VscChevronDown
            className={`transition-all ${props.isClicked && "rotate-180"}`}
          />
        </div>
      </div>
      <UserropDownMenu isClicked={props.isClicked} />
    </div>
  );
}

export default UserAvatar;