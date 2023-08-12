import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  column: {
    display: "flex",
    flexDirection: "column",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: "space-between",
    paddingTop: 6,
    paddingBottom: 5,
    paddingHorizontal: 8,
    height: 150,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "bold",
  },
  logocon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    lineHeight: 1.5,
    fontSize: 18,
  },
  location: {
    fontSize: 12,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    height: 59,
    paddingTop: 6,
    paddingHorizontal: 8,
    fontSize: 11.5,
  },
  customer: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.5,
    width: "50%",
    textAlign: "left",
  },
  address: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    lineHeight: 1.5,
    width: "50%",
    textAlign: "right",
  },
});

function InvoiceClient() {
  return (
    <>
      <View style={styles.column}>
        <View style={styles.contact}>
          {/* <View> */}
          <Text>Mobile : 3456789</Text>
          {/* </View> */}
          {/* <View> */}
          <Text>E-mail : awesomecrackerss.com</Text>
          {/* </View> */}
        </View>
        <View style={styles.logocon}>
          {/* <View> */}
          <Text>logo</Text>
          {/* </View> */}
        </View>

        <View style={styles.title}>
          {/* <View> */}
          <Text>Awesome Crackers</Text>
          {/* </View> */}
          {/* <View> */}
          <Text style={styles.location}>
            4/480, Veerachelliya Puram , Sivakasi , Virudhunagar - 626005
          </Text>
          {/* </View> */}
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.customer}>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            Customer Details
          </Text>
          <Text>Nirmal </Text>
          <Text>1234789034</Text>
        </View>
        <View style={styles.address}>
          <Text>addresdfghjkk dfghjk </Text>
          <Text>dfghj dsfghjkl sddfghjk szfdghjss </Text>
          <Text>villupuram , Rameshwaram</Text>
        </View>
      </View>
    </>
  );
}

export default InvoiceClient;
