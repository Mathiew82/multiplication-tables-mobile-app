import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import SelectInput from "react-native-select-input-ios";
import Row from "./components/Row";

export default function App() {
  const [currentTable, setCurrentTable] = useState(2);
  const options = [
    { value: "", label: "Selecciona la tabla" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
  const rows = new Array(10).fill(0);

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <Text style={styles.textHeader}>Multiplication Tables</Text>
        <SelectInput
          style={{
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 30,
            marginTop: 10,
            paddingLeft: 12,
          }}
          value={0}
          options={options}
        />
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
            <Row firstValue={currentTable} secondValue={index} key={index} />
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
    paddingTop: Platform.OS === "android" ? 40 : 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textHeader: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
  },
});
