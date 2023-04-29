import React from "react";
import { StyleSheet, View, StatusBar, Image, Dimensions } from "react-native";
import color from "../constants/color";
import { ConversionInput } from "../components/ConversionInput";

const screen = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    backgroundColor: color.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoaBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
});

export default () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <View style={style.logoContainer}>
        <Image
          style={style.logoaBackground}
          source={require("../assets/images/background.png")}
          resizeMode="contain"
        />
        <Image
          style={style.logo}
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>

      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("todo!")}
        onChangeText={(text) => console.log("text", text)}
        keyboardType="numeric"
      />

      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert("todo!")}
      />
    </View>
  );
};
