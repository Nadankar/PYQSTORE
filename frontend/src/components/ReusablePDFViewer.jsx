
import React from "react";
import { useParams } from "react-router-dom";

function ReusablePDFViewer() {
  const { "*": pdfPath } = useParams();

  const normalizedPdfPath = pdfPath
    ? `/assets/${decodeURIComponent(pdfPath).replace(/^\/+/, "")}`
    : "";
 
  if (!normalizedPdfPath) {
    return (
      <div className="w-full h-screen flex items-center justify-center dark:bg-slate-900 dark:text-white">
        <p>PDF path not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen dark:bg-slate-900">
      <iframe
        src={normalizedPdfPath}
        width="100%"
        height="100%"
        title="PDF Viewer"
        className="border-none"
      />
    </div>
  );
}

export default ReusablePDFViewer;