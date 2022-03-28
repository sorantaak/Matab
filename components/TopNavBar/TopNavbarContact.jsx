import TopNavBarLeftSide from "./TopNavBarLeftide/TopNavBarLeftSide";
import TopNavbarRigthSide from "./TopNavbarRightSide/TopNavbarRigthSide";

function TopNavbarContact() {
  return (
    <div className="hidden sm:flex flex-row justify-between pt-3">
      <TopNavbarRigthSide />
      <div className="flex flex-row-reverse items-start w-60 align-middle">
        <TopNavBarLeftSide />
      </div>
    </div>
  );
}

export default TopNavbarContact;
