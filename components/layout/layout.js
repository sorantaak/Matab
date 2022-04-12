import React, { Fragment } from "react";
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
    </Fragment>
  );
}

export default Layout;
