import CarsoulAndAboutOffice from "./Carsoul/CarsoulAndAboutOffice";
import LogoMatab from "./logo/LogoMatab";
import MainNavBar from "./mainNavBar/MainNavBar";
import OurMotto from "./OurMotto/OurMotto";
import ToDoLits from "./todo/ToDoLits";
import TopNavbarContact from "./TopNavBar/TopNavbarContact";

function Header() {
  return (
    <div className="h-screen bg-header-img bg-no-repeat bg-cover bg-center overflow-hidden">
      <div className="container w-4/5 mx-auto">
        <TopNavbarContact />
        <MainNavBar />
        <LogoMatab />
        <OurMotto title="اولویت ما" subTitle="لبخند زیبای شماست" />
        <ToDoLits />
      </div>
    </div>
  );
}

export default Header;
