import { lastAppointment } from "../../../../data/last-appointment";
import CardTable from "../../card-table";
import Table from "../table/Table";
function LastAppointmentsTable() {
  const tableTitle = lastAppointment.tableTitle;
  const thDatat = lastAppointment.thData;
  const tBodyData = lastAppointment.tBody;
  return (
    <>
      <Table
        tableTitle={tableTitle}
        thData={thDatat}
        tBodyData={tBodyData}
        isAction={false}
      />
      <CardTable
        tableTitle={tableTitle}
        tBodyData={tBodyData}
        isAction={false}
      />
    </>
  );
}

export default LastAppointmentsTable;
