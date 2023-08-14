import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import MyDocument from "./MyDocument";

function Invoice() {
  const dt = useParams();
  const [url, setUrl] = useState(null);
  const cartProduct = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);
  console.log(dt);

  const handleDownloadClick = async (blob, url) => {
    console.log(blob, url);
    setUrl(url);

    // const fr = new FileReader();
    // fr.readAsDataURL(blob);
    // fr.addEventListener("load", () => {
    //   const res = fr.result;
    //   console.log(res);
    // });
  };

  return (
    <div className="d-flex row my-3">
      <PDFDownloadLink
        className="mb-2"
        document={<MyDocument dt={dt} item={cartProduct} user={userData} />}
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

      <br />
      <br />

      {url && <iframe src={url} height={940} title="invoice" />}
    </div>
  );
}

export default Invoice;
