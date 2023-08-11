import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

function PdfFlie() {
  //   const styles = StyleSheet.create({
  //     page: {
  //       flexDirection: "row",
  //       backgroundColor: "#E4E4E4",
  //     },
  //     section: {
  //       margin: 10,
  //       padding: 10,
  //       flexGrow: 1,
  //     },
  //   });

  return (
    <Document>
      <Page size="A4">
        <View
          style={{ backgroundColor: "red", color: "white" }}
          className="text-center"
        >
          <Text>sdfghjklxdcfgvhbjnkxcvbnm #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
        <Text style={{ backgroundColor: "red", color: "white" }}>
          hello world...!
        </Text>
        <Text style={{ backgroundColor: "red", color: "white" }}>
          hello world...!
        </Text>
      </Page>
    </Document>
  );
}

export default PdfFlie;
