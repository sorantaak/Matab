import Image from "next/image";
import React from "react";

function SidebarLogo() {
  return (
    <div className=" py-4">
      <Image
        src="/image/logo.png"
        width={5256}
        height={3963}
        layout="responsive"
        alt="logo"
      />
    </div>
  );
}

export default SidebarLogo;
