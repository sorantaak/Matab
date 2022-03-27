import Link from "next/link";
function MainNavBar() {
  return (
    <div className="flex flex-row justify-between py-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-darkGold hover:text-brightGold cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      {/* <div>
        <ul className="flex flex-row text-darkGold text-sm">
          <li className="pl-5 cursor-pointer hover:text-brightGold">
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
          </li>
        </ul>
      </div> */}
      <div className="text-darkGold text-sm">
        <span className="cursor-pointer hover:text-brightGold">
          <Link href="#">
            <a>ثبت نام</a>
          </Link>
        </span>
        {"/"}{" "}
        <span className="cursor-pointer hover:text-brightGold">
          <Link href="#">
            <a>ورود</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default MainNavBar;
