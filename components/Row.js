import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { states } from "../constants/states";

export default function Row(props) {
  const {
    correct,
    value,
    setValue,
    firstValue,
    secondValue,
    currentResult,
    isLastRow,
  } = props;

  const textInput = React.createRef();

  const colorState = () => {
    switch (currentResult) {
      case states.CORRECT.str:
        return states.CORRECT.color;
        break;
      case states.INCORRECT.str:
        return states.INCORRECT.color;
        break;
      default:
        return states.UNCORRECTED.color;
    }
  };

  const styleRow = isLastRow
    ? {
        ...styles.tr,
      }
    : {
        ...styles.tr,
        borderBottomWidth: 2,
        borderBottomColor: "#000",
      };

  return (
    <View style={styleRow}>
      <View
        style={{
          ...styles.tdLeft,
          ...styles.td,
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: "#000",
          }}
        >
          {firstValue} x {secondValue}
        </Text>
      </View>
      <View
        style={{
          ...styles.tdCenter,
          ...styles.td,
        }}
      >
        <TextInput
          style={styles.input}
          ref={textInput}
          onChangeText={setValue}
          keyboardType="numeric"
          placeholder="Responde aquí"
          value={value}
        />
        <Text style={styles.btn} onPress={() => correct()}>
          Corregir
        </Text>
      </View>
      <View
        style={{
          ...styles.tdRight,
          ...styles.td,
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: colorState(),
            transform: [{ rotate: "90deg" }],
          }}
        >
          {currentResult}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tr: {
    width: "100%",
    flexDirection: "row",
  },
  td: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  tdLeft: {
    width: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tdCenter: {
    width: "60%",
    borderLeftWidth: 2,
    borderLeftColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tdRight: {
    width: "20%",
    borderLeftWidth: 2,
    borderLeftColor: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "60%",
    height: 33,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#267",
    borderRadius: 2,
    flex: 1,
    marginTop: 0,
    marginRight: 5,
    marginBottom: 0,
    marginLeft: 0,
    paddingRight: 10,
    paddingLeft: 10,
  },
  btn: {
    width: "35%",
    height: 33,
    margin: 0,
    backgroundColor: "#df0",
    borderWidth: 1,
    borderColor: "#267",
    borderRadius: 2,
    fontWeight: "bold",
    paddingTop: 8,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
