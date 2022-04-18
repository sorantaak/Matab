import React from "react";

function ErrorForm(props) {
  return <div className="text-red-700 text-center mt-2">{props.error}</div>;
}

export default ErrorForm;
