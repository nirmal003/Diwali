import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    alignItems: "center",
    fontSize: 11,
    flexGrow: 1,
  },
  sno: {
    height: 22,
    width: "6%",
    textAlign: "center",
    borderRightWidth: 1,
    paddingVertical: 4.9,
  },
  code: {
    height: 22,
    width: "6%",
    textAlign: "center",
    borderRightWidth: 1,
    paddingVertical: 4.9,
  },
  description: {
    height: 22,
    width: "38%",
    textAlign: "start",
    borderRightWidth: 1,
    paddingVertical: 4.9,
    paddingLeft: 4,
  },
  type: {
    height: 22,
    width: "8%",
    borderRightWidth: 1,
    textAlign: "center",
    textTransform: "lowercase",
    paddingVertical: 4.9,
  },
  qty: {
    width: "12%",
    height: 22,
    borderRightWidth: 1,
    textAlign: "center",
    paddingVertical: 4.9,
  },
  rate: {
    height: 22,
    width: "12%",
    borderRightWidth: 1,
    textAlign: "right",
    paddingVertical: 4.9,
    paddingRight: 8,
  },
  amount: {
    height: 22,
    width: "18%",
    textAlign: "right",
    paddingRight: 8,
    paddingVertical: 4.9,
  },
});

function InvoiceItems() {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.sno}>10</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>expewrtyui dsdxfcghjkljhb</Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
    </>
  );
}

export default InvoiceItems;
