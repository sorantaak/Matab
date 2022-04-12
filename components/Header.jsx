import CarsoulAndAboutOffice from "./Carsoul/CarsoulAndAboutOffice";
import LogoMatab from "./logo/LogoMatab";
import MainNavBar from "./mainNavBar/MainNavBar";
import OurMotto from "./OurMotto/OurMotto";
import ToDoLits from "./todo/ToDoLits";
import TopNavbarContact from "./TopNavBar/TopNavbarContact";

function Header() {
  return (
    <div className="bg-header-img bg-no-repeat bg-cover bg-center overflow-hidden h-full">
      <div className="container w-4/5 mx-auto">
        <div className="grid grid-cols- grid-rows-1 lg:grid-rows-2">
          <LogoMatab />
          <OurMotto title="اولویت ما" subTitle="لبخند زیبای شماست" />
          <ToDoLits />
        </div>
      </div>
    </div>
  );
}

export default Header;
