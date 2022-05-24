import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import MainNavBar from "../mainNavBar/MainNavBar";
import TopNavbarContact from "../TopNavBar/TopNavbarContact";

function Layout(props) {

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-header-img bg-left-top">
        <TopNavbarContact />
        <MainNavBar />
      </header>
      <main>{props.children}</main>
      <footer className="sticky top-[100vh]">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;


