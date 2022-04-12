import React from "react";

function InputMobile(props) {
  return (
    <div className="mt-5">
      <div>
        <label htmlFor="">شماره موبایل</label>
      </div>
      <div className="w-full mt-2">
        <input
          type="text"
          className="w-full  border-2 border-gray-500 rounded-md px-3  h-14"
          placeholder="شماره موبایل"
        />
      </div>
    </div>
  );
}

export default InputMobile;
