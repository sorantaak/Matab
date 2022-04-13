import { useEffect, useState } from "react";
import { formData } from "./../../data/formData";

function InputMobile(props) {
  // console.log(props);
  const [number, setNumber] = useState("");
  // const [messagse, setMessage] = useState("");
  const [check, setCheck] = useState(0);
  const [inputClasses, setClasses] = useState(
    "w-full border-2 border-gray-500 rounded-md px-3 h-14 focus:outline-0 transition-all"
  );

  // const errorMessage = "شماره موبایل صحیح نیست";
  const testNumber = /^(\+98|0098|98|0)?9\d{9}$/g;
  // const digit = /\D/;

  const checkMobileNumberHandller = (e) => {
    if (e.target.value.length >= 11 && testNumber.test(e.target.value)) {
      // setIsMobileNumber(true);
      setCheck(1);
      // setNumber(e.target.value);
      props.getMobile(e.target.value);
    } else if (
      e.target.value.length >= 11 &&
      !testNumber.test(e.target.value)
    ) {
      // setIsMobileNumber(false);
      // setNumber("");
      setCheck(2);
    } else if (e.target.value > 0 || !testNumber.test(e.target.value)) {
      setCheck(0);
      // setNumber("");
    }
  };

  useEffect(() => {
    switch (check) {
      case 0:
        setClasses(
          "w-full border-2 border-gray-500 rounded-md px-3 h-14 text-center placeholder:text-center  outline-offset-4 outline-brightGold  focus:outline-1 transition-all"
        );
        break;
      case 1:
        setClasses(
          "w-full border-2 border-green-500 rounded-md px-3 h-14 focus:outline-0 transition-all text-center placeholder:text-center"
        );
        break;
      case 2:
        setClasses(
          "w-full border-2 border-red-500 rounded-md px-3 h-14 focus:outline-0 transition-all text-center placeholder:text-center"
        );
        break;
    }
  }, [checkMobileNumberHandller]);
  return (
    <div className="mt-1">
      <div>
        <label htmlFor="">{formData.mobileLabel}</label>
      </div>
      <div className="w-full mt-2">
        <input
          // onKeyUp={checkMobileNumberHandller}
          onChange={checkMobileNumberHandller}
          onBlur={() => {}}
          type="tel"
          className={inputClasses}
          placeholder={formData.mobilePlaceHolder}
        />
        {/* {isMobileNumber && (
          <span className="mr-2 text-green-600 transition-all">
            <GiIcons.GiCheckMark className="inline-block" />
          </span>
        )} */}
        {/* {messagse && (
          <div className="mt-2">
            <label className="text-red-700 ">{messagse}</label>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default InputMobile;
