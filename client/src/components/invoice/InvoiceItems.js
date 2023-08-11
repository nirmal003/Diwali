import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems: "center",
    fontSize: 13,
  },
  sno: {
    height: 24,
    width: "6%",
    textAlign: "center",
    borderRightWidth: 1,
    paddingVertical: 4.8,
    // paddingLeft: 8,
  },
  code: {
    height: 24,
    width: "6%",
    textAlign: "center",
    borderRightWidth: 1,
    paddingVertical: 4.8,

    // paddingLeft: 8,
  },
  description: {
    height: 24,
    width: "38%",
    textAlign: "center",
    borderRightWidth: 1,
    paddingVertical: 4.8,

    // paddingLeft: 8,
    // borderRightColor: borderColor,
  },
  type: {
    height: 24,
    width: "8%",
    borderRightWidth: 1,
    textAlign: "center",
    textTransform: "lowercase",
    paddingVertical: 4.8,

    // paddingRight: 8,
    // borderRightColor: borderColor,
  },
  qty: {
    width: "12%",
    height: 24,
    borderRightWidth: 1,
    textAlign: "center",
    paddingVertical: 4.8,

    // paddingRight: 8,
    // borderRightColor: borderColor,
  },
  rate: {
    height: 24,
    width: "12%",
    borderRightWidth: 1,
    textAlign: "right",
    paddingVertical: 4.8,
    paddingRight: 8,
    // borderRightColor: borderColor,
  },
  amount: {
    height: 24,
    width: "18%",
    textAlign: "right",
    paddingRight: 8,
    paddingVertical: 4.8,
  },
});

function InvoiceItems() {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.sno}>100</Text>
        <Text style={styles.code}>200</Text>
        <Text style={styles.description}>
          expewrtyui dsdxfcghjkljhb ertyuirt
        </Text>
        <Text style={styles.type}>BOX</Text>
        <Text style={styles.qty}>12384</Text>
        <Text style={styles.rate}>2345.00</Text>
        <Text style={styles.amount}>987654.00</Text>
      </View>
    </>
  );
}

export default InvoiceItems;
