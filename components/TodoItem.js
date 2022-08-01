import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function TodoItem({ item, pressHandler, tools, setTools }) {
  const makeCompleteMark = (todoId) => {
    const newTodos = tools.map((item) => {
      if (item.key == todoId) {
        return { ...item, completed: true };
      }
      return item;
    });
    setTools(newTodos);
  };
  return (
    <TouchableOpacity>
      <View style={styles.eachTodo}>
        <Text
          style={{
            marginLeft: 20,
            textDecorationLine: item?.completed ? "line-through" : "none",
          }}
        >
          {item.text}
        </Text>
        <View style={styles.icon}>
          {!item?.completed && (
            <AntDesign
              onPress={() => makeCompleteMark(item?.key)}
              name="checkcircleo"
              size={24}
              color="green"
              style={{ marginRight: 10 }}
            />
          )}

          {/* <AntDesign
            name="checkcircleo"
            size={24}
            color="green"
            style={{ marginRight: 20 }}
          /> */}
          <AntDesign
            onPress={() => pressHandler(item.key)}
            name="delete"
            size={20}
            color="black"
            color="red"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eachTodo: {
    padding: 10,
    marginTop: 10,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    flexDirection: "row",
  },
});
