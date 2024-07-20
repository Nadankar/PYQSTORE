import React from 'react'
import PM_2023_mech from "../Allpdf_json_file/PM_2023_pdfs_mech.json"

export default function PM_2023_pdfs_mech() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 grid justify-center">
    <div className="overflow-x-auto">
      <table className="table ">
        <thead>
          <tr>
            <th></th>
            <th className="text-purple-700 font-medium">{PM_2023_mech.subject}</th>
            <th className="text-purple-700 font-medium">Path</th>
          </tr>
        </thead>
        <tbody>
          {PM_2023_mech.pdfs.map((pdf, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{pdf.pdfname}</td>
              <td className="text-blue-400">
                <a href={pdf.path} target="_blank" rel="noopener noreferrer">
                  {pdf.path}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}