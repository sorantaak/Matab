import LogoMatab from "./logo/LogoMatab";
import MainNavBar from "./mainNavBar/MainNavBar";
import OurMotto from "./OurMotto/OurMotto";
import TopNavbarContact from "./TopNavBar/TopNavbarContact";

function Header() {
  return (
    <div className="h-screen bg-header-img bg-no-repeat sm:bg-center bg-center">
      <div className="container w-4/5 mx-auto">
        <TopNavbarContact />
        <MainNavBar />
        <LogoMatab />
        <OurMotto title="اولویت ما" subTitle="لبخند زیبای شماست" />
      </div>
    </div>
  );
}

export default Header;