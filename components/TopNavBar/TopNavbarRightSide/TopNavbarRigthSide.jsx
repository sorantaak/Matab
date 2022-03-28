import { TopNavBarContactData } from "../../../data/TopNavbarContactData";
import TopNavBarFeatuers from "../TopNavBarFeatuers";
function TopNavbarRigthSide() {
  const { mail, phone, iconMail, iconPhone } = TopNavBarContactData[0];
  return (
    <div className="flex flex-row space-x-3">
      <TopNavBarFeatuers icon={iconMail} title={mail} />
      <TopNavBarFeatuers icon={iconPhone} title={phone} />

      {/* <TopNavBarFeatuers icon={<AiOutlineMail />} title="myclinic@gmail.com" />
      <TopNavBarFeatuers icon={<Phone />} title="04442248888" /> */}
    </div>
  );
}

export default TopNavbarRigthSide;
