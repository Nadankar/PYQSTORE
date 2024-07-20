import React from 'react'
import dsat_2022_pdf from "../Allpdf_json_file/dsat_2022_pdf.json"

function DSAT_2022_pdf() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 grid justify-center">
      <div className="overflow-x-auto">
        <table className="table dark:text-white bg-slate-900 ">
          <thead>
            <tr>
              <th></th>
              <th className="text-purple-700 font-medium">{ dsat_2022_pdf.subject}</th>
              <th className="text-purple-700 font-medium">Path</th>
            </tr>
          </thead>
          <tbody>
            { dsat_2022_pdf.pdfs.map((pdf, index) => (
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

export default DSAT_2022_pdf
