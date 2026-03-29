import mech from "../../json_files/mech_pyqs.json";
import BranchTable from "./BranchTable";


import React from 'react'

function TableMech() {
  return (
    <>
    <BranchTable branchData={mech} />;
    </>
  )
}

export default TableMech