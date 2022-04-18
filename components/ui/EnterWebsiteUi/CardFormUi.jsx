import React from "react";
import ImageFromUi from "./ImageFromUi";

function CardFormUi(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 backdrop-blur-md bg-white/50 rounded-lg shadow-md">
      <div className="p-3 md:p-9 order-2 md:order-1">{props.children}</div>
      <ImageFromUi srcImage={props.srcImage} />
    </div>
  );
}

export default CardFormUi;
