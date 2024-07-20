import React from 'react';
import comps_pyqs from "../json_files/comps_pyqs.json";


function Tablecomps() {
  const semesters = comps_pyqs.semesters;

  const renderTableRows = (subjects) => {
    return subjects.map((subject, index) => (
      <tr key={index}>
        <td>
          <div className="flex items-center gap-3">
            <div className="font-bold">{subject.name}</div>
          </div>
        </td>
        <td className="text-blue-500"><a href={subject.viewLink} target="_blank">View PDF</a></td>
        <td className="text-blue-500"><a href={subject.downloadLink}>Download PDF</a></td>
        <td><a href={subject.answersLink}>Answers</a></td>
      </tr>
    ));
  };

  return (
    <>
    <div className="flex flex-col md:flex-row mt-10 mb-10">
      {/* Semester 1 (2022) */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <hr />
        <h1 className="text-center font-semibold text-2xl p-3">Semester 1 (2022) Previous Year Question Papers</h1>
        <hr />
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="dark:text-white font-semibold">
                <th>Subject</th>
                <th>Access</th>
                <th></th>
                <th>Resources</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows(semesters.sem1_2022)}
            </tbody>
          </table>
        </div>
      </div>

      {/* Semester 1 (2023) */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <hr />
        <h1 className="text-center font-semibold text-2xl p-3">Semester 1 (2023) Previous Year Question Papers</h1>
        <hr />
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="dark:text-white font-semibold">
                <th>Subject</th>
                <th>Access</th>
                <th></th>
                <th>Resources</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows(semesters.sem1_2023)}
            </tbody>
          </table>
        </div>
      </div>
    </div>


    <div className="flex flex-col md:flex-row">
    {/* Semester 2 (2022) */}
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <hr />
      <h1 className="text-center font-semibold text-2xl p-3">Semester 2 (2022) Previous Year Question Papers</h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="dark:text-white font-semibold">
              <th>Subject</th>
              <th>Access</th>
              <th></th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(semesters.sem2_2022)}
          </tbody>
        </table>
      </div>
    </div>

    {/* Semester 2 (2023) */}
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <hr />
      <h1 className="text-center font-semibold text-2xl p-3">Semester 2 (2023) Previous Year Question Papers</h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="dark:text-white font-semibold">
            <tr>
              <th>Subject</th>
              <th>Access</th>
              <th></th>
              <th>Resources</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(semesters.sem2_2023)}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row">
                {/* Semester 3 (2022) */}
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    <hr />
                    <h1 className="text-center font-semibold text-2xl p-3">Semester 3 (2022) Previous Year Question Papers</h1>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="dark:text-white font-semibold">
                                    <th>Subject</th>
                                    <th>Access</th>
                                    <th></th>
                                    <th>Resources</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableRows(semesters.sem3_2022)}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Semester 3 (2023) */}
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    <hr />
                    <h1 className="text-center font-semibold text-2xl p-3">Semester 3 (2023) Previous Year Question Papers</h1>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="dark:text-white font-semibold">
                                    <th>Subject</th>
                                    <th>Access</th>
                                    <th></th>
                                    <th>Resources</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableRows(semesters.sem3_2023)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row">
                {/* Semester 4 (2022) */}
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    <hr />
                    <h1 className="text-center font-semibold text-2xl p-3">Semester 4 (2022) Previous Year Question Papers</h1>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="dark:text-white font-semibold">
                                    <th>Subject</th>
                                    <th>Access</th>
                                    <th></th>
                                    <th>Resources</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableRows(semesters.sem4_2022)}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Semester 4 (2023) */}
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    <hr />
                    <h1 className="text-center font-semibold text-2xl p-3">Semester 4 (2023) Previous Year Question Papers</h1>
                    <hr />
                    <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr className="dark:text-white font-semibold">
                                    <th>Subject</th>
                                    <th>Access</th>
                                    <th></th>
                                    <th>Resources</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderTableRows(semesters.sem4_2023)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


               <div className="flex flex-col md:flex-row">
                 {/* Semester 7 (2022) */}
                 <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                     <hr />
                     <h1 className="text-center font-semibold text-2xl p-3">Semester 7 (2022) Previous Year Question Papers</h1>
                     <hr />
                     <div className="overflow-x-auto">
                         <table className="table">
                             <thead>
                                 <tr className="dark:text-white font-semibold">
                                     <th>Subject</th>
                                     <th>Access</th>
                                     <th></th>
                                    <th>Resources</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {renderTableRows(semesters.sem7_2022)}
                             </tbody>
                         </table>
                     </div>
                 </div>

                {/* Semester 7 (2023) */}
                 <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                     <hr />
                     <h1 className="text-center font-semibold text-2xl p-3">Semester 7 (2023) Previous Year Question Papers</h1>
                     <hr />
                     <div className="overflow-x-auto">
                         <table className="table">
                             <thead>
                                 <tr className="dark:text-white font-semibold">
                                     <th>Subject</th>
                                     <th>Access</th>
                                     <th></th>
                                     <th>Resources</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {renderTableRows(semesters.sem7_2023)}
                             </tbody>
                         </table>
                     </div>
               </div>
           </div>
       


              {/* <div className="flex flex-col md:flex-row"> */}
                 {/* Semester 8 (2022) */}
                  {/* <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                     <hr />
                     <h1 className="text-center font-semibold text-2xl p-3">Semester 8 (2022) Previous Year Question Papers</h1>
                     <hr />
                     <div className="overflow-x-auto">
                         <table className="table">
                             <thead>
                                 <tr className="dark:text-white font-semibold">
                                     <th>Subject</th>
                                     <th>Access</th>
                                     <th></th>
                                    <th>Resources</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {renderTableRows(semesters.sem8_2022)}
                             </tbody>
                         </table>
                     </div>
                 </div>  */}

                {/* Semester 8 (2023) */}
                  {/* <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                     <hr />
                     <h1 className="text-center font-semibold text-2xl p-3">Semester 8 (2023) Previous Year Question Papers</h1>
                     <hr />
                     <div className="overflow-x-auto">
                         <table className="table">
                             <thead>
                                 <tr className="dark:text-white font-semibold">
                                     <th>Subject</th>
                                     <th>Access</th>
                                     <th></th>
                                     <th>Resources</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {renderTableRows(semesters.sem8_2023)}
                             </tbody>
                         </table>
                     </div> 

                   </div>  
           </div>*/}
       
         
          
                     
 </>
   )
 }
export default Tablecomps
