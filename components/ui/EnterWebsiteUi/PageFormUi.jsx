import * as BiIcons from "react-icons/bi";
import BottomFormFeatuers from "./BottomFormFeatuers";
import CardFormUi from "./CardFormUi";
import ErrorForm from "./ErrorForm";
import FormUi from "./FormUi";
import ImageFromUi from "./ImageFromUi";

function PageFormUi(props) {
  return (
    <div className="bg-backLogin-img bg-cover backdrop-blur-md bg-white/30 w-full h-screen">
      <div className="container w-4/5 mx-auto mt-9">
        <div className="flex flex-row w-full">
          <h2
            className="basis-2/3 lg:basis-1/2 text-left text-textParColor
                     text-lg font-bold"
          >
            {props.pageTitle}
          </h2>
          <span
            className="basis-1/2 flex justify-end text-3xl text-darkGold "
            title={props.titleIcon}
          >
            <BiIcons.BiArrowBack
              className="cursor-pointer"
              onClick={props.backArrowButtonHandlle}
            />
          </span>
        </div>
        <CardFormUi srcImage={props.srcImage}>
          <FormUi>
            {props.children}
            {/* <InputMobile getMobile={getMobileNumber} />
            <InputPassword
              label={formData.passwordLabel}
              placeholder={formData.passwordPalceHolder}
              getPassword={getPassword}
            />
            <SubmitButton
              titleBtn="ورود"
              titleProcess="در حال ورود"
              isClicked={isClickedSubmitButton}
              onSubmitForm={formSubmited}
            /> */}
          </FormUi>
          <ErrorForm error={props.error} />
          <BottomFormFeatuers
            isRegistered={props.showRegisterLink}
            isForgot={props.showForgetLink}
            link={props.linkFeatures}
            linkTitle={props.linkTitle}
            forgotPasswordLink="/resetpassword"
            forgotPasswordLinkTitle="رمز عبور را فراموش کرده ام"
          />
        </CardFormUi>
      </div>
    </div>
  );
}

export default PageFormUi;
