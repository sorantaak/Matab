import { useState } from 'react';
import EnterdUiForm from '../../components/ui/entered-ui-form'
import { useRouter } from 'next/router';
import InputPassword from '../../components/LoginAndRegistrationSteps/inputPassword';
import { formData } from '../../data/formData';
import SubmitButton from '../../components/LoginAndRegistrationSteps/submitButton';

function index() {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [clicked, setClicked] = useState(false);
    const [error, setError] = useState(null)
    const getPassword = (password) => {
        setPassword(password.trim())
    }
    const getRepeatPassword = (repeatPassword) => {
        setRepeatPassword(repeatPassword.trim())
    }

    const formSubmited = (e) => {

        console.log('click enter')
        e.preventDefault();
        if (password.length >= 6 && repeatPassword >= 6 && password === repeatPassword) {
            setClicked(true)
            setTimeout(() => {
                console.log('click enter')
                router.push('/login')
            }, 2000)

        } else if (password.length >= 6 && repeatPassword >= 6 && password !== repeatPassword) {
            setError('رمزهای عبور با هم تطابق ندارند!!!')
        }
        else {
            setClicked(false)
            setError(formData.fillFormError)
        }
    }
    console.log(`password : ${password}`);
    console.log(`repeat password : ${repeatPassword}`);
    const router = useRouter()
    return (
        <form>
            <EnterdUiForm titlePage="بازیابی رمز عبور" error={error} backHandller={() => { router.push('/login') }}>
                <InputPassword
                    label={formData.resetPasswordLabel}
                    placeholder={formData.resetPasswordPlaceHolder}
                    getPassword={getPassword}
                />
                <InputPassword
                    label={formData.repeatResetPasswordLabel}
                    placeholder={formData.repeatResetPasswordPlaceHolder}
                    getPassword={getRepeatPassword}
                />
                <SubmitButton
                    titleBtn="رمز عبور جدید"
                    titleProcess="در حال ایجاد رمز عبور جدید"
                    isClicked={clicked}
                    onSubmitForm={formSubmited}

                />

            </EnterdUiForm>
        </form>
    )
}

export default index