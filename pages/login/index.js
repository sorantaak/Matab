import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import * as BiIcons from "react-icons/bi";

function login() {
    const router = useRouter()
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
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 backdrop-blur-md bg-white/50 p-3 rounded-lg shadow-md">
                    <div className="py-5 px-10 lg:px-20 order-2 md:order-1">
                        <form>
                            <div className="mt-5">
                                <div><label htmlFor="">شماره موبایل</label></div>
                                <div className="w-full mt-2">
                                    <input type="text" className="w-full  border-2 border-gray-500 rounded-md px-3  h-14" placeholder="شماره موبایل" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div><label htmlFor="">رمز عبور</label></div>
                                <div className="w-full mt-2">
                                    <input type="password" className="w-full  border-2 border-gray-500 rounded-md px-3  h-14" placeholder="رمز عبور" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="w-full mt-2">
                                    <button className="w-full  bg-darkGold rounded-md px-3 h-14 text-white hover:bg-brightGold transition-all" >ورود</button>
                                </div>
                            </div>
                        </form>
                        <div className="w-full flex justify-between mt-5">
                            <div>ثبت نام نکرده ام</div>
                            <div className="text-darkGold hover:text-brightGold">
                                <Link href='/'>ثبت نام کنید</Link>
                            </div>
                        </div>
                        <div className="w-full flex flex-col  mt-5">
                            <div className="text-center">رمز عبور خود را فراموش کرده اید؟</div>
                            <div className="text-darkGold hover:text-brightGold inline-block text-center">
                                <Link href='/'>بازیابی رمز عبور</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full hidden p-3 order-1 md:order-2 md:p-16 lg:block">
                        <Image src='/image/logo.png' width={300} height={226} layout="responsive" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login