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
  const [blob, setBlob] = useState(null);
  const cartProduct = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);
  console.log(dt);
  console.log(blob);

  const callfn = async (blob, dt) => {
    console.log(blob, dt);

    if (cartProduct.length !== 0 && blob) {
      const storageRef = ref(storage, `invoice-${dt.time}.pdf`);

      const snapshot = await uploadBytes(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log(downloadURL);

      // const send_mail = await fetch(
      //   `${process.env.REACT_APP_SEND_INVOICE}?invoice_url=${downloadURL}`,
      //   {
      //     mode: "no-cors",
      //   }
      // );
    }
  };

  useMemo(() => {
    callfn(blob, dt);
  }, [blob, dt.time]);

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
            <>
              {
                // handleDownloadClick(blob, url),
                <Button onClick={setBlob(blob)}>Download</Button>
              }
            </>
          )
        }
      </PDFDownloadLink>

      {/* <PDFViewer width={1000} height={1100} showToolbar={true}>
        <MyDocument />
      </PDFViewer> */}

      <br />
      <br />

      {/* {url && <iframe src={url} height={940} title="invoice" />} */}
    </div>
  );
}

export default Invoice;
