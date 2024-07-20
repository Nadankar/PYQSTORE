import React from 'react'
import eh_2022_pdfs_aids from "../Allpdf_json_file/eh_2022_pdfs_aids.json"

export default function EH_2022_pdfs_aids() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 grid justify-center">
      <div className="overflow-x-auto">
        <table className="table  ">
          <thead>
            <tr>
              <th></th>
              <th className="text-purple-700 font-medium">{eh_2022_pdfs_aids.subject}</th>
              <th className="text-purple-700 font-medium">Path</th>
            </tr>
          </thead>
          <tbody>
            {eh_2022_pdfs_aids.pdfs.map((pdf, index) => (
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
