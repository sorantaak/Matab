import React from "react";
import { useState, useEffect } from "react";
import * as RiIcons from "react-icons/ri";

function InputPassword(props) {
  const [check, setCheck] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
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
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
        <label className="select-none" htmlFor="pass">
          {props.label}
        </label>
      </div>
      <div className="w-full mt-2 relative">
        <input
          // onKeyUp={checkPasswordHandller}
          id="pass"
          onChange={checkPasswordHandller}
          onBlur={() => {}}
          type={showPassword ? "text" : "password"}
          className={inputClasses}
          placeholder={props.placeholder}
        />
        <span
          className="absolute left-3 top-5 text-gray-700 cursor-pointer"
          onClick={toggleShowPassword}
        >
          {showPassword ? <RiIcons.RiEyeLine /> : <RiIcons.RiEyeOffLine />}
        </span>
      </div>
    </div>
  );
}

export default InputPassword;
