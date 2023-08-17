import { PDFDownloadLink } from "@react-pdf/renderer";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";
import { FaPrint } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { storage } from "./firebase";

import { deleteAllCart } from "../product/cartSlice";
import MyDocument from "./MyDocument";

function Invoice() {
  const dt = useParams();
  const [blob, setBlob] = useState(() => null);
  const [url, setUrl] = useState(() => null);
  const cartProduct = useSelector((state) => state.cart.cart);
  const userData = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { pathname } = useLocation();

  const callfn = async (blob) => {
    setUrl(null);
    console.log(blob);
    if (Number(cartProduct.length) !== 0 && blob) {
      try {
        const storageRef = ref(storage, `invoice-${dt.time}.pdf`);
        const snapshot = await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(snapshot.ref);
        localStorage.setItem("url", JSON.stringify(downloadURL));
        const pdfUrl = await JSON.parse(localStorage.getItem("url"));
        setUrl(pdfUrl);

        await fetch(
          `${process.env.REACT_APP_SEND_INVOICE}?invoice_url=${downloadURL}`,
          {
            mode: "no-cors",
          }
        );

        dispatch(deleteAllCart());
        console.log("deletedAll", pdfUrl);
      } catch (err) {
        console.log(err);
      }
    }
    const pdfUrl = JSON.parse(localStorage.getItem("url"));
    if (localStorage.length) setUrl(pdfUrl);
  };

  useMemo(() => {
    callfn(blob);
  }, [blob, dt.time]);

  const goBack = () => {
    console.log("call from back");
    dispatch(deleteAllCart());
    navigate("/product");
  };

  return (
    <div className="d-flex flex-column  my-3 mb-5 pb-5">
      <h2 className="fw-bold">Download PDF Invoice</h2>
      <PDFDownloadLink
        className="mb-2"
        document={<MyDocument dt={dt} item={cartProduct} user={userData} />}
        fileName="AwesomeInvoice.pdf"
      >
        {({ blob, url, loading }) =>
          loading ? (
            <div>
              <ImSpinner3 />
              &nbsp; Loading...
            </div>
          ) : (
            <div onClick={setBlob(blob)}>
              <Button
                className={`bg-secondary fw-bold border-0 px-2 ${
                  cartProduct.length > 0 ? "" : "d-none"
                }`}
              >
                <FaPrint /> &nbsp; Invoice PDF file
              </Button>
            </div>
          )
        }
      </PDFDownloadLink>

      {url ? (
        <a href={url} download="invoice" target="_blank" rel="noreferrer">
          <Button
            className={`bg-secondary fw-bold border-0 px-2 ${
              Number(cartProduct.length) === 0 ? "" : "d-none"
            }`}
          >
            <FaPrint /> &nbsp; Invoice PDF file
          </Button>
        </a>
      ) : (
        <div>
          <Button
            className={`bg-secondary fw-bold border-0 px-3 ${
              Number(cartProduct.length) === 0 ? "" : "d-none"
            }`}
          >
            <ImSpinner3 />
            &nbsp; Loading...
          </Button>
        </div>
      )}

      <br />

      {url && (
        <div>
          <Button variant="danger px-4 mb-5" onClick={() => goBack()}>
            Back
          </Button>
        </div>
      )}

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
