import { useRouter } from 'next/router';
import { useState } from 'react';
import SubmitButton from "../../components/LoginAndRegistrationSteps/submitButton";
import { formData } from "../../data/formData";
import CountDownTimer from "../../components/CountdownTimer/count-down-timer";
import InputConfirmation from "../../components/LoginAndRegistrationSteps/inputConfirmation"
import PageFormUi from "../../components/ui/EnterWebsiteUi/PageFormUi";

function confirmcode() {
    const [confirmCode, setConfirmNumber] = useState('');

    const [isClickedSubmitButton, setClickedSubmitButton] = useState(false);
    const [error, setError] = useState('')
    const router = useRouter()
    const testCode = "123456";
    console.log(confirmCode);
    const remainingTimer = 10;
    // console.log(password);
    const getConfirmCode = (cCode) => {
        setConfirmNumber(cCode)

    }

    const formSubmited = (e) => {
        e.preventDefault();
        console.log('click enter')

        if (confirmCode.length === 6) {

            if (confirmCode !== testCode) {
                setError("کد تایید صحیح نمی باشد!!")
                setClickedSubmitButton(false)
                return;
            } else {
                setClickedSubmitButton(true);
                setTimeout(() => {
                    console.log('click enter')
                    router.push('/')
                }, 2000)
            }


        } else {
            setError(formData.fillFormError)
        }
    }
    return (
        <PageFormUi
            showRegisterLink={false}
            showForgetLink={false}
            linkFeatures="/signup"
            linkTitle="ثبت نام نکرده ام"
            srcImage="/Image/logo.png"
            error={error}
            backArrowButtonHandlle={() => router.push('/')}
            pageTitle="ورود به پنل کاربری"
        >
            <InputConfirmation getConfirm={getConfirmCode} />
            <SubmitButton titleBtn="ثبت" titleProcess="در حال بررسی" isClicked={isClickedSubmitButton} onSubmitForm={formSubmited} />
            <CountDownTimer remainTime={remainingTimer} />
        </PageFormUi>

    )
}

export default confirmcode