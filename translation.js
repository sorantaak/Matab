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
    }
}