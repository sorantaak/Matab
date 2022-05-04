import { useState } from "react";
import { notificationData } from "../../../data/user-dashboard-data";

function NotificationropDown(props) {
  const [allData, setData] = useState(notificationData);
  function claearAllData() {
    setData(null);
  }

  return (
    <ul
      className={`absolute w-56 bg-white shadow-lg top-full mt-1 -left-7 rounded-lg transition-all ease-linear ${
        props.isClicked
          ? "opacity-100 translate-y-0 z-20"
          : "opacity-0 translate-y-8 -z-10"
      }`}
    >
      <div className="flex flex-row justify-between ">
        <h2 className="font-bold px-6 py-3">اعلانها</h2>
        <span
          className="text-sm transition-all text-red-600 px-6 py-3 hover:text-red-900"
          onClick={claearAllData}
        >
          پاک کردن همه
        </span>
      </div>

      {allData ? (
        allData.map((item, index) => (
          <li
            key={index}
            className="text-sm px-6 py-3  w-full flex flex-row items-center group select-none hover:cursor-pointer"
          >
            <div className="bg-sidebar rounded-full w-10 h-10 ml-2 flex justify-center transition-all items-center text-lg group-hover:text-brightGold group-hover:bg-darkGold">
              <span className="transition-all group-hover:text-white">
                {item.icon}
              </span>
            </div>
            <div className="flex flex-col justify-center items-start transition-all group-hover:text-darkGold">
              <div>{item.title}</div>
              <div className="text-xs text-stone-500">{item.subtitle}</div>
            </div>
          </li>
        ))
      ) : (
        <div className="text-sm px-6 py-3 text-center text-slate-400">
          هیج اعلانی وجود ندارد
        </div>
      )}
    </ul>
  );
}

export default NotificationropDown;
