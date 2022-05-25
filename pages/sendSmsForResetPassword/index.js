import { useState } from 'react';
import { useRouter } from 'next/router';
import { formData } from '../../data/formData';
import SubmitButton from '../../components/LoginAndRegistrationSteps/submitButton';
import InputMobile from '../../components/LoginAndRegistrationSteps/InputMobile';
import PageFormUi from '../../components/ui/EnterWebsiteUi/PageFormUi';
import CountDownTimer from '../../components/CountdownTimer/count-down-timer';
import MessageBox from '../../components/MessageBox/MessageBox';
import { fa, en } from "../../translation";
function SendSmsForResetPassword() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [clicked, setClicked] = useState(false);
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState('')
    const [remainig, setRemaining] = useState(0);
    const router = useRouter();
    const { locale } = router;
    const t = locale === "fa" ? fa : en;
    const getMobileNumber = (mobileNumber) => {
        setPhoneNumber(mobileNumber)

    }
    const formSubmited = (e) => {
        e.preventDefault();
        console.log('click enter')

        if (phoneNumber.length === 11) {
            setClicked(true)
            setRemaining(10)

            setTimeout(() => {
                console.log('click enter')
                router.push('/resetpassword')
            }, 3000)

        } else {
            setError(t.formData.fillFormError)
        }
    }



    return (

        <PageFormUi
            showRegisterLink={false}
            showForgetLink={false}
            linkFeatures=""
            linkTitle=""
            srcImage="/Image/logo.png"
            error={error}
            backArrowButtonHandlle={() => router.push('/')}
            pageTitle={t.pages.sendSmsForResetPassword.title}
        >
            <InputMobile
                label={t.formData.resetPasswordLabel}
                placeholder={t.formData.resetPasswordPlaceHolder}
                getMobile={getMobileNumber}
            />

            <SubmitButton
                titleBtn={t.pages.sendSmsForResetPassword.titleBtn}
                titleProcess={t.pages.sendSmsForResetPassword.titleProcess}
                isClicked={clicked}
                onSubmitForm={formSubmited}
            />
            {clicked && <CountDownTimer remainTime={remainig} />}
            {clicked && <MessageBox title={t.formData.messageSended} body={t.formData.messageForResetPassword} />}
        </PageFormUi>
    )
}

export default SendSmsForResetPassword