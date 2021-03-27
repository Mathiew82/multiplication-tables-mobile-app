import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Row from "./components/Row";
import { states } from "./constants/states";

export default function App() {
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
  const [currentTable, setCurrentTable] = useState(1);
  const [operations, setOperations] = useState(
    new Array(10).fill(states.UNCORRECTED.str)
  );

  const setCorrectResult = (index, value) => {
    let currentOperations = [...operations];
    currentOperations[index] = value;
    setOperations(currentOperations);
  };

  const correctAll = () => {
    Alert.alert("Corregir todo");
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
            selectedValue=""
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
          {operations.map((row, index) => (
            <Row
              correctResult={row}
              setCorrectResult={(value) => setCorrectResult(index, value)}
              firstValue={currentTable}
              secondValue={index + 1}
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
          onPress={() => correctAll()}
        >
          Corregir todo
        </Text>
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            Número de aciertos = 8
          </Text>
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
