import Link from "next/link";
import { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { NavbarData } from "../../data/NavbarData";
import Image from "next/image";
function MainNavBar() {
  const flexedNavbar =
    "flex flex-row justify-between py-4 transition transition-all duration-700";
  const fixedNabar =
    "fixed min-w-full flex justify-between left-0 py-5  px-20 bg-black/70 z-50 top-0 shadow-md transition transition-all duration-700";
  const backhiddenNavbarSide =
    "fixed bg-gray-800/50 z-10 top-0 right-0 transition w-0 h-0 transition-all duration-700";

  const backShowNavbarside =
    "fixed bg-gray-800/50 z-10 top-0 right-0 w-full h-full transition transition-all duration-700";

  const hiddeNabarSide =
    "w-0 h-0 bg-black fixed top-0 bottom-0 z-20 opacity-100 transition-all duration-700 -right-96";
  const showNavbaride =
    "w-1/2 h-full bg-black fixed top-0 bottom-0 z-20 opacity-100 transition-all duration-700 right-0";
  const [showMenu, setShowMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    let offset = window.scrollY;
    console.log(offset);
    if (offset > 50) {
      setScrolled(true);
    } else {
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
      <div className="flex sm:hidden">
        <FaIcons.FaBars
          onClick={() => setShowMenu(true)}
          className="text-darkGold text-2xl hover:text-brightGold cursor-pointer"
        />
      </div>

      <div className={showMenu ? backShowNavbarside : backhiddenNavbarSide}>
        <div className={showMenu ? showNavbaride : hiddeNabarSide}>
          <div className="relative">
            <div className="pt-3 text-center">
              <Image src="/image/logo.png" width={154} height={116} />
              <ul className="flex flex-col text-right space-y-7 text-darkGold text-sm">
                {NavbarData.map((item) => (
                  <li
                    key={item.id}
                    className="flex py-2 px-2 cursor-pointer hover:bg-brightGold transition-all duration-200 hover:text-gray-800"
                  >
                    <i className="ml-2 text-lg">{item.icon}</i>
                    <Link href="#">
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="absolute left-0 top-2 text-darkGold"
              onClick={() => setShowMenu(false)}
            >
              close
            </button>
          </div>
        </div>
      </div>

      <div>
        <ul className="hidden sm:flex flex-row text-darkGold text-sm lg:text-lg">
          {NavbarData.map((item) => (
            <li
              key={item.id}
              className="pl-10 lg:pl-12 cursor-pointer hover:text-brightGold"
            >
              <Link href="#">
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-darkGold text-lg">
        <span className="cursor-pointer hover:text-brightGold text-sm lg:text-lg">
          <Link href="#">
            <a>ثبت نام</a>
          </Link>
        </span>
        {"/"}{" "}
        <span className="cursor-pointer hover:text-brightGold text-sm lg:text-lg">
          <Link href="#">
            <a>ورود</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default MainNavBar;
