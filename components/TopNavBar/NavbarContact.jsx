import NavbarRigthSide from "./TopNavbarRigthSide";

function NavbarContact() {
  return (
    <div className="flex flex-row justify-between pt-1">
      <NavbarRigthSide />
      <div className="flex flex-row-reverse items-start w-60 align-middle"></div>
    </div>
  );
}

export default NavbarContact;
