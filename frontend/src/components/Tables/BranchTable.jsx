

import React from "react";
import SemesterTable from "./SemesterTable";

function BranchTable({ branchData }) {
  const semesters = branchData.semesters;

  return (
    <>
      {Object.keys(semesters).map((key, index) => {
        const [sem, year] = key.split("_");

        return (
          <div key={index} className="mt-10 mb-10">
            <SemesterTable
              title={`Semester ${sem.replace("sem", "")} (${year}) Previous Year Question Papers`}
              subjects={semesters[key]}
            />
          </div>
        );
      })}
    </>
  );
}

export default BranchTable;



