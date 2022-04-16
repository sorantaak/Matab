import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import * as BiIcons from "react-icons/bi";
import InputMobile from "../../components/LoginAndRegistrationSteps/InputMobile";
import { useState } from "react";
import InputPassword from "../../components/LoginAndRegistrationSteps/inputPassword";
import SubmitButton from "../../components/LoginAndRegistrationSteps/submitButton";
import { formData } from "../../data/formData";


function login() {
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
        <div className="bg-backLogin-img bg-cover backdrop-blur-md bg-white/30 w-full h-screen">

            <div className="container w-4/5 mx-auto mt-9">
                <div className="flex flex-row w-full">
                    <h2 className="basis-2/3 lg:basis-1/2 text-left text-textParColor
                     text-lg font-bold">ورود به پنل کاربری</h2>
                    <span className="basis-1/2 flex justify-end text-3xl text-darkGold " title="بازگشت">
                        <BiIcons.BiArrowBack className="cursor-pointer" onClick={() => { router.push('/') }} />
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 backdrop-blur-md bg-white/50 px-10  lg:p-3 rounded-lg shadow-md">
                    <div className="py-2 px-2 lg:px-20 order-2 md:order-1">
                        <form>
                            <InputMobile getMobile={getMobileNumber} />
                            <InputPassword getPassword={getPassword} />
                            <SubmitButton titleBtn="ورود" titleProcess="در حال ورود" isClicked={isClickedSubmitButton} onSubmitForm={formSubmited} />
                        </form>
                        {true &&
                            <div className="text-red-700 text-center mt-2">{error}</div>
                        }
                        <div className="w-full flex justify-between mt-5">
                            <div>ثبت نام نکرده ام</div>
                            <div className="text-darkGold hover:text-brightGold">
                                <Link href='/signup'>ثبت نام کنید</Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-col mt-5">
                            <div className="text-center">رمز عبور خود را فراموش کرده اید؟</div>
                            <div className="text-darkGold hover:text-brightGold inline-block text-center">
                                <Link href='/resetpassword'>بازیابی رمز عبور</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full hidden md:block p-3 order-1 md:order-2 md:p-5 mt-10 text-center">
                        <Image src='/image/logo.png' width={300} height={226} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login