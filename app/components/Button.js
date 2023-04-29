import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import color from "../constants/color";

const style = StyleSheet.create({
    button:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
        marginTop: 20
    },
    buttonIcon: {
        width: 20,
        height: 20,
        marginRight: 20
    },
    buttonText:{
        color:color.white,
        fontSize: 16
    }
});
export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Image 
      source={require('../assets/images/reverse.png')} 
      resizeMode="contain"
      style={style.buttonIcon} />
      <Text style={style.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
