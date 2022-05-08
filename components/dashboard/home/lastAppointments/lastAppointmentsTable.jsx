import { lastAppointment } from "../../../../data/last-appointment";
import Table from "../Table";
function LastAppointmentsTable() {
  const tableTitle = lastAppointment.tableTitle;
  const thDatat = lastAppointment.thData;
  const tBodyData = lastAppointment.tBody;
  return (
    <Table tableTitle={tableTitle} thData={thDatat} tBodyData={tBodyData} />
  );
}

export default LastAppointmentsTable;
