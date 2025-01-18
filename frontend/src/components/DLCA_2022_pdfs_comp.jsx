import React from 'react'
import DLCA_2022_comp from "../Allpdf_json_file/DLCA_2022_pdfs_comp.json"

export default function DLCA_2022_pdfs_comp() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 grid justify-center">
    <div className="overflow-x-auto">
      <table className="table  ">
        <thead>
          <tr>
            <th></th>
            <th className="text-purple-700 font-medium">{DLCA_2022_comp.subject}</th>
            <th className="text-purple-700 font-medium">Path</th>
          </tr>
        </thead>
        <tbody>
          {DLCA_2022_comp.pdfs.map((pdf, index) => (
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