import React from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Preview({ url }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <object data={url} type="application/pdf" width="100%" height="800px">
        <p>PDF viewer is not supported in this browser.</p>
      </object>
      {/* <Document file={url}>
        <Page pageNumber={1} />
      </Document> */}
    </div>
  );
}

export default Preview;
