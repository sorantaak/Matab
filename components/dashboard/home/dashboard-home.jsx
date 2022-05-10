import { tcData } from "../../../data/tc-data";
import CardTable from "../card-table";
import LastAppointmentsTable from "./lastAppointments/lastAppointmentsTable";
import TcCard from "./tcCard/tc-card";

function DahboardHome() {
  return (
    <div className="container mx-auto w-11/12 lg:pr-56">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tcData.map((data, index) => (
          <TcCard
            key={index}
            title={data.title}
            number={data.number}
            icon={data.icon}
            isAction={false}
          />
        ))}
      </div>
      <LastAppointmentsTable />
    </div>
  );
}

export default DahboardHome;
