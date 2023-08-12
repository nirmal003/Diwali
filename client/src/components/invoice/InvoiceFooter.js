import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderColor: "#000",

    borderBottomWidth: 1,
    fontSize: 12.5,
    fontWeight: "bold",
  },
  description: {
    width: "82%",
    textAlign: "right",
    borderRightColor: "#000",
    borderRightWidth: 1,
    paddingRight: 8,
    paddingVertical: 4,
    height: 24,
  },
  total: {
    width: "18%",
    textAlign: "right",
    height: 24,
    paddingRight: 8,
    paddingVertical: 4,
  },
});

function InvoiceFooter() {
  return (
    <>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Net Total</Text>
        <Text style={styles.total}>{Number.parseFloat(3456).toFixed(2)}</Text>
      </View>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Discount(30%)</Text>
        <Text style={styles.total}>
          {Number.parseFloat(2003323456).toFixed(2)}
        </Text>
      </View>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Sub Total</Text>
        <Text style={styles.total}>{Number.parseFloat(2345).toFixed(2)}</Text>
      </View>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Packing Charges(3%)</Text>
        <Text style={styles.total}>{Number.parseFloat(234).toFixed(2)}</Text>
      </View>
      <View style={styles.row} className="fw-bolder">
        <Text style={styles.description}>Overall Total</Text>
        <Text style={styles.total}>{Number.parseFloat(2345).toFixed(2)}</Text>
      </View>
    </>
  );
}

export default InvoiceFooter;
