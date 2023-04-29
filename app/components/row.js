import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from "../constants/color";

const style = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: color.text,
  },
  separator: {
    backgroundColor: color.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const RowItem = ({ rightIcon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.row}>
      <Text style={style.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeparator = () => <View style={style.separator} />;
