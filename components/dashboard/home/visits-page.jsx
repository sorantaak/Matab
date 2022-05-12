import { useState } from "react";
import {
  appointment,
  getData,
  getInfoFromData,
} from "../../../data/appointment";
import CardTable from "../card-table";
import ButtonPagination from "../paginantion/button-pagination";
import Table from "./table/Table";

function VisitsPage() {
  const [numberRowForShow, setNumberRowForShow] = useState(8);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(getData(page, numberRowForShow));
  const btn = getInfoFromData(numberRowForShow);

  const catchData = (pageNumber, rows) => {
    setData(getData(pageNumber, rows));
    setPage(pageNumber);
    // setNumberRowForShow(rows);
  };

  console.log(btn);
  const tableTitle = appointment.tableTitle;
  const thDatat = appointment.thData;
  // const tBodyData = appointment.tBody;
  if (!data) {
    return <div className="">loading...</div>;
  }
  return (
    <div className="container mx-auto w-11/12 lg:pr-56">
      <h2 className="pt-5">{tableTitle}</h2>
      <div className="">
        <Table
          tableTitle=""
          thData={thDatat}
          tBodyData={data}
          isAction={true}
        />
        <CardTable tableTitle={tableTitle} tBodyData={data} isAction={true} />
      </div>
      <div className="mt-5">
        <ButtonPagination
          buttons={btn}
          onChangePage={catchData}
          setPage={page}
        />
      </div>
    </div>
  );
}

export default VisitsPage;
