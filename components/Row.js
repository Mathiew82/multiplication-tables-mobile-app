import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

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
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          ...styles.td,
        }}
      >
        <TextInput
          style={styles.input}
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
          onPress={() => Alert.alert("Simple Button pressed")}
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
          : |
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tr: {
    width: "100%",
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
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
