import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  Keyboard,
} from "react-native";
import { format } from "date-fns";
import color from "../constants/color";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";

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
  textHeader: {
    color: color.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },
  text: {
    color: color.white,
    fontSize: 13,
    textAlign: "center",
  },
});

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.8345;
  const date = new Date();

  const [scrollEnabled, setScrollEnabled]  = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () =>
      setScrollEnabled(true)
    );
    const hideListener = Keyboard.addListener("keyboardDidHide", () =>
      setScrollEnabled(false)
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView scrollEnabled={scrollEnabled}>
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

        <Text style={style.textHeader}>Currency Converter</Text>

        <ConversionInput
          text={baseCurrency}
          value="123"
          onButtonPress={() => alert("todo!")}
          onChangeText={(text) => console.log("text", text)}
          keyboardType="numeric"
        />

        <ConversionInput
          onChangeText={(text) => console.log("text", text)}
          keyboardType="numeric"
          text={quoteCurrency}
          value="123"
          onButtonPress={() => alert("todo!")}
          editable={false}
        />

        <Text style={style.text}>
          {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as ${format(
            date,
            "MMMM do, yyyy"
          )}`}
        </Text>

        <Button text="Reverse Currency that are shown" onPress={() => alert("todo!")} />
      </ScrollView>
    </View>
  );
};
