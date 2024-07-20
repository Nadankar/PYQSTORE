import React from 'react'
import chemistry1_2022_pdf from "../Allpdf_json_file/chemistry1_2022_pdf.json"

function Chemistry1_2022_pdf() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 grid justify-center">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="text-purple-700 font-medium">{chemistry1_2022_pdf.subject}</th>
              <th className="text-purple-700 font-medium">Path</th>
            </tr>
          </thead>
          <tbody>
            {chemistry1_2022_pdf.pdfs.map((pdf, index) => (
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

export default Chemistry1_2022_pdf
