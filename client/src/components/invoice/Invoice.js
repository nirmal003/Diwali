import { PDFDownloadLink } from "@react-pdf/renderer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { storage } from "./firebase";

import MyDocument from "./MyDocument";

function Invoice() {
  const dt = useParams();
  const [blob, setBlob] = useState(() => null);
  const [url, setUrl] = useState(() => null);
  const cartProduct = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);

  const callfn = async (blob) => {
    console.log(blob);

    if (cartProduct.length !== 0 && blob) {
      try {
        const storageRef = ref(storage, `invoice-${dt.time}.pdf`);
        const snapshot = await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        setUrl(downloadURL);

        // const send_mail = await fetch(
        //   `${process.env.REACT_APP_SEND_INVOICE}?invoice_url=${downloadURL}`,
        //   {
        //     mode: "no-cors",
        //   }
        // );
      } catch (err) {
        console.log(err);
      }
    }
  };

  useMemo(() => {
    callfn(blob);
  }, [blob, dt.time]);

  return (
    <div className="d-flex flex-column  my-3">
      <PDFDownloadLink
        className="mb-2"
        document={<MyDocument dt={dt} item={cartProduct} user={userData} />}
        fileName="AwesomeInvoice.pdf"
      >
        {({ blob, url, loading }) =>
          loading ? (
            <Button>Loading</Button>
          ) : (
            <Button onClick={setBlob(blob)}>Download</Button>
          )
        }
      </PDFDownloadLink>

      <br />

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
