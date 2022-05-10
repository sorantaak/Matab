import { useRouter } from "next/router";
import Sidebar from '../dashboard/sidebar'
import AddPatientButton from '../dashboard/add-patient-button'
import UserAndSearchNotificattion from '../dashboard/userAndSearchAndNotification/user-search-notification'
import { useEffect, useState } from "react";
import BackPopUp from "../dashboard/userAndSearchAndNotification/back-popup";
function DahsboardLayout(props) {

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
    // const dashboardRoute = menuDashboard.map((menue) => {
    //     return menue.link;
    // })
    // console.log(dashboardRoute);
    const router = useRouter()
    const handleBackPopUp = (type) => {
        // console.log(type);
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
                setIsShowSidebarInMobile(false)
                break;
        }
    }
    return (
        <>
            {isShowBackPopup && <BackPopUp onShowBackPopUp={handleBackPopUp} />}
            {isShowSidebarInMobile && <BackPopUp onShowBackPopUp={handleBackPopUp} />}

            <header>
                <nav className="w-full lg:pr-56">
                    <UserAndSearchNotificattion onClick={handleBackPopUp} ishowUserMenu={isShowUserMenu} isShowNotification={isShowNotification} onClickHamberger={onHandleSideBarInMobile} />
                </nav>
            </header>
            <div className={`fixed overflow-y-auto ${isShowSidebarInMobile ? "right-0 shadow-lg z-[12]" : "-right-full z-10"} lg:right-0  bottom-0 top-0 transition-all duration-500 w-60  bg-sidebar flex justify-between items-center flex-col`}>
                <Sidebar onCloseSidebar={onCloseSidebar} isMobile={isShowSidebarInMobile} />
                <AddPatientButton />
            </div>
            <main>
                {props.children}
            </main>
        </>

    )
}

export default DahsboardLayout