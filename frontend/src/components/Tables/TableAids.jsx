

import React from "react";
import aids from "../../json_files/aids_pyqs.json";
import BranchTable from "./BranchTable";

function TableAids() {
  return <BranchTable branchData={aids} />;
}

export default TableAids;