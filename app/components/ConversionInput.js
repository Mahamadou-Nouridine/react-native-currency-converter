import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import color from "../constants/color";

const style = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  button: {
    padding: 15,
    borderColor: color.border,
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: color.white
  },
  buttonText: {
    fontSize: 18,
    color: color.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    color: color.textLight,
  },
  containerDisabled: {
    backgroundColor: color.offWhite,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  const containerStyles = [style.container];
  if (props.editable === false) {
    containerStyles.push(style.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={style.button}>
        <Text style={style.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={style.input} {...props} />
    </View>
  );
};
