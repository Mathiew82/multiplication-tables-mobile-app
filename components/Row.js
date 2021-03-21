import React from "react";
import { Text, View } from "react-native";

export default function Row(props) {
  const { firstValue, secondValue } = props;

  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: "#000",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: "25%",
          border: "none",
          paddingTop: 15,
          paddingRight: 10,
          paddingBottom: 15,
          paddingLeft: 10,
        }}
      >
        <Text style={{ color: "#000" }}>
          {firstValue} x {secondValue + 1}
        </Text>
      </View>
      <View
        style={{
          width: "50%",
          borderLeftWidth: 2,
          borderLeftColor: "#000",
          paddingTop: 15,
          paddingRight: 10,
          paddingBottom: 15,
          paddingLeft: 10,
        }}
      >
        <Text style={{ color: "#000" }}>B</Text>
      </View>
      <View
        style={{
          width: "25%",
          borderLeftWidth: 2,
          borderLeftColor: "#000",
          paddingTop: 15,
          paddingRight: 10,
          paddingBottom: 15,
          paddingLeft: 10,
        }}
      >
        <Text style={{ color: "#000" }}>C</Text>
      </View>
    </View>
  );
}
