import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fa, en } from "../../translation";

function InputMobile(props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fa" ? fa : en;
  const [check, setCheck] = useState(0);
  const [inputClasses, setClasses] = useState(
    "w-full border-2 border-gray-500 rounded-md px-3 h-12 focus:outline-0 transition-all"
  );

  const testNumber = /^(\+98|0098|98|0)?9\d{9}$/g;

  const checkMobileNumberHandller = (e) => {
    if (e.target.value.length >= 11 && testNumber.test(e.target.value)) {
      setCheck(1);
      props.getMobile(e.target.value);
    } else if (
      e.target.value.length >= 11 &&
      !testNumber.test(e.target.value)
    ) {
      setCheck(2);
    } else if (e.target.value > 0 || !testNumber.test(e.target.value)) {
      setCheck(0);
    }
  };

  useEffect(() => {
    switch (check) {
      case 0:
        setClasses(
          "text-sm w-full border-2 border-gray-500 rounded-md px-3 h-12 text-center placeholder:text-center  outline-offset-4 outline-brightGold  focus:outline-1 transition-all"
        );
        break;
      case 1:
        setClasses(
          "text-sm w-full border-2 border-green-500 rounded-md px-3 h-12 focus:outline-0 transition-all text-center placeholder:text-center"
        );
        break;
      case 2:
        setClasses(
          "text-sm w-full border-2 border-red-500 rounded-md px-3 h-12 focus:outline-0 transition-all text-center placeholder:text-center"
        );
        break;
    }
  }, [checkMobileNumberHandller]);
  return (
    <div className="mt-1">
      <div>
        <label htmlFor="" className={`${locale === "fa" ? "" : "capitalize"}`}>
          {t.formData.mobileLabel}
        </label>
      </div>
      <div className="w-full mt-2" dir="ltr">
        <input
          onChange={checkMobileNumberHandller}
          onWheel={(event) => event.currentTarget.blur()}
          onKeyDown={(e) => {
            // console.log(e.code);
            if (
              e.code === "ArrowUp" ||
              e.code === "ArrowDown" ||
              e.code === "KeyE"
            ) {
              e.preventDefault();
            }
          }}
          type="number"
          className={`${inputClasses} ${locale === "fa" ? "" : "capitalize"}`}
          placeholder={t.formData.mobilePlaceHolder}
        />
      </div>
    </div>
  );
}

export default InputMobile;
