import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import Image from "next/image";
import { useRouter } from "next/router";
import { SocialMedia } from "./../../data/SocialMediaData";
import { TopNavBarContactData } from "../../data/TopNavbarContactData";
import { en, fa } from "../../translation";

function MainNavBar(props) {
  const router = useRouter();
  const { locale } = router;
  const ref = useRef();
  const t = locale === "fa" ? fa : en;

  const { mail, phone } = TopNavBarContactData[0];
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleLanguageToggle = () => {
    switch (locale) {
      case "fa":
        router.push(router.asPath, router.asPath, {
          locale: "en",
        });

        break;
      case "en":
        router.push(router.asPath, router.asPath, {
          locale: "fa",
        });

        break;
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showMenu]);

  const flexedNavbar =
    "flex flex-row container w-4/5 mx-auto justify-between py-4 transition transition-all duration-300";
  const fixedNabar =
    "fixed min-w-full flex justify-between left-0 py-5 px-10 lg:px-40 bg-black/70 z-50 top-0 shadow-md transition transition-all duration-400";
  const backhiddenNavbarSide =
    "fixed bg-gray-800/50 z-10 top-0 right-0 transition w-0 h-0 transition-all duration-400";

  const backShowNavbarside =
    "fixed bg-gray-800/50 z-10 top-0 right-0 w-full h-full transition transition-all duration-400";

  const hiddeNabarSide =
    "w-0 h-0 bg-black fixed top-0 bottom-0 z-20 opacity-100 transition-all duration-300 -right-96 ltr:-left-96";
  const showNavbarside =
    "w-2/3 h-full bg-black fixed top-0 bottom-0 z-20 opacity-100 transition-all duration-300 right-0 ltr:left-0";

  const handleBackOverlay = (e) => {
    if (ref.current === e.target) {
      setShowMenu(false);
    }
  };
  const handleMenuItem = (path) => {
    if (showMenu) {
      setShowMenu(false);
    }
    router.push(path);
  };
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
    // console.log(window.innerWidth);
    if (window.innerWidth > 639) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResizeWindow);
    };
  });

  return (
    <div className={scrolled ? fixedNabar : flexedNavbar}>
      {/* start hamberger icon button in mobile */}
      <div className="flex md:hidden">
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
        ref={ref}
        className={showMenu ? backShowNavbarside : backhiddenNavbarSide}
        onClick={handleBackOverlay}
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
              className="z-50 text-3xl absolute cursor-pointer text-center rtl:-left-3 ltr:-right-3 top-4 text-gray-700 bg-darkGold  rounded-full"
              onClick={() => setShowMenu(false)}
            />
            <div className="pt-3 text-center relative">
              <Image src="/image/logo.png" width={154} height={116} alt="img" />
              <ul className="flex flex-col text-right space-y-3 text-darkGold text-sm">
                {t.mainnavbar.menu.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-2 py-2 px-2 cursor-pointer hover:bg-brightGold transition-all duration-200 hover:text-gray-800"
                    onClick={() => handleMenuItem(item.path)}
                  >
                    <i className="ltr:ml-2 rtl:mr-2 text-lg">{item.icon}</i>
                    <a>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end navbar in mobile */}

      {/* start navbar in desktop */}
      <div>
        <ul className="hidden md:flex flex-row gap-4  text-darkGold text-sm lg:text-lg">
          {t.mainnavbar.menu.map((item) => (
            <li key={item.id} className="cursor-pointer hover:text-brightGold">
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* end navbar in desktop */}

      <div className="text-darkGold text-lg flex flex-row gap-3">
        <div
          className="cursor-pointer flex flex-row ltr:flex-row-reverse items-center justify-center bg-darkGold rounded-md text-white px-1 gap-1"
          onClick={handleLanguageToggle}
          title={locale === "fa" ? "English" : "فارسی"}
        >
          <span className="pt-1  font-thin font-vazir">
            {locale === "fa" ? "En" : "فا"}
          </span>

          <MdIcons.MdOutlineLanguage />
        </div>
        <div className="">
          <span className="cursor-pointer hover:text-brightGold text-sm lg:text-lg">
            <Link href="/signup">{t.auto.singUp}</Link>
          </span>
          {"/"}{" "}
          <span className="cursor-pointer hover:text-brightGold text-sm lg:text-lg">
            <Link href="/login">{t.auto.login}</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainNavBar;
