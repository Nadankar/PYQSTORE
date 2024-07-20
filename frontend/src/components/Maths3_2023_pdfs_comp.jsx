import React from 'react'
import Maths3_2023_comp from "../Allpdf_json_file/Maths3_2023_pdfs_comp.json"

export default function Maths3_2023_pdfs_comp() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 grid justify-center">
    <div className="overflow-x-auto">
      <table className="table  ">
        <thead>
          <tr>
            <th></th>
            <th className="text-purple-700 font-medium">{Maths3_2023_comp.subject}</th>
            <th className="text-purple-700 font-medium">Path</th>
          </tr>
        </thead>
        <tbody>
          {Maths3_2023_comp.pdfs.map((pdf, index) => (
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