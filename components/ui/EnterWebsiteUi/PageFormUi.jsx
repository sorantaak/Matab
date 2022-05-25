import * as BiIcons from "react-icons/bi";
import BottomFormFeatuers from "./BottomFormFeatuers";
import CardFormUi from "./CardFormUi";
import ErrorForm from "./ErrorForm";
import FormUi from "./FormUi";
import ImageFromUi from "./ImageFromUi";

function PageFormUi(props) {
  return (
    <div className="bg-backLogin-img bg-cover backdrop-blur-md bg-white/30 w-full h-screen ">
      <div className="container w-4/5 mx-auto pt-12">
        <div className="flex rtl:flex-row ltr:flex-row-reverse justify-center w-full">
          <h2
            className="flex-1 text-center text-textParColor
                     text-lg font-bold"
          >
            {props.pageTitle}
          </h2>
          <div className="flex text-3xl text-darkGold " title={props.titleIcon}>
            <BiIcons.BiArrowBack
              className="cursor-pointer"
              onClick={props.backArrowButtonHandlle}
            />
          </div>
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
            forgotPasswordLink="/sendSmsForResetPassword"
            forgotPasswordLinkTitle={props.forgotPasswordLinkTitle}
          />
        </CardFormUi>
      </div>
    </div>
  );
}

export default PageFormUi;
