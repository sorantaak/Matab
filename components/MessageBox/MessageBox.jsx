import React from "react";

function MessageBox(props) {
  return (
    <div
      className="p-4 text-center mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span className="font-medium">{props.title}</span>
      <br />
      {props.body}
    </div>
  );
}

export default MessageBox;
