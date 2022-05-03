import React from "react";
import UserropDownMenu from "./user-deopdown-menu";

function BackPopUp(props) {
  return (
    <div
      className="transition-all ease-linear fixed top-0 right-0 left-0 bottom-0 bg-black/25 z-10"
      onClick={props.onShowBackPopUp}
    ></div>
  );
}

export default BackPopUp;
