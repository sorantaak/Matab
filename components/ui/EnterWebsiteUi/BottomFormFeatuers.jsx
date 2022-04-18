import React from "react";
import Link from "next/link";

function BottomFormFeatuers(props) {
  return (
    <div>
      {props.isRegistered && (
        <div className="w-full text-center mt-5">
          <div>
            <span className="text-darkGold hover:text-brightGold cursor-pointer">
              <Link href={props.link}>{props.linkTitle}</Link>
            </span>
          </div>
        </div>
      )}
      {props.isForgot && (
        <div className="w-full flex flex-col mt-5">
          <div className="text-center">{props.forgotPasswordTitle}</div>
          <div className="text-darkGold hover:text-brightGold inline-block text-center">
            <Link href={props.forgotPasswordLink}>
              {props.forgotPasswordLinkTitle}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default BottomFormFeatuers;
