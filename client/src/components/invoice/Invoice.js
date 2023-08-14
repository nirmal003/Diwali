import { PDFDownloadLink } from "@react-pdf/renderer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { storage } from "./firebase";

import MyDocument from "./MyDocument";

function Invoice() {
  const dt = useParams();
  // const [url, setUrl] = useState(null);
  const cartProduct = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);
  // console.log(dt);

  const handleDownloadClick = async (blob, url) => {
    // console.log(blob, url);
    // setUrl(url);

    if (cartProduct.length !== 0) {
      const storageRef = ref(storage, `invoice-${dt.time}.pdf`);

      uploadBytes(storageRef, blob).then((snapshot) => {
        console.log("success");
        getDownloadURL(snapshot.ref).then(async (downloadURL) => {
          console.log("Download link to your message: ", downloadURL);
          // await fetch(
          //   `${process.env.REACT_APP_SEND_INVOICE}?invoice_url=${downloadURL}`,
          //   {
          //     mode: "no-cors",
          //   }
          // ).then(() => console.log("mail sent successfully"));
        });
      });
    }
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

      {/* {url && <iframe src={url} height={940} title="invoice" />} */}
    </div>
  );
}

export default Invoice;
