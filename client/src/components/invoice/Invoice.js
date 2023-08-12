import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import { Button } from "react-bootstrap";
import MyDocument from "./MyDocument";

function Invoice() {
  return (
    <div className="d-flex row my-3">
      <PDFDownloadLink
        className="mb-2"
        document={<MyDocument />}
        fileName="Invoice.pdf"
      >
        {({ loading }) =>
          loading ? <Button>Loading</Button> : <Button>Download</Button>
        }
      </PDFDownloadLink>

      <PDFViewer width={1000} height={1100} showToolbar={true}>
        <MyDocument />
      </PDFViewer>

      <div>hiiiii</div>
    </div>
  );
}

export default Invoice;
