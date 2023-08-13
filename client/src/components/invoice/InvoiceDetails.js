import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  invoice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 25,
    fontSize: 10.5,
    paddingHorizontal: 8,
  },
  invoiceno: {
    width: "34.6%",
  },
  invoicetitle: {
    width: "30.4%",
    fontSize: 18,
    textAlign: "center",
  },
  invoicedate: {
    width: "35%",
    textAlign: "right",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: "space-between",
    paddingTop: 4,
    paddingBottom: 2,
    paddingHorizontal: 8,
    height: 115,
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

function InvoiceDetails({ date, user }) {
  // console.log(user);
  // console.log(new Date(date).getTime());
  // console.log(new Date(date).getFullYear());
  // console.log(new Date(date).getDate().toString().padStart(2, "0"));
  // console.log((new Date(date).getMonth() + 1).toString().padStart(2, "0"));

  return (
    <>
      <View style={styles.invoice}>
        <Text style={styles.invoiceno}>
          Invoice No : {new Date(date).getTime()}
        </Text>
        <Text style={styles.invoicetitle}>INVOICE</Text>
        <Text style={styles.invoicedate}>
          Date : {new Date(date).getDate().toString().padStart(2, "0")}-
          {(new Date(date).getMonth() + 1).toString().padStart(2, "0")}-
          {new Date(date).getFullYear()}
        </Text>
      </View>
      <View style={styles.column}>
        <View style={styles.contact}>
          <Text>Mobile : 98947 40650</Text>
          <Text>E-mail : awesomecrackerss.com</Text>
        </View>
        <View style={styles.logocon}>
          <Image
            style={{ width: 100, height: "auto" }}
            src="https://nirmal003.github.io/Images/aws3.jpg"
          />
        </View>

        <View style={styles.title}>
          <Text>Awesome Crackers</Text>
          <Text style={styles.location}>
            4/480, Veerachelliya Puram , Sivakasi , Virudhunagar - 626005
          </Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.customer}>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            Customer Details
          </Text>
          <Text>{user[0]?.name}</Text>
          <Text>{user[0]?.mobilenumber}</Text>
        </View>
        <View style={styles.address}>
          <Text>{user[0]?.address.split(" ")?.slice(0, 2).join(" ")}</Text>
          <Text>{user[0]?.address.split(" ")?.slice(2).join(" ")}</Text>
          <Text>
            {user[0]?.city} {user[0]?.state}
          </Text>
        </View>
      </View>
    </>
  );
}

export default InvoiceDetails;
