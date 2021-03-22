import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Row(props) {
  const { firstValue, secondValue } = props;
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.tr}>
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
          {firstValue} x {secondValue + 1}
        </Text>
      </View>
      <View
        style={{
          width: "60%",
          borderLeftWidth: 2,
          borderLeftColor: "#000",
          ...styles.td,
        }}
      >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Introduce un valor"
          value={text}
        />
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
          : |
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tr: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    flexDirection: "row",
  },
  td: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  input: {
    width: "65%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    margin: 0,
    paddingRight: 10,
    paddingLeft: 10,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
