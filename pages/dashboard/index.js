import Sidebar from "../../components/dashboard/sidebar"
import { useRouter } from "next/router";
import { menuDashboard } from "../../data/menu-dashboard";
import AddPatientButton from "../../components/dashboard/add-patient-button";
import DahboardHome from "../../components/dashboard/home/dashboard-home";
import UserAndSearch from "../../components/dashboard/userAndSearch/user-search";
import CountDownTimer from "../../components/CountdownTimer/count-down-timer";
import BackPopUp from "../../components/dashboard/userAndSearch/back-popup";
import { useState } from "react";
function Dashboard() {
    const [isShowBackPopup, setIsShowBackPopup] = useState(false)
    const dashboardRoute = menuDashboard.map((menue) => {
        return menue.link;
    })
    // console.log(dashboardRoute);
    const router = useRouter()
    const handleBackPopUp = () => {
        setIsShowBackPopup(!isShowBackPopup);
    }
    return (
        <div className='flex flex-row'>
            {isShowBackPopup && <BackPopUp onShowBackPopUp={handleBackPopUp} isShow={isShowBackPopup} />}
            <div className='w-64 h-screen bg-sidebar justify-between items-center hidden sm:flex  flex-col '>
                <Sidebar />
                <AddPatientButton />
            </div>
            <div className='w-full '>
                <UserAndSearch onShowBackPopUp={handleBackPopUp} isClicked={isShowBackPopup} />
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