import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";
export const en = {
    auto: {
        login: "login",
        singUp: "sign up"
    },
    mainnavbar: {
        menu: [
            { id: 1, title: "Home", path: "/", icon: <BiIcons.BiHome /> },
            { id: 2, title: "News", path: "/news", icon: <BiIcons.BiNews /> },
            {
                id: 3,
                title: "Services",
                path: "/services",
                icon: <MdIcons.MdMedicalServices />
            },
            {
                id: 4,
                title: "Queuing system",
                path: "/queuing-system",
                icon: <BiIcons.BiSticker />
            },
            {
                id: 5,
                title: "About Us",
                path: "/about-us",
                icon: <BsIcons.BsInfoCircle />
            },
            {
                id: 6,
                title: "Contact Us",
                path: "/contact-us",
                icon: <TiIcons.TiContacts />
            }
        ]
    },
    footer: {
        sitemap: {
            title: "Sitemap",
            copyright: "All material and intellectual rights are reserved for Dr. Salam Rahimi's dentistry",
        },
        address: {
            title: "address",
            state: "West Azarbayajan",
            city: "Mahabad",
            street: "Sallahaddin Ayoubi Gharbi",
            apartment: "Vaffaei apartment",
            floor: "floor 3",
            whatsapp_title: "whatsapp",
            whatssapp: "0914 977 3115",
            number_title: "Offical Phone",
            number: "0444 224 8888"
        }
    },
    ourmMoto: {
        title: 'Our priority',
        subTitle: 'Your beautiful smile'
    },
    formData: {
        passwordLabel: "password",
        passwordPalceHolder: "password",
        mobileLabel: "mobile number",
        mobilePlaceHolder: "mobile number",
        confirmLabel: "confirm code",
        confirmPlaceholder: "confirm code",
        submitButtonLable: "log in",
        submitButtonLableProcess: "logining...",
        fillFormError: "Please fill out the form information carefully!!!",
        resetPasswordLabel: "new password",
        resetPasswordPlaceHolder: "new password",
        repeatResetPasswordLabel: "repeat new password",
        repeatResetPasswordPlaceHolder: "repeat new password",
        messageForResetPassword: "A password recovery link has been sent to you. Please click on it to be redirected to the password recovery page."

    },
    pages: {
        singUp: { title: "sign up" },
        logIn: { title: "login", titleBtn: "login", btnTitleProcess: "logining" },
        resetPassword: { title: "reset password" },
        sendSmsForResetPassword: { title: "get a password recovery link" }

    }
}




export const fa = {
    auto: {
        login: "ورود",
        singUp: "ثبت نام"
    },
    mainnavbar: {
        menu: [
            { id: 1, title: "خانه", path: "/", icon: <BiIcons.BiHome /> },
            { id: 2, title: "اخبار", path: "/news", icon: <BiIcons.BiNews /> },
            {
                id: 3,
                title: "سرویسها",
                path: "/services",
                icon: <MdIcons.MdMedicalServices />
            },
            {
                id: 4,
                title: "سیستم نوبت دهی",
                path: "/queuing-system",
                icon: <BiIcons.BiSticker />
            },
            {
                id: 5,
                title: "درباره ما",
                path: "/about-us",
                icon: <BsIcons.BsInfoCircle />
            },
            {
                id: 6,
                title: "تماس با ما",
                path: "/contact-us",
                icon: <TiIcons.TiContacts />
            }
        ]
    },
    footer: {
        sitemap: {
            title: "نقشه سایت",
            copyright: "کلیه حقوق مادی و معنوی برای دندانپزشکی دکتر سلام رحیمی محفوظ است",
        },
        address: {
            title: "آدرس",
            state: "آذربایجان غربی",
            city: "مهاباد",
            street: "صلاح الدین ایوبی غربی",
            apartment: "ُساختمان وفایی",
            floor: "طبقه 3",
            whatsapp_title: "واتساپ",
            whatssapp: "0914 977 3115",
            number_title: "شماره مطب",
            number: "0444 224 8888"
        }
    },
    ourmMoto: {
        title: 'اولویت ما',
        subTitle: 'لبخند زیبای شماست'
    },
    formData: {
        passwordLabel: "رمز عبور",
        passwordPalceHolder: "رمز عبور",
        mobileLabel: "شماره موبایل",
        mobilePlaceHolder: "شماره موبایل",
        confirmLabel: "کد تاییدیه",
        confirmPlaceholder: "کد تاییدیه",
        submitButtonLable: "ورود",
        submitButtonLableProcess: "در حال ورود...",
        fillFormError: "لطفا اطلاعات فرم را با دقت پر کنید!!!",
        resetPasswordLabel: "رمز عبور جدید",
        resetPasswordPlaceHolder: "رمز عبور جدید",
        repeatResetPasswordLabel: "تکرار رمز عبور جدید",
        repeatResetPasswordPlaceHolder: "تکرار رمز عبور جدید",
        messageForResetPassword: "لینک بازیابی رمز عبور برای شما ارسال شد. لطفا بر روی آن کلیک کنید تا به صفحه بازیابی رمز عبور هدایت شوید."

    },
    pages: {
        singUp: { title: "ثبت نام" },
        logIn: { title: "ورود", titleBtn: "ورود", btnTitleProcess: "در حال ورود" },
        resetPassword: { title: "بازیابی رمز عبور" },
        sendSmsForResetPassword: { title: "دریافت لینک بازیابی رمز عبور" }

    }
}