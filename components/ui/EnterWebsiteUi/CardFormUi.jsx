import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ImageFromUi from "./ImageFromUi";
import { en, fa } from "../../../translation";

function CardFormUi(props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fa" ? fa : en;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 backdrop-blur-md bg-white/50 rounded-lg shadow-md">
      <div className="p-3 md:p-9 order-2 md:order-1">{props.children}</div>
      <ImageFromUi srcImage={props.srcImage} />
    </div>
  );
}

export default CardFormUi;
