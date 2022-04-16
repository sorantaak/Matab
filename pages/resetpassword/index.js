import { useState } from 'react';
import EnterdUiForm from '../../components/ui/entered-ui-form'
import { useRouter } from 'next/router';
import InputPassword from '../../components/LoginAndRegistrationSteps/inputPassword';
import { formData } from '../../data/formData';

function index() {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const getPassword = (password) => {
        setPassword(password)
    }
    const getRepeatPassword = (repeatPassword) => {
        setRepeatPassword(repeatPassword)
    }
    const router = useRouter()
    return (
        <EnterdUiForm titlePage="بازیابی رمز عبور" backHandller={() => { router.push('/login') }}>
            <InputPassword
                label={formData.passwordLabel}
                placeholder={formData.resetPasswordPlaceHolder}
                getPassword={getPassword}
            />
            <InputPassword
                label={formData.repeatResetPasswordLabel}
                placeholder={formData.repeatResetPasswordPlaceHolder}
                getPassword={getRepeatPassword}
            />
        </EnterdUiForm>
    )
}

export default index