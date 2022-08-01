import { View, Text, StyleSheet, Button, Alert } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Headers({ tools, setTools }) {
  const clearTodos = () => {
    Alert.alert("oops!!", "can not add is too low", [
      { text: "yes", onPress: () => setTools([]) },
      { text: "no" },
    ]);
  };
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Todos</Text>
      <AntDesign
        onPress={clearTodos}
        name="delete"
        size={20}
        color="black"
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 38,
    backgroundColor: "coral",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 35,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
