import { tcData } from "../../../data/tc-data";
import LastAppointments from "./lastAppointments/lastAppointments";
import TcCard from "./tcCard/tc-card";

function DahboardHome() {
  return (
    <div className="container mx-auto w-11/12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tcData.map((data, index) => (
          <TcCard
            key={index}
            title={data.title}
            number={data.number}
            icon={data.icon}
          />
        ))}
      </div>
      <LastAppointments />
    </div>
  );
}

export default DahboardHome;
