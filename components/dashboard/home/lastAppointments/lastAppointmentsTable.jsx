import { useState } from "react";
import { getData, getInfoFromData } from "../../../../data/appointment";
import { lastAppointment } from "../../../../data/last-appointment";
import CardTable from "../../card-table";
import ButtonPagination from "../../paginantion/button-pagination";
import Table from "../table/Table";
function LastAppointmentsTable() {
  const [numberRowForShow, setNumberRowForShow] = useState(8);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(getData(page, numberRowForShow));
  const btn = getInfoFromData(numberRowForShow);

  const catchData = (pageNumber, rows) => {
    setData(getData(pageNumber, rows));
    setPage(pageNumber);
    // setNumberRowForShow(rows);
  };

  // console.log(btn);
  const tableTitle = lastAppointment.tableTitle;
  const thDatat = lastAppointment.thData;
  // const tBodyData = lastAppointment.tBody;
  return (
    <>
      <h2 className="mt-6">آخرین ملاقات ها</h2>
      <Table
        tableTitle={tableTitle}
        thData={thDatat}
        tBodyData={data}
        isAction={false}
      />
      <CardTable tableTitle={tableTitle} tBodyData={data} isAction={false} />
      <div className="mt-5">
        <ButtonPagination
          buttons={btn}
          onChangePage={catchData}
          setPage={page}
        />
      </div>
    </>
  );
}

export default LastAppointmentsTable;
