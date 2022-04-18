import { useRouter } from 'next/router';
import InputMobile from "../../components/LoginAndRegistrationSteps/InputMobile";
import { useState } from "react";
import { motion } from "framer-motion";
import SubmitButton from "../../components/LoginAndRegistrationSteps/submitButton";
import { formData } from "../../data/formData";
import Head from "next/head";
import PageFormUi from "../../components/ui/EnterWebsiteUi/PageFormUi";



function signup() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const [isClickedSubmitButton, setClickedSubmitButton] = useState(false);
    const [error, setError] = useState('')
    const router = useRouter()
    console.log(phoneNumber);
    // console.log(password);
    const getMobileNumber = (mobileNumber) => {
        setPhoneNumber(mobileNumber)

    }

    const formSubmited = (e) => {
        e.preventDefault();
        console.log('click enter')

        if (phoneNumber.length === 11) {
            setClickedSubmitButton(true)
            setTimeout(() => {
                console.log('click enter')
                router.push('/confirmcode')
            }, 2000)

        } else {
            setError(formData.fillFormError)
        }
    }

    return (
        <>
            <Head>
                <title>ثبت نام</title>
                <link rel="icon" href="/logo.ico" />
            </Head>
            <PageFormUi
                showRegisterLink={true}
                showForgetLink={false}
                linkFeatures="/login"
                linkTitle="قبلا ثبت نام کرده ام وارد شوید"
                srcImage="/Image/logo.png"
                error={error}
                backArrowButtonHandlle={() => router.push('/login')}
                pageTitle="ثبت نام"
            >
                <InputMobile getMobile={getMobileNumber} />
                <SubmitButton titleBtn="ورود" titleProcess="در حال ورود" isClicked={isClickedSubmitButton} onSubmitForm={formSubmited} />
            </PageFormUi>
        </>
    )
}

export default signup