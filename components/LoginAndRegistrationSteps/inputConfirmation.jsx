import { useEffect, useState } from "react";
import { formData } from "./../../data/formData";
import { en, fa } from "../../translation";
import { useRouter } from "next/router";

function InputConfirmation(props) {
  const [check, setCheck] = useState(0);
  const [inputClasses, setClasses] = useState(
    "w-full border-2 border-gray-500 rounded-md px-3 h-14 focus:outline-0 transition-all"
  );
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fa" ? fa : en;

  const testNumber = /^[0-9]*/;

  const checkConfirmHandller = (e) => {
    if (e.target.value.length == 6 && testNumber.test(e.target.value)) {
      setCheck(1);
      props.getConfirm(e.target.value);
    } else if (e.target.value.length >= 6 && !testNumber.test(e.target.value)) {
      setCheck(2);
    } else if (e.target.value > 0 || !testNumber.test(e.target.value)) {
      setCheck(0);
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
  }, [checkConfirmHandller]);
  return (
    <div className="mt-1">
      <div>
        <label htmlFor="">{t.formData.confirmLabel}</label>
      </div>
      <div className="w-full mt-2" dir="ltr">
        <input
          onChange={checkConfirmHandller}
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
          className={inputClasses}
          placeholder={t.formData.confirmPlaceholder}
        />
      </div>
    </div>
  );
}

export default InputConfirmation;
