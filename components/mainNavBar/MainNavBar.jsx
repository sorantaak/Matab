import Link from "next/link";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { NavbarData } from "../../data/NavbarData";
function MainNavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex flex-row justify-between py-4">
      <div className="flex sm:hidden">
        <FaIcons.FaBars
          onClick={() => setShowMenu(true)}
          className="text-darkGold text-2xl hover:text-brightGold cursor-pointer"
        />
      </div>
      {showMenu && (
        <div className="w-full h-full fixed bg-gray-800/50 z-10 top-0 ">
          <div className="w-1/2 bg-white fixed top-0 bottom-0 right-0 z-20 opacity-100 transition transition-700">
            <div>
              <button onClick={closeMenu}>close</button>
            </div>
          </div>
        </div>
      )}
      <div>
        <ul className="hidden sm:flex flex-row text-darkGold text-sm lg:text-lg">
          {NavbarData.map((item) => (
            <li
              key={item.id}
              className="pl-12 cursor-pointer hover:text-brightGold"
            >
              <Link href="#">
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
          {/* <li className="pl-5 cursor-pointer hover:text-brightGold">
            <Link href="#">
              <a>خانه</a>
            </Link>
          </li>
          <li className="pl-5 cursor-pointer hover:text-brightGold">
            <Link href="#">
              <a>اخبار</a>
            </Link>
          </li>
          <li className="pl-5 cursor-pointer hover:text-brightGold">
            <Link href="#">
              <a>سرویس ها</a>
            </Link>
          </li>
          <li className="pl-5 cursor-pointer hover:text-brightGold">
            <Link href="#">
              <a>سیستم نوبت دهی</a>
            </Link>
          </li> */}
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
