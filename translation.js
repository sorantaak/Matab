import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
export const en = {
    mainnavbar: {
        menu: [
            { id: 1, title: "Home", path: "/", icon: <BiIcons.BiHome /> },
            { id: 2, title: "News", path: "/", icon: <BiIcons.BiNews /> },
            {
                id: 3,
                title: "Services",
                path: "/",
                icon: <MdIcons.MdMedicalServices />
            },
            {
                id: 4,
                title: "Queuing system",
                path: "/",
                icon: <BiIcons.BiSticker />
            }
        ]
    },
}

export const fa = {
    mainnavbar: {
        menu: [
            { id: 1, title: "خانه", path: "/", icon: <BiIcons.BiHome /> },
            { id: 2, title: "اخبار", path: "/", icon: <BiIcons.BiNews /> },
            {
                id: 3,
                title: "سرویسها",
                path: "/",
                icon: <MdIcons.MdMedicalServices />
            },
            {
                id: 4,
                title: "سیستم نوبت دهی",
                path: "/",
                icon: <BiIcons.BiSticker />
            }
        ]
    },
}