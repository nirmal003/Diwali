import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PdfFlie from "./PdfFlie";

function MyDocument() {
  return (
    <div>
      <PDFDownloadLink document={<PdfFlie />}>
        {({ loading }) =>
          loading ? <button>loding</button> : <button>download</button>
        }
      </PDFDownloadLink>

      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
    </div>
  );
}

export default MyDocument;
