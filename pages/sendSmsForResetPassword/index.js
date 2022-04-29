import { useState } from 'react';
import { useRouter } from 'next/router';
import { formData } from '../../data/formData';
import SubmitButton from '../../components/LoginAndRegistrationSteps/submitButton';
import InputMobile from '../../components/LoginAndRegistrationSteps/InputMobile';
import PageFormUi from '../../components/ui/EnterWebsiteUi/PageFormUi';
import CountDownTimer from '../../components/CountdownTimer/count-down-timer';
import MessageBox from '../../components/MessageBox/MessageBox';

function SendSmsForResetPassword() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [clicked, setClicked] = useState(false);
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState('')
    const [remainig, setRemaining] = useState(0);
    const getMobileNumber = (mobileNumber) => {
        setPhoneNumber(mobileNumber)

    }
    const formSubmited = (e) => {
        e.preventDefault();
        console.log('click enter')

        if (phoneNumber.length === 11) {
            setClicked(true)
            setRemaining(10)

            // setTimeout(() => {
            //     console.log('click enter')
            //     router.push('/')
            // }, 10000)

        } else {
            setError(formData.fillFormError)
        }
    }


    const router = useRouter()
    return (

        <PageFormUi
            showRegisterLink={false}
            showForgetLink={false}
            linkFeatures=""
            linkTitle=""
            srcImage="/Image/logo.png"
            error={error}
            backArrowButtonHandlle={() => router.push('/')}
            pageTitle="بازیابی رمز عبور">
            <InputMobile
                label={formData.resetPasswordLabel}
                placeholder={formData.resetPasswordPlaceHolder}
                getMobile={getMobileNumber}
            />

            <SubmitButton
                titleBtn="دریافت لینک بازیابی رمز عبور"
                titleProcess="در حال ارسال برای شما"
                isClicked={clicked}
                onSubmitForm={formSubmited}
            />
            {clicked && <CountDownTimer remainTime={remainig} />}
            {clicked && <MessageBox title="اس ام اس ارسال شد" body={formData.messageForResetPassword} />}
        </PageFormUi>
    )
}

export default SendSmsForResetPassword