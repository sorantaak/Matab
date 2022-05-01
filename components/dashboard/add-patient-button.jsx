import React from "react";
import * as BsIcons from "react-icons/bs";

function AddPatientButton() {
  return (
    <div className="transition-all mb-5 bg-darkGold hover:bg-brightGold rounded-md px-4 py-2 text-center flex flex-row justify-between items-center cursor-pointer text-xs select-none shadow-xl  shadow-black/10 hover:shadow-black/20">
      <BsIcons.BsPlusLg className="text-white" />
      <span className="mr-2 text-white ">اضافه کردن بیمار</span>
    </div>
  );
}

export default AddPatientButton;
