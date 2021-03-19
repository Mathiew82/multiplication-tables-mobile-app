import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View>
        <Text style={styles.textHeader}>Multiplication Tables</Text>
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: "20%",
                backgroundColor: "#ff0000",
                border: "none",
              }}
            >
              <Text style={{ color: "white" }}>asd</Text>
            </View>
            <View
              style={{
                width: "60%",
                backgroundColor: "#000000",
                border: "none",
              }}
            >
              <Text style={{ color: "white" }}>asd</Text>
            </View>
            <View
              style={{
                width: "20%",
                backgroundColor: "#00ff00",
                border: "none",
              }}
            >
              <Text style={{ color: "white" }}>asd</Text>
            </View>
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
    backgroundColor: "#243266",
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
