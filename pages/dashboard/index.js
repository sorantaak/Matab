import Sidebar from "../../components/dashboard/sidebar"
import { useRouter } from "next/router";
import { menuDashboard } from "../../data/menu-dashboard";
import AddPatientButton from "../../components/dashboard/add-patient-button";
import DahboardHome from "../../components/dashboard/home/dashboard-home";
import UserAndSearchNotificattion from "../../components/dashboard/userAndSearchAndNotification/user-search-notification";
import CountDownTimer from "../../components/CountdownTimer/count-down-timer";
import BackPopUp from "../../components/dashboard/userAndSearchAndNotification/back-popup";
import { useState } from "react";
import { FaLess } from "react-icons/fa";
function Dashboard() {
    const [isShowBackPopup, setIsShowBackPopup] = useState(false)
    const [isShowUserMenu, setIsUserMenu] = useState(false)
    const [isShowNotification, setIsShowNotification] = useState(false)
    const [isShowSidebarInMobile, setIsShowSidebarInMobile] = useState(false);
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
            <div className={`fixed  z-20 overflow-y-auto ${isShowSidebarInMobile ? "right-0  shadow-lg" : "-right-full"} transition-all w-60 h-full lg:h-screen bg-sidebar flex justify-between items-center flex-col lg:static`}>
                <Sidebar onCloseSidebar={onCloseSidebar} isMobile={isShowSidebarInMobile} />
                <AddPatientButton />
            </div>

            <div className='w-full '>
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