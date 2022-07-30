import { useState } from 'react';
// import EnterdUiForm from '../../components/ui/entered-ui-form'
import PageFormUi from "../../components/ui/EnterWebsiteUi/PageFormUi";
import { useRouter } from 'next/router';
import InputPassword from '../../components/LoginAndRegistrationSteps/inputPassword';
import { formData } from '../../data/formData';
import SubmitButton from '../../components/LoginAndRegistrationSteps/submitButton';
import { fa, en } from "../../translation";
function ResetPassword() {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const [error, setError] = useState(null)
    const router = useRouter();
    const { locale } = router;
    const t = locale === "fa" ? fa : en;
    const getPassword = (password) => {
        setPassword(password.trim())
    }
    const getRepeatPassword = (repeatPassword) => {
        setRepeatPassword(repeatPassword.trim())
    }

    const formSubmited = (e) => {
        e.preventDefault();
        if (password.length >= 6 && repeatPassword >= 6 && password === repeatPassword) {
            setClicked(true)
            setTimeout(() => {
                console.log('click enter')
                router.push('/login')
            }, 2000)

        } else if (password.length >= 6 && repeatPassword >= 6 && password !== repeatPassword) {
            setError(t.formData.notMatchNewPassword)
        }
        else {
            setClicked(false)
            setError(formData.fillFormError)
        }
    }
    console.log(`password : ${password}`);
    console.log(`repeat password : ${repeatPassword}`);

    return (
        <PageFormUi
            showRegisterLink={false}
            showForgetLink={false}
            linkFeatures=""
            linkTitle=""
            srcImage="/Image/logo.png"
            error={error}
            backArrowButtonHandlle={() => router.push('/')}
            pageTitle={t.pages.resetPassword.title}
        >
            <InputPassword
                label={t.formData.resetPasswordLabel}
                placeholder={t.formData.resetPasswordPlaceHolder}
                getPassword={getPassword}
            />
            <InputPassword
                label={t.formData.repeatResetPasswordLabel}
                placeholder={t.formData.repeatResetPasswordPlaceHolder}
                getPassword={getRepeatPassword}
            />
            <SubmitButton
                titleBtn={t.formData.submitButtonForNewPassword}
                titleProcess={t.formData.submitButtonForConfirmCodeProcess}
                isClicked={clicked}
                onSubmitForm={formSubmited}
            />
        </PageFormUi>


    )
}

export default ResetPassword