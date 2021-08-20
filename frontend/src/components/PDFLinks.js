import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ace from './ace.pdf'
// const ace = `https://aceclasses.fcps.edu/Special/ACE%20Classes%20Fall%202021%20Virtual.pdf`
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function PDFLinks() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function onResumeClick() {
    window.open(ace);
  }

  const next = () => {
    setPageNumber(pageNumber+1)
  }
  const previous = () => {
      setPageNumber(pageNumber-1)
  }
  return (
    <div className="container">
      <Document file={{url: ace}} style={{width: "600px", height: "500 px"}} onLoadSuccess={onDocumentLoadSuccess} >
        <Page size="A4" pageNumber={pageNumber} />
      </Document>
      <div className="" style={{width: "90%"}}>
          <div className="row">
              <div className="col">
                {numPages && <button className="btn btn-outline-primary" onClick={previous}>Previous</button>}
            </div>
            <div className="col">
                {numPages && <button className="btn btn-outline-primary" onClick={next}>Next</button>}
            </div>
          </div>
      <span className="p-3 mb-2 bg-transparent text-dark">Page {pageNumber} of {numPages}</span>
      </div>

     
    </div>
  );
}

export default PDFLinks;
