import { useEffect, useState } from "react";
function CountDownTimer() {
  const [remainSecond, setReaminSecond] = useState(10);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [remainSecond]);

  function updateTime(minute, second) {
    if (remainSecond === 0) {
      clearInterval(intervalId);
      return;
    }
    remainSecond--;
    setReaminSecond(remainSecond);
  }
  return (
    <div className="text-center mt-3">
      <span className="text-gray-500">دریافت مجدد کد تایید پس از :</span>{" "}
      <span className="p-3">{remainSecond}</span>
      <span className="text-gray-500">ثانیه</span>
    </div>
  );
}

export default CountDownTimer;
