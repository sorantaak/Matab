import { menuDashboard } from "../../data/menu-dashboard";
import MenuItme from "./menu-item";

function MenueSideBar() {
  return (
    <div className="flex flex-col justify-between">
      <ul>
        {menuDashboard.map((item, index) => (
          <MenuItme
            key={index}
            title={item.title}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </ul>
    </div>
  );
}

export default MenueSideBar;
