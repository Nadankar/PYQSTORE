import ecs from '../../json_files/ecs_pyqs.json'
import BranchTable from "./BranchTable";

function TableEcs() { 
  return (
    <>
    <BranchTable branchData={ecs} />;
    </>
  )
}

export default TableEcs;   