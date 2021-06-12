import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import Item from "./components/Items";
import AddItem from "./components/addItem";

export default function App() {
  const [todo, setTodos] = useState([
    { text: "lol", key: "1" },
    { text: "lmao", key: "2" },
    { text: "rofl", key: "3" },
    { text: "stupid", key: "4" },
    { text: "genius", key: "5" },
  ]);

  const handleSubmit = (text) => {
    if (text.length > 2) {
      setTodos((todo) => {
        return [{ text: text, key: Math.random().toString() }, ...todo];
      });
    } else {
      Alert.alert("Error", "Minimum 3 characters", [{ text: "Okay" }]);
    }
  };

  const handleDelete = (key) => {
    setTodos((todo) => {
      return todo.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.list}>
          <View style={styles.items}>
            <FlatList
              keyExtractor={(item) => item.key.toString()}
              data={todo}
              renderItem={({ item }) => (
                <Item deleteHandler={handleDelete} item={item} />
              )}
            />
          </View>
          <AddItem add={handleSubmit} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  list: {
    flex: 1,
    padding: 40,
  },
  items: {
    flex: 1,
    marginBottom: 20,
  },
});
