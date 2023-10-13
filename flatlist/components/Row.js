import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Row({item}) {
    return (
        <Text style={styles.row}>{item.lastname}, {item.firstname}</Text>
    )
}


const styles = StyleSheet.create({
    row: {
     marginTop : 8,
     marginBottom : 8
    },
  });