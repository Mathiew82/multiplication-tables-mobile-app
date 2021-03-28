import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { states } from "./constants/states";
import Row from "./components/Row";

export default function App() {
  const [currentTable, setCurrentTable] = useState(1);
  const generateOperations = (newValue) => {
    let result = [];
    for (let i = 0, lgt = 10; i < lgt; i++) {
      result.push({
        firstValue: newValue,
        secondValue: i + 1,
        value: "",
        currentResult: states.UNCORRECTED.str,
      });
    }
    return result;
  };
  const [operations, setOperations] = useState(
    generateOperations(currentTable)
  );
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

  const countHits = (arr) => {
    return arr.filter((item) => item.currentResult === states.CORRECT.str)
      .length;
  };

  const modifyArrayValue = (index, key, value) => {
    let operationsCopy = JSON.stringify(operations);
    operationsCopy = JSON.parse(operationsCopy);
    operationsCopy[index][key] = value;
    setOperations(operationsCopy);
  };

  const setValue = (index, value) => {
    modifyArrayValue(index, "value", value);
  };

  const changeTable = (itemValue) => {
    setCurrentTable(itemValue);
    setOperations(generateOperations(itemValue));
  };

  const checkIfTheOperationIsCorrect = (item) => {
    const isCorrect = Number(item.value) === item.firstValue * item.secondValue;

    item.currentResult = isCorrect ? states.CORRECT.str : states.INCORRECT.str;

    return item;
  };

  const checkIfAllIsCorrect = (arr) => {
    if (countHits(arr) === 10) {
      Alert.alert("Todo correcto!! Lo has hecho muy bien ;)");
    }
  };

  const toCorrectOperation = (index) => {
    let operationsCopy = JSON.stringify(operations);
    operationsCopy = JSON.parse(operationsCopy);

    operationsCopy[index] = checkIfTheOperationIsCorrect(operationsCopy[index]);
    setOperations(operationsCopy);
    checkIfAllIsCorrect(operationsCopy);
  };

  const toCorrectAll = () => {
    let operationsCopy = JSON.stringify(operations);
    operationsCopy = JSON.parse(operationsCopy);

    operationsCopy.forEach((item, index) => {
      item = checkIfTheOperationIsCorrect(item);
    });

    setOperations(operationsCopy);
    checkIfAllIsCorrect(operationsCopy);
  };

  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <Text style={styles.textHeader}>Multiplication Tables</Text>
        <View style={styles.wrapperSelect}>
          <Picker
            style={styles.select}
            selectedValue=""
            onValueChange={(itemValue) => changeTable(itemValue)}
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
        <View style={styles.table}>
          {operations.map((row, index) => (
            <Row
              correct={() => toCorrectOperation(index)}
              value={row.value}
              setValue={(value) => setValue(index, value)}
              firstValue={row.firstValue}
              secondValue={row.secondValue}
              currentResult={row.currentResult}
              isLastRow={index === 9}
              key={index}
            />
          ))}
        </View>
        <Text style={styles.correctAllBtn} onPress={() => toCorrectAll()}>
          Corregir todo
        </Text>
        <View style={{ marginTop: 16 }}>
          <Text style={styles.numberOfHits}>
            Número de aciertos = {countHits(operations)}
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
  wrapperSelect: {
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
  },
  select: {
    width: "100%",
    height: 45,
    paddingLeft: 12,
    zIndex: 1,
  },
  table: {
    backgroundColor: "cyan",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 8,
    marginTop: 15,
  },
  correctAllBtn: {
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
  },
  numberOfHits: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
});
