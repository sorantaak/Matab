import Sidebar from "../../components/dashboard/sidebar"
import { useRouter } from "next/router";
import { menuDashboard } from "../../data/menu-dashboard";
import AddPatientButton from "../../components/dashboard/add-patient-button";
import DahboardHome from "../../components/dashboard/home/dashboard-home";
import UserAndSearch from "../../components/dashboard/userAndSearch/user-search";
function Dashboard() {
    const dashboardRoute = menuDashboard.map((menue) => {
        return menue.link;
    })
    // console.log(dashboardRoute);
    const router = useRouter()
    return (
        <div className='flex flex-row'>

            <div className='w-64 h-screen bg-sidebar justify-between items-center hidden sm:flex  flex-col '>
                <Sidebar />
                <AddPatientButton />
            </div>
            <div className='w-full '>
                <UserAndSearch />
                {
                    !dashboardRoute.includes(router.asPath) && <div>not found page</div>

                }
                {
                    router.asPath === '/dashboard' && <DahboardHome />
                }
            </div>
        </div>
    )
}

export default Dashboard