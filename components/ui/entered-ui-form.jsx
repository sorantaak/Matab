import * as BiIcons from "react-icons/bi";
import Image from "next/image";
import ErrorForm from "./EnterWebsiteUi/ErrorForm";
import BottomFormFeatuers from "./EnterWebsiteUi/BottomFormFeatuers";

function EnterdUiForm(props) {
  return (
    <div className="bg-backLogin-img bg-cover backdrop-blur-md bg-white/30 w-full h-screen">
      <div className="container w-4/5 mx-auto mt-9">
        <div className="flex flex-row w-full">
          <h2
            className="basis-2/3 lg:basis-1/2 text-left text-textParColor
             text-lg font-bold"
          >
            {props.titlePage}
          </h2>
          <span
            className="basis-1/2 flex justify-end text-3xl text-darkGold "
            title="بازگشت"
          >
            <BiIcons.BiArrowBack
              className="cursor-pointer"
              onClick={props.backHandller}
            />
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 backdrop-blur-md bg-white/50 rounded-lg shadow-md">
          <div className="p-3 md:p-9 order-2 md:order-1">
            <form>{props.children}</form>

            {props.error && <ErrorForm error={props.error} />}

            {/* <div className="w-full flex justify-between mt-5">
              <div>ثبت نام نکرده ام</div>
              <div className="text-darkGold hover:text-brightGold">
                <Link href="/signup">ثبت نام کنید</Link>
              </div>
            </div>
            <div className="w-full flex flex-col mt-5">
              <div className="text-center">
                رمز عبور خود را فراموش کرده اید؟
              </div>
              <div className="text-darkGold hover:text-brightGold inline-block text-center">
                <Link href="/">بازیابی رمز عبور</Link>
              </div>
            </div> */}
          </div>

          <div className="w-full hidden md:block p-3 order-1 md:order-2 md:p-5 mt-10 text-center">
            <Image src="/image/logo.png" width={300} height={226} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterdUiForm;
