import React from "react";
import { useState, useEffect } from "react";
import { formData } from "../../data/formData";

function InputPassword(props) {
  const [check, setCheck] = useState(0);
  const [inputClasses, setClasses] = useState(
    "w-full border-2 border-gray-500 rounded-md px-3 h-14 focus:outline-0 transition-all"
  );
  const checkPasswordHandller = (e) => {
    if (e.target.value.length >= 6) {
      props.getPassword(e.target.value);
      setCheck(1);
    } else if (e.target.value.length < 6) {
      setCheck(0);
    }
  };

  useEffect(() => {
    switch (check) {
      case 0:
        setClasses(
          "w-full border-2 border-gray-500 rounded-md px-3 h-14 outline-offset-4 outline-brightGold text-center placeholder:text-center focus:outline-1 transition-all"
        );
        break;
      case 1:
        setClasses(
          "w-full border-2 border-green-500 rounded-md px-3 h-14 focus:outline-0 text-center placeholder:text-center transition-all"
        );
        break;
      case 2:
        setClasses(
          "w-full border-2 border-red-500 rounded-md px-3 h-14 focus:outline-0 text-center placeholder:text-center transition-all"
        );
        break;
    }
  }, [checkPasswordHandller]);
  return (
    <div className="mt-4">
      <div>
        <label htmlFor="">{props.label}</label>
      </div>
      <div className="w-full mt-2">
        <input
          // onKeyUp={checkPasswordHandller}
          onChange={checkPasswordHandller}
          onBlur={() => {}}
          type="password"
          className={inputClasses}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default InputPassword;
