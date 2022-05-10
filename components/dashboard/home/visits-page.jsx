import { appointment } from "../../../data/appointment";
import CardTable from "../card-table";
import Table from "./table/Table";

function VisitsPage() {
  const tableTitle = appointment.tableTitle;
  const thDatat = appointment.thData;
  const tBodyData = appointment.tBody;
  return (
    <div className="container mx-auto w-11/12">
      <div className="lg:pr-56">
        <Table
          tableTitle={tableTitle}
          thData={thDatat}
          tBodyData={tBodyData}
          isAction={true}
        />
        <CardTable
          tableTitle={tableTitle}
          tBodyData={tBodyData}
          isAction={true}
        />
      </div>
    </div>
  );
}

export default VisitsPage;
