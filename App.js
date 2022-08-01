import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from "react-native";
import Addtodo from "./components/Addtodo";
import Headers from "./components/Headers";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [tools, setTools] = useState([
    { text: "buy coffee", key: "1", completed: true },
    { text: "create app", key: "2", completed: true },
    { text: "play on the switch", key: "3", completed: false },
  ]);

  const pressHandler = (key) => {
    setTools((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTools((prevTools) => {
        return [
          { text: text, completed: false, key: Math.random().toString() },
          ...prevTools,
        ];
      });
    } else {
      Alert.alert("oops!!", "can not add is too low", [
        { text: "understand", onPress: () => console.log("close") },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismiss keyboard");
      }}
    >
      <View style={styles.container}>
        <Headers tools={tools} setTools={setTools}></Headers>
        <Addtodo submitHandler={submitHandler}></Addtodo>

        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={tools}
              renderItem={({ item }) => (
                <TodoItem
                  tools={tools}
                  setTools={setTools}
                  item={item}
                  pressHandler={pressHandler}
                ></TodoItem>
              )}
            ></FlatList>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {},
});
