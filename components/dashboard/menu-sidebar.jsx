import { menuDashboard } from "../../data/menu-dashboard";
import MenuItme from "./menu-item";

function MenueSideBar(props) {
  return (
    <div className="flex flex-col justify-between">
      <ul className="flex flex-col gap-2">
        {menuDashboard.map((item, index) => (
          <MenuItme
            key={index}
            title={item.title}
            icon={item.icon}
            link={item.link}
            onCloseSideBar={props.onCloseSideBar}
          />
        ))}
      </ul>
    </div>
  );
}

export default MenueSideBar;
