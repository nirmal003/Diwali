import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import InvoiceFooter from "./InvoiceFooter";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceItems from "./InvoiceItems";
import InvoiceThanks from "./InvoiceThanks";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 6,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

function MyDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceHeader />
        <InvoiceItems />
        <InvoiceFooter />
        <InvoiceThanks />
      </Page>
    </Document>
  );
}

export default MyDocument;
