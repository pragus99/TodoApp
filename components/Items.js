import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

export default function Item({ item, deleteHandler }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Checkbox value={isChecked} onValueChange={setChecked} color="white" />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteHandler(item.key)}>
        <MaterialIcons name="delete" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  item: {
    flex: 8,
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    marginRight: 5,
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
    color: "white",
  },
});
