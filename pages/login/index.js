import { useRouter } from 'next/router';
import InputMobile from "../../components/LoginAndRegistrationSteps/InputMobile";
import { useState } from "react";
import InputPassword from "../../components/LoginAndRegistrationSteps/inputPassword";
import SubmitButton from "../../components/LoginAndRegistrationSteps/submitButton";
import { formData } from "../../data/formData";
import PageFormUi from "../../components/ui/EnterWebsiteUi/PageFormUi";
import { en, fa } from '../../translation';
import Head from "next/head";


function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isClickedSubmitButton, setClickedSubmitButton] = useState(false);
    const [error, setError] = useState('')
    const router = useRouter();
    const { locale } = router;
    const t = locale === "fa" ? fa : en;
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
            setError(t.formData.fillFormError)
        }
    }


    return (
        <>
            <Head>
                <title>{t.pages.logIn.title}</title>
                <link rel="icon" href="/logo.ico" />
            </Head>
            <PageFormUi
                showRegisterLink={true}
                showForgetLink={true}
                linkFeatures="/signup"
                linkTitle={t.pages.logIn.dontRegisterTitle}
                srcImage="/Image/logo.png"
                error={error}
                backArrowButtonHandlle={() => router.push('/')}
                pageTitle={t.pages.logIn.title}
                forgotPasswordLinkTitle={t.pages.logIn.forgotPasswordLinkTitle}
            >
                <InputMobile getMobile={getMobileNumber} />
                <InputPassword
                    label={t.formData.passwordLabel}
                    placeholder={t.formData.passwordPalceHolder}
                    getPassword={getPassword}
                />
                <SubmitButton titleBtn={t.pages.logIn.titleBtn} titleProcess={t.pages.logIn.btnTitleProcess} isClicked={isClickedSubmitButton} onSubmitForm={formSubmited} />
            </PageFormUi>
        </>
    )
}

export default Login