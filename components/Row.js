import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";

export default function Row(props) {
  const { firstValue, secondValue, isLastRow } = props;
  const states = {
    UNCORRECTED: ": |",
    CORRECT: "; )",
    INCORRECT: ": (",
  };
  const [text, onChangeText] = useState("");
  const [resultValue, setResultValue] = useState(states.UNCORRECTED);

  const styleRow = isLastRow
    ? {
        ...styles.tr,
      }
    : {
        ...styles.tr,
        borderBottomWidth: 2,
        borderBottomColor: "#000",
      };

  const textInput = React.createRef();

  const toCorrectOperation = () => {
    const correctResult = firstValue * secondValue;
    textInput.current.blur();

    if (correctResult === Number(text)) {
      setResultValue(states.CORRECT);
      return;
    }

    setResultValue(states.INCORRECT);
    return;
  };

  return (
    <View style={styleRow}>
      <View
        style={{
          width: "20%",
          border: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          ...styles.td,
        }}
      >
        <Text style={styles.text}>
          {firstValue} x {secondValue}
        </Text>
      </View>
      <View
        style={{
          width: "60%",
          borderLeftWidth: 2,
          borderLeftColor: "#000",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...styles.td,
        }}
      >
        <TextInput
          style={styles.input}
          ref={textInput}
          onChangeText={onChangeText}
          keyboardType="numeric"
          placeholder="Responde aquí"
          value={text}
        />
        <Text
          style={{
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
          }}
          onPress={() => toCorrectOperation()}
        >
          Corregir
        </Text>
      </View>
      <View
        style={{
          width: "20%",
          borderLeftWidth: 2,
          borderLeftColor: "#000",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          ...styles.td,
        }}
      >
        <Text
          style={{
            ...styles.text,
            transform: [{ rotate: "90deg" }],
          }}
        >
          {resultValue}
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
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
