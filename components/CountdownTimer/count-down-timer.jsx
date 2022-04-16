import { useEffect, useState } from "react";
function CountDownTimer(props) {
  const [remainSecond, setReaminSecond] = useState(props.remainTime);
  const [retry, setRetry] = useState(false);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [remainSecond]);

  function updateTime(minute, second) {
    if (remainSecond === 0) {
      setRetry(true);
      clearInterval(intervalId);
      return;
    }
    remainSecond--;
    setReaminSecond(remainSecond);
  }
  if (remainSecond === 0) {
    return (
      <div className="text-center mt-3">
        <button
          className="text-darkGold hover:text-brightGold"
          onClick={() => setReaminSecond(props.remainTime)}
        >
          ارسال مجدد
        </button>
      </div>
    );
  }
  return (
    <div className="text-center mt-3">
      <span className="text-gray-500">دریافت مجدد کد تایید پس از :</span>
      <span className="p-3">{remainSecond}</span>
      <span className="text-gray-500">ثانیه</span>
    </div>
  );
}

export default CountDownTimer;
