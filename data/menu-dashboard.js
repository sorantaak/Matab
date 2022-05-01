import * as VsIcons from "react-icons/vsc";
// import * as IoIcons from "react-icons/io";
export const menuDashboard = [
    {
        title: 'داشبورد',
        icon: <VsIcons.VscDashboard />,
        link: '/dashboard'
    },
    {
        title: 'وقت ملاقات',
        icon: <VsIcons.VscTable />,
        link: '/dashboard#visits'
    },
    {
        title: 'مراجعه کنندگان',
        icon: <VsIcons.VscFeedback />,
        link: '/dashboard#clients'
    },
    {
        title: 'پرداخت ها',
        icon: <VsIcons.VscCreditCard />,
        link: '/dashboard#pays'
    },
    {
        title: 'کاربران',
        icon: <VsIcons.VscPerson />,
        link: '/dashboard#users'
    },
    {
        title: 'تنظیمات',
        icon: <VsIcons.VscGear />,
        link: '/dashboard#settings'
    },
]