import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <Text style={styles.textHeader}>Multiplication Tables</Text>
        <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text style={{ color: "white" }}>asd</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text style={{ color: "white" }}>asd</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text style={{ color: "white" }}>asd</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text style={{ color: "white" }}>asd</Text>
          </View>
          <View style={{ flex: 1, alignSelf: "stretch" }}>
            <Text style={{ color: "white" }}>asd</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: "#1d31a7",
    paddingTop: Platform.OS === "android" ? 60 : 0,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textHeader: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
});
