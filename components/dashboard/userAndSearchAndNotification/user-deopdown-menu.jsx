import * as ImIcons from "react-icons/im";
import * as FaIcons from "react-icons/fa";

function UserropDownMenu(props) {
  const menuItem = [
    { icon: <ImIcons.ImUser />, title: "اطلاعات پروفایل", Link: "" },
    { icon: <FaIcons.FaUserEdit />, title: "ویرایش پروفایل", Link: "" },
    { icon: <FaIcons.FaCalendar />, title: "تاریخ ها", Link: "" },
    { icon: <ImIcons.ImExit />, title: "خروج", Link: "" },
  ];
  return (
    <ul
      className={`absolute w-48 bg-white shadow-lg top-full mt-1 left-0 rounded-lg transition-all ease-linear ${
        props.isClicked
          ? "opacity-100 translate-y-0 z-20"
          : "opacity-0 translate-y-8 -z-10"
      }`}
    >
      {menuItem.map((item, index) => (
        <li
          key={index}
          className="text-sm px-6 py-3  w-full flex flex-row items-center group select-none hover:cursor-pointer"
        >
          <div className="bg-sidebar rounded-full w-10 h-10 ml-2 flex justify-center transition-all items-center text-lg group-hover:text-brightGold group-hover:bg-darkGold">
            <span className="transition-all group-hover:text-white">
              {item.icon}
            </span>
          </div>
          <span className="transition-all group-hover:text-darkGold">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default UserropDownMenu;
