import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { states } from "../constants/states";

export default function Row(props) {
  const {
    correct,
    setCorrect,
    correctResult,
    setCorrectResult,
    firstValue,
    secondValue,
    isLastRow,
  } = props;

  const [colorState, setColorState] = useState(states.UNCORRECTED.color);
  const [text, setText] = useState("");

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
      setColorState(states.CORRECT.color);
      setCorrectResult(states.CORRECT.str);
    } else {
      setColorState(states.INCORRECT.color);
      setCorrectResult(states.INCORRECT.str);
    }
  };

  useEffect(() => {
    if (correct) {
      toCorrectOperation();
      if (isLastRow) setCorrect();
    }
  }, [props]);

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
          onChangeText={setText}
          keyboardType="numeric"
          placeholder="Responde aquí"
          value={text}
        />
        <Text style={styles.btn} onPress={() => toCorrectOperation()}>
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
            color: colorState,
            transform: [{ rotate: "90deg" }],
          }}
        >
          {correctResult}
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
