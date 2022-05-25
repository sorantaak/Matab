import { useEffect, useState } from "react";
import { fa, en } from "../../translation";
import { useRouter } from "next/router";
function CountDownTimer(props) {
  const [remainSecond, setReaminSecond] = useState(props.remainTime);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "fa" ? fa : en;
  // const [retry, setRetry] = useState(false);
  let intervalId;

  useEffect(() => {
    intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [remainSecond]);

  function updateTime() {
    if (remainSecond === 0) {
      // setRetry(true);
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
          {t.counterTime.title}
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-center items-center text-center mt-3">
      <span className="text-gray-500">{t.counterTime.des}</span>
      <div className="w-9">{remainSecond}</div>
      <span className="text-gray-500">{t.counterTime.type}</span>
    </div>
  );
}

export default CountDownTimer;
