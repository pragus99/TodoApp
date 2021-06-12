import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function addItem({ add }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Your todo..."
        placeholderTextColor={"white"}
        onChangeText={handleChange}
      />
      <Button onPress={() => add(text)} title="add item" color="#c42424" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "white",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
});
