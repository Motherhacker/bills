import React from "react";
import BillList from "./bills/BillList";
import CreateBill from "./bills/CreateBill";

const Content = () => {
  return (
    <div>
      <CreateBill />
      <hr />
      <BillList />
    </div>
  );
};

export default Content;
