import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import * as BiIcons from "react-icons/bi";
// import InputMobile from "../../components/LoginAndRegistrationSteps/InputMobile";
import { useState } from "react";
import { motion } from "framer-motion";
import SubmitButton from "../../components/LoginAndRegistrationSteps/submitButton";
import { formData } from "../../data/formData";
import CountDownTimer from "../../components/CountdownTimer/count-down-timer";
import InputConfirmation from "../../components/LoginAndRegistrationSteps/inputConfirmation"


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
        <div className="bg-backLogin-img bg-cover backdrop-blur-md bg-white/30 w-full h-screen">

            <div className="container w-4/5 mx-auto mt-9">
                <div className="flex flex-row w-full">
                    <h2 className="basis-2/3 lg:basis-1/2 text-left text-textParColor
                     text-lg font-bold">ثبت کد تاییدیه</h2>
                    <span className="basis-1/2 flex justify-end text-3xl text-darkGold " title="بازگشت">
                        <BiIcons.BiArrowBack className="cursor-pointer" onClick={() => { router.push('/') }} />
                    </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-20 backdrop-blur-md bg-white/50 px-5  lg:p-3 rounded-lg shadow-md">
                    <div className="py-2 px-1 lg:px-20 order-2 md:order-1">
                        <form>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: {
                                        scale: 0.8,
                                        opacity: 0,
                                    },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            delay: 0.7,
                                        },
                                    },
                                }}
                            >
                                <InputConfirmation getConfirm={getConfirmCode} />
                                <SubmitButton titleBtn="ثبت" titleProcess="در حال بررسی" isClicked={isClickedSubmitButton} onSubmitForm={formSubmited} />
                            </motion.div>
                        </form>
                        {true &&
                            <div className="text-red-700 text-center mt-2">{error}</div>
                        }
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: 0.8,
                                    opacity: 0,
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: .8,
                                    },
                                },
                            }}
                        >
                            <div dir="ltr" className="text-center">

                            </div>

                            <CountDownTimer remainTime={remainingTimer} />
                            <div className="w-full flex justify-between mt-10">
                                <div>قبلا ثبت نام کردم</div>
                                <div className="text-darkGold hover:text-brightGold">
                                    <Link href='/login'>وارد شوید</Link>
                                </div>
                            </div>

                        </motion.div>

                    </div>

                    <div className="w-full hidden md:block p-3 order-1 md:order-2 md:p-5 mt-2 text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: 0.8,
                                    opacity: 0,
                                },
                                visible: {
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 1,
                                    },
                                },
                            }}
                        >
                            <Image src='/image/logo.png' width={300} height={226} />
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default confirmcode