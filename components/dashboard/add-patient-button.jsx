import React from "react";
import * as VsIcons from "react-icons/vsc";

function AddPatientButton() {
  return (
    <div className="mb-5 bg-darkGold hover:bg-brightGold rounded-xl px-2 py-2 text-center flex flex-row justify-between items-center cursor-pointer text-sm select-none shadow-xl transition-all shadow-black/10 hover:shadow-black/20">
      <VsIcons.VscAdd className="text-white" />
      <span className="mr-2 text-white">اضافه کردن بیمار</span>
    </div>
  );
}

export default AddPatientButton;
