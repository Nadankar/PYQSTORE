
import comps from '../../json_files/comps_pyqs.json'
import BranchTable from "./BranchTable";

function TableComps() { 
  return(
<>
 <BranchTable branchData={comps} />;
</>
  )
}

export default TableComps; 