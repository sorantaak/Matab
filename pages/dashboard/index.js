import Sidebar from "../../components/dashboard/sidebar"
import { useRouter } from "next/router";
import { menuDashboard } from "../../data/menu-dashboard";
import AddPatientButton from "../../components/dashboard/add-patient-button";
function Dashboard() {
    const dashboardRoute = menuDashboard.map((menue) => {
        return menue.link;
    })
    // console.log(dashboardRoute);
    const router = useRouter()
    return (
        <div className='flex flex-row'>

            <div className='w-64 h-screen bg-sidebar flex flex-col justify-between items-center'>
                <Sidebar />
                <AddPatientButton />
            </div>
            <div className='w-full '>
                {
                    !dashboardRoute.includes(router.asPath) && <div>not found page</div>
                }
            </div>
        </div>
    )
}

export default Dashboard