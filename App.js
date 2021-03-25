import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Row from "./components/Row";

export default function App() {
  const [currentTable, setCurrentTable] = useState(1);
  const options = [
    { id: 0, value: "", label: "Selecciona la tabla" },
    { id: 1, value: 1, label: "1" },
    { id: 2, value: 2, label: "2" },
    { id: 3, value: 3, label: "3" },
    { id: 4, value: 4, label: "4" },
    { id: 5, value: 5, label: "5" },
    { id: 6, value: 6, label: "6" },
    { id: 7, value: 7, label: "7" },
    { id: 8, value: 8, label: "8" },
    { id: 9, value: 9, label: "9" },
    { id: 10, value: 10, label: "10" },
  ];
  const rows = new Array(10).fill(0);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const valueChange = (itemValue) => {
    setCurrentTable(itemValue);
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <Text style={styles.textHeader}>Multiplication Tables</Text>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 30,
            marginTop: 10,
            paddingLeft: 12,
            zIndex: 0,
          }}
        >
          <Picker
            style={{
              width: "100%",
              height: 45,
              paddingLeft: 12,
              zIndex: 1,
            }}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setCurrentTable(itemValue)}
          >
            {options.map((item) => (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.id}
              />
            ))}
          </Picker>
        </View>
        <View
          style={{
            backgroundColor: "cyan",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 8,
            marginTop: 15,
          }}
        >
          {rows.map((row, index) => (
            <Row
              firstValue={currentTable}
              secondValue={index}
              isLastRow={index === 9}
              key={index}
            />
          ))}
        </View>
        <Text
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 30,
            color: "#000",
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 15,
            paddingTop: 11,
            paddingLeft: 12,
            textAlign: "center",
          }}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          Corregir todo
        </Text>
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
