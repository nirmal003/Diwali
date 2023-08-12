import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import InvoiceClient from "./InvoiceClient";
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

  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "#000",
  },
});

function MyDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <InvoiceClient />
        <View style={styles.tableContainer}>
          <InvoiceHeader />
          <InvoiceItems />
          <InvoiceFooter />
        </View>
        <InvoiceThanks />
      </Page>
    </Document>
  );
}

export default MyDocument;
