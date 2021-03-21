import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Row from "./components/Row";

export default function App() {
  const [currentTable, setCurrentTable] = useState(2);
  const rows = new Array(10).fill(0);

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <Text style={styles.textHeader}>Multiplication Tables</Text>
        <View
          style={{
            backgroundColor: "cyan",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 8,
            marginTop: 20,
          }}
        >
          {rows.map((row, index) => (
            <Row firstValue={currentTable} secondValue={index} />
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#de2",
    paddingTop: Platform.OS === "android" ? 60 : 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textHeader: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
  },
});
