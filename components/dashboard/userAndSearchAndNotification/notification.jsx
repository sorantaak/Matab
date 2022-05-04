import * as FaIcons from "react-icons/fa";
import NotificationropDown from "./notification-dropdown";
function Notification(props) {
  return (
    <div className={`cursor-pointer relative`}>
      <div onClick={props.onClick}>
        <FaIcons.FaBell
          className={`text-textFooter text-[30px] -rotate-45 ${
            props.isClicked && "z-10"
          }`}
        />
        <div className="absolute -top-1 -left-2 rounded-full h-5 w-5 border-2 p-2 border-white text-[9px] flex justify-center items-center text-white bg-red-700">
          <span>35</span>
        </div>
      </div>
      <NotificationropDown isClicked={props.isClicked} />
    </div>
  );
}

export default Notification;
