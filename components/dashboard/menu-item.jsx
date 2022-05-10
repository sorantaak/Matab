import { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import * as VsIcons from "react-icons/vsc";
// import * as IoIcons from "react-icons/io";
import { useState, useEffect } from "react";

function MenuItme(props) {
  // const liRef = useRef();
  // const [isActive, setActive] = useState(false);
  const [classForLink, setClassForLink] = useState(
    "text-sm transition-all text-sidebarMenu"
  );
  const router = useRouter();
  // console.log(router.asPath);
  // console.log(props.link);
  // props.setClass =
  //   router.asPath === props.link
  //     ? "transition-all text-brightGold"
  //     : "transition-all text-green-500";
  useEffect(() => {
    if (router.asPath === props.link) {
      setClassForLink("text-sm transition-all text-brightGold");
    } else {
      setClassForLink("text-sm transition-all text-sidebarMenu");
    }
    return {
      router,
    };
  }, [router]);
  return (
    <li
      className="flex flex-row py-1 transition-all cursor-pointer select-none"
      onClick={() => {
        props.onCloseSideBar();
        router.push(props.link);
      }}
    >
      <span className="ml-5 text-sidebarIcon text-2xl">
        {/* <VsIcons.VscTools /> */}
        {props.icon}
      </span>
      <span className={classForLink}>
        {/* <Link href={props.link}>{props.title}</Link> */}
        {props.title}
      </span>
    </li>
  );
}

export default MenuItme;
