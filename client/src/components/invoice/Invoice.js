import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import MyDocument from "./MyDocument";

function Invoice() {
  const { date } = useParams();
  const cartProduct = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);
  console.log(date);

  const handleDownloadClick = async (blob, url) => {
    console.log(blob, url);
  };

  return (
    <div className="d-flex row my-3">
      <PDFDownloadLink
        className="mb-2"
        document={<MyDocument date={date} item={cartProduct} user={userData} />}
        fileName="AwesomeInvoice.pdf"
      >
        {({ blob, url, loading }) =>
          loading ? (
            <Button>Loading</Button>
          ) : (
            <>{(handleDownloadClick(blob, url), (<Button>Download</Button>))}</>
          )
        }
      </PDFDownloadLink>

      {/* <PDFViewer width={1000} height={1100} showToolbar={true}>
        <MyDocument />
      </PDFViewer> */}
    </div>
  );
}

export default Invoice;
