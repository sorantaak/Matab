import { useRouter } from 'next/router';
import InputMobile from "../../components/LoginAndRegistrationSteps/InputMobile";
import { useState } from "react";
import InputPassword from "../../components/LoginAndRegistrationSteps/inputPassword";
import SubmitButton from "../../components/LoginAndRegistrationSteps/submitButton";
import { formData } from "../../data/formData";
import PageFormUi from "../../components/ui/EnterWebsiteUi/PageFormUi";


function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isClickedSubmitButton, setClickedSubmitButton] = useState(false);
    const [error, setError] = useState('')
    const router = useRouter()
    console.log(phoneNumber);
    console.log(password);
    const getMobileNumber = (mobileNumber) => {
        setPhoneNumber(mobileNumber)

    }
    const getPassword = (password) => {
        setPassword(password)
    }
    const formSubmited = (e) => {
        e.preventDefault();
        console.log('click enter')

        if (phoneNumber.length === 11 && password.length >= 6) {
            setClickedSubmitButton(true)
            setTimeout(() => {
                console.log('click enter')
                router.push('/')
            }, 2000)

        } else {
            setError(formData.fillFormError)
        }
    }


    return (
        <PageFormUi
            showRegisterLink={true}
            showForgetLink={true}
            linkFeatures="/signup"
            linkTitle="ثبت نام نکرده ام"
            srcImage="/Image/logo.png"
            error={error}
            backArrowButtonHandlle={() => router.push('/')}
            pageTitle="ورود به پنل کاربری"
        >
            <InputMobile getMobile={getMobileNumber} />
            <InputPassword
                label={formData.passwordLabel}
                placeholder={formData.passwordPalceHolder}
                getPassword={getPassword}
            />
            <SubmitButton titleBtn="ورود" titleProcess="در حال ورود" isClicked={isClickedSubmitButton} onSubmitForm={formSubmited} />
        </PageFormUi>
    )
}

export default Login