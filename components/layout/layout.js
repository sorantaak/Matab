import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import MainNavBar from "../mainNavBar/MainNavBar";
import TopNavbarContact from "../TopNavBar/TopNavbarContact";

function Layout(props) {
  return (
    <Fragment>
      <header className="bg-header-img bg-left-top">
        <TopNavbarContact />
        <MainNavBar />
      </header>
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
