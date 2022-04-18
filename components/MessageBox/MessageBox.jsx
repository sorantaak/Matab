import React from "react";

function MessageBox(props) {
  return (
    <div
      class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span class="font-medium">پیام برای شما ارسال شد</span>
    </div>
  );
}

export default MessageBox;
