import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import App from "../App";

export default function Addtodo({ submitHandler }) {
  const [text, setText] = useState("");

  // const changeHandler = (val) => {
  //   setText(val);
  // };

  // const handler = (val) => {
  //   setText("");
  // };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo"
        onChangeText={(val) => setText(val)}
      ></TextInput>

      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  // button: {
  //   flex: 1,
  //   justifyContent: "evenly",
  //   width: "80%",
  // },
});
