import * as FaIcons from "react-icons/fa";
import { useState } from "react";
import NotificationropDown from "./notification-dropdown";
import { notificationData } from "../../../data/user-dashboard-data";
function Notification(props) {
  const [allData, setData] = useState(notificationData);
  function claearAllData() {
    setData(null);
  }
  return (
    <div className="cursor-pointer select-none relative">
      <div onClick={props.onClick}>
        <FaIcons.FaBell
          className={`text-[30px] -rotate-45 transition-all ${
            props.isClicked ? "z-20 text-darkGold " : "text-textFooter"
          }`}
        />
        {allData && (
          <div className="absolute -top-1 -left-2 rounded-full h-5 w-5 border-2 pt-1 border-white text-[9px] flex justify-center items-center text-white bg-red-700">
            <span>{allData.length}</span>
          </div>
        )}
      </div>
      <NotificationropDown
        isClicked={props.isClicked}
        onClearAllNotification={claearAllData}
        allData={allData}
      />
    </div>
  );
}

export default Notification;
