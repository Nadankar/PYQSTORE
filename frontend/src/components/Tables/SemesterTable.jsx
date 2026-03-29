
import React from "react";

function SemesterTable({ title, subjects }) {
  const getPdfRoute = (viewLink) => {
  if (!viewLink || viewLink === "#") return null;

  return viewLink; 
};
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <hr />
      <h1 className="text-center font-semibold text-2xl p-3">{title}</h1>
      <hr />
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr className="dark:text-white font-semibold">
              <th>Subject</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            {subjects?.map((subject, index) => {
              const pdfRoute = getPdfRoute(subject.viewLink);

              return (
                <tr key={index}>
                  <td className="font-bold">{subject.name}</td>
                  <td className="text-blue-500">
                    {pdfRoute ? (
                      <a
                        href={pdfRoute}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        View PDF
                      </a>
                    ) : (
                      <span className="text-gray-400 cursor-not-allowed">
                        Not Available
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SemesterTable;