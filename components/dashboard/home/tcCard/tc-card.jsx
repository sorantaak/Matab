import * as FaIcons from "react-icons/fa";

function TcCard(props) {
  return (
    <div className="flex flex-row justify-start px-4 py-2 items-center shadow-black/10 shadow-2xl rounded-lg mt-4 select-none">
      <div className="text-6xl text-darkGold opacity-50">{props.icon}</div>
      <div className="flex flex-col justify-center items-center space-y-3 flex-1">
        <div className="text-sm 2xl:text-lg">{props.title}</div>
        <div className="text-darkGold font-bold text-xl">{props.number}</div>
      </div>
    </div>
  );
}

export default TcCard;
