// import React, { useState } from 'react';

import { Document, Image, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        padding: 30
    },
    title: {
        color: 'red'
    },
    text:{
        fontSize: 14
    }
});

const PdfViewer = ({toyDetail}) => {
console.log('pdf id  ', toyDetail._id);

  return (
    <div>
        <Document>
            <Page style={styles.body}>
                <Image src={toyDetail.picture} fixed></Image>
                <Text style={styles.title}>{toyDetail.details}</Text>
                
            </Page>
        </Document>
    </div>
  );
};

export default PdfViewer;