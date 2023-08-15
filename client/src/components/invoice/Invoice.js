import { PDFDownloadLink } from "@react-pdf/renderer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { storage } from "./firebase";

import MyDocument from "./MyDocument";

function Invoice() {
  const dt = useParams();
  const [blob, setBlob] = useState(() => null);
  const [url, setUrl] = useState(() => null);
  const cartProduct = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);

  const callfn = async (blob) => {
    setUrl(null);
    console.log(blob);
    if (cartProduct.length !== 0 && blob) {
      try {
        const storageRef = ref(storage, `invoice-${dt.time}.pdf`);
        const snapshot = await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        const local = localStorage.setItem("url", JSON.stringify(downloadURL));
        const pdfUrl = JSON.parse(localStorage.getItem("url"));
        setUrl(pdfUrl);

        const send_mail = await fetch(
          `${process.env.REACT_APP_SEND_INVOICE}?invoice_url=${downloadURL}`,
          {
            mode: "no-cors",
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
    const pdfUrl = JSON.parse(localStorage.getItem("url"));
    setUrl(pdfUrl);
  };

  useMemo(() => {
    callfn(blob);
  }, [blob, dt.time]);

  // const handlePrint = (url) => {
  //   window.print(url);
  // };

  useEffect(() => {}, [url]);

  return (
    <div className="d-flex flex-column  my-3 mb-5 pb-5">
      <h2 className="fw-bold">Download PDF Invoice</h2>
      <PDFDownloadLink
        className="mb-2"
        document={<MyDocument dt={dt} item={cartProduct} user={userData} />}
        fileName="AwesomeInvoice.pdf"
      >
        {({ blob, url, loading }) =>
          loading ? <div></div> : <div onClick={setBlob(blob)}></div>
        }
      </PDFDownloadLink>

      {/* <Button onClick={() => handlePrint(url)}>Print PDF</Button> */}

      {url ? (
        <a href={url} download="invoice" target="_blank">
          <Button className="bg-secondary fw-bold border-0 px-2">
            <FaPrint /> &nbsp; Invoice PDF file
          </Button>
        </a>
      ) : (
        <div>
          <Button className="bg-secondary fw-bold border-0 px-3">
            <ImSpinner3 />
            &nbsp; Loading...
          </Button>
        </div>
      )}

      <br />

      <Link to="/product">
        <Button variant="danger px-4">Back</Button>
      </Link>

      {url && (
        <iframe
          src={url}
          width="100%"
          height={940}
          title="invoice"
          className="d-none d-lg-block d-md-block"
        />
      )}
    </div>
  );
}

export default Invoice;
