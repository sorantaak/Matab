import TopNavBarLeftSide from "./TopNavBarLeftide/TopNavBarLeftSide";
import TopNavbarRigthSide from "./TopNavbarRightSide/TopNavbarRigthSide";

function TopNavbarContact() {
  return (
    <div className="hidden container w-4/5 mx-auto sm:flex flex-row justify-between py-3 border-b-[1px] border-darkGold">
      <TopNavbarRigthSide />
      <div className="flex flex-row-reverse items-start w-60 align-middle">
        <TopNavBarLeftSide />
      </div>
    </div>
  );
}

export default TopNavbarContact;
