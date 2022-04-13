import Link from "next/link";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import { NavbarData } from "../../data/NavbarData";
import Image from "next/image";
import { useRouter } from "next/router";
import { SocialMedia } from "./../../data/SocialMediaData";
import { TopNavBarContactData } from "../../data/TopNavbarContactData";
import { route } from "next/dist/server/router";

function MainNavBar() {
  const router = useRouter();
  const { mail, phone } = TopNavBarContactData[0];
  const [showMenu, setShowMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const flexedNavbar =
    "flex flex-row container w-4/5 mx-auto justify-between py-4 transition transition-all duration-300";
  const fixedNabar =
    "fixed min-w-full flex justify-between left-0 py-5 px-10 lg:px-40 bg-black/70 z-50 top-0 shadow-md transition transition-all duration-400";
  const backhiddenNavbarSide =
    "fixed bg-gray-800/50 z-10 top-0 right-0 transition w-0 h-0 transition-all duration-400";

  const backShowNavbarside =
    "fixed bg-gray-800/50 z-10 top-0 right-0 w-full h-full transition transition-all duration-400";

  const hiddeNabarSide =
    "w-0 h-0 bg-black fixed top-0 bottom-0 z-20 opacity-100 transition-all duration-300 -right-96";
  const showNavbarside =
    "w-1/2 h-full bg-black fixed top-0 bottom-0 z-20 opacity-100 transition-all duration-300 right-0";
  const handleScroll = () => {
    let offset = window.scrollY;
    // console.log(offset);
    if (offset > 500) {
      setScrolled(true);
    } else if (offset < 50) {
      setScrolled(false);
    }
  };
  const handleResizeWindow = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 639) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResizeWindow);
  });

  return (
    <div className={scrolled ? fixedNabar : flexedNavbar}>
      {/* start hamberger icon button in mobile */}
      <div className="flex sm:hidden">
        <div>
          <FaIcons.FaBars
            onClick={() => setShowMenu(true)}
            className="text-darkGold text-2xl hover:text-brightGold cursor-pointer"
          />
        </div>
      </div>
      {/* end hamberger icon button in mobile */}

      {/*start navar in mobile */}
      <div
        className={showMenu ? backShowNavbarside : backhiddenNavbarSide}
        onClick={() => {
          setShowMenu(false);
        }}
      >
        <div className={showMenu ? showNavbarside : hiddeNabarSide}>
          <div className="absolute bottom-0 h-20 text-center z-50 w-full">
            <div className="text-center">
              <ul className="">
                {SocialMedia.map((item, index) => (
                  <li
                    key={index}
                    className="pr-2 text-lg inline-block"
                    title={item.title}
                  >
                    <Link href={item.path}>
                      <a>{item.icon}</a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col justify-center">
                <span className="text-brightGold">{mail}</span>
                <span className="text-brightGold">{phone}</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <RiIcons.RiCloseCircleFill
              className="z-50 text-3xl absolute px- cursor-pointer text-center -left-3 top-4 text-gray-700 bg-darkGold  rounded-full"
              onClick={() => setShowMenu(false)}
            />
            <div className="pt-3 text-center relative">
              <Image src="/image/logo.png" width={154} height={116} />
              <ul className="flex flex-col text-right space-y-7 text-darkGold text-sm">
                {NavbarData.map((item) => (
                  <li
                    key={item.id}
                    className="flex py-2 px-2 cursor-pointer hover:bg-brightGold transition-all duration-200 hover:text-gray-800"
                  >
                    <i className="ml-2 text-lg">{item.icon}</i>
                    <Link href={item.path}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end navbar in mobile */}

      {/* start navbar in desktoo */}
      <div>
        <ul className="hidden sm:flex flex-row text-darkGold text-sm lg:text-lg">
          {NavbarData.map((item) => (
            <li
              key={item.id}
              className="pl-10 lg:pl-12 cursor-pointer hover:text-brightGold"
            >
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* end navbar in desktop */}

      <div className="text-darkGold text-lg">
        <span className="cursor-pointer hover:text-brightGold text-sm lg:text-lg">
          <Link href="/">
            <a>ثبت نام</a>
          </Link>
        </span>
        {"/"}{" "}
        <span className="cursor-pointer hover:text-brightGold text-sm lg:text-lg">
          <Link href="/login">
            <a>ورود</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default MainNavBar;
