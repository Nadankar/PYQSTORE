import React from 'react'
import DL_and_CA_2023 from "../Allpdf_json_file/dlca_2022_pdfs_aids.json"

function DL_and_CA_2023_pdfs_aids() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 grid justify-center">
    <div className="overflow-x-auto">
      <table className="table  ">
        <thead>
          <tr>
            <th></th>
            <th className="text-purple-700 font-medium">{DL_and_CA_2023.subject}</th>
            <th className="text-purple-700 font-medium">Path</th>
          </tr>
        </thead>
        <tbody>
          {DL_and_CA_2023.pdfs.map((pdf, index) => (
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

export default DL_and_CA_2023_pdfs_aids
