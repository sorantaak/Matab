import Sidebar from "../../components/dashboard/sidebar"
import { useRouter } from "next/router";
import { menuDashboard } from "../../data/menu-dashboard";
import AddPatientButton from "../../components/dashboard/add-patient-button";
import DahboardHome from "../../components/dashboard/home/dashboard-home";
import UserAndSearchNotificattion from "../../components/dashboard/userAndSearchAndNotification/user-search-notification";
import CountDownTimer from "../../components/CountdownTimer/count-down-timer";
import BackPopUp from "../../components/dashboard/userAndSearchAndNotification/back-popup";
import { useEffect, useState } from "react";

function Dashboard() {
    const [isShowBackPopup, setIsShowBackPopup] = useState(false)
    const [isShowUserMenu, setIsUserMenu] = useState(false)
    const [isShowNotification, setIsShowNotification] = useState(false)
    const [isShowSidebarInMobile, setIsShowSidebarInMobile] = useState(false);
    useEffect(() => {
        isShowSidebarInMobile ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
    }, [isShowSidebarInMobile])
    const onHandleSideBarInMobile = () => {
        setIsShowSidebarInMobile(true);
    }
    const onCloseSidebar = () => {
        setIsShowSidebarInMobile(false);
    }
    const dashboardRoute = menuDashboard.map((menue) => {
        return menue.link;
    })
    // console.log(dashboardRoute);
    const router = useRouter()
    const handleBackPopUp = (type) => {
        console.log(type);
        switch (type) {

            case 'user':
                setIsShowBackPopup(!isShowBackPopup);
                setIsUserMenu(!isShowUserMenu)
                break;
            case 'notification':
                setIsShowNotification(!isShowNotification)
                setIsShowBackPopup(!isShowBackPopup);
                break;
            default:
                setIsUserMenu(false);
                setIsShowNotification(false);
                setIsShowBackPopup(false);
                break;
        }
    }
    return (
        <div className='flex flex-row'>
            {isShowBackPopup && <BackPopUp onShowBackPopUp={handleBackPopUp} />}
            {isShowSidebarInMobile && <BackPopUp />}
            <div className={`fixed z-20 overflow-y-auto ${isShowSidebarInMobile ? "right-0 shadow-lg" : "-right-full"} lg:right-0  bottom-0 top-0 transition-all duration-500 w-60  bg-sidebar flex justify-between items-center flex-col`}>
                <Sidebar onCloseSidebar={onCloseSidebar} isMobile={isShowSidebarInMobile} />
                <AddPatientButton />
            </div>

            <div className='w-full lg:pr-56'>
                <UserAndSearchNotificattion onClick={handleBackPopUp} ishowUserMenu={isShowUserMenu} isShowNotification={isShowNotification} onClickHamberger={onHandleSideBarInMobile} />
                {
                    !dashboardRoute.includes(router.asPath) && <div>not found page</div>

                }
                {
                    router.asPath === '/dashboard' && <DahboardHome />
                }
                {
                    router.asPath === '/dashboard#visits' && <CountDownTimer remainTime={20} />
                }
            </div>
        </div>
    )
}

export default Dashboard