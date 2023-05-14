import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../constants/color";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { ConversionContext } from "../util/ConversionContext";

const screen = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    backgroundColor: color.blue,
    flex: 1,
    // justifyContent: "center",
  },
  content: {
    paddingTop: screen.height * 0.1,
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
  header: {
    alignItems: "flex-end",
  },
});

export default ({ navigation }) => {
  const { baseCurrency, quoteCurrency, swapCurrencies, date, rates, isLoading } =
    useContext(ConversionContext);

  const [value, setValue] = useState("");

  const conversionRate = rates[quoteCurrency];

  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor={color.blue} />
      <ScrollView>
        <SafeAreaView style={style.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={color.white} />
          </TouchableOpacity>
        </SafeAreaView>
        <View style={style.content}>
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

          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <ConversionInput
                text={baseCurrency}
                value={value}
                onButtonPress={() =>
                  navigation.push("CurrencyList", {
                    title: "Base Currency",
                    isBaseCurrency: true,
                  })
                }
                onChangeText={(text) => setValue(text)}
                keyboardType="numeric"
              />

              <ConversionInput
                keyboardType="numeric"
                text={quoteCurrency}
                value={
                  value ? (parseFloat(value) * conversionRate).toFixed(2) : ""
                }
                onButtonPress={() =>
                  navigation.push("CurrencyList", {
                    title: "Quote Currency",
                    isBaseCurrency: false,
                  })
                }
                editable={false}
              />

              <Text style={style.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                  date && format(new Date(date), "MMM do, yyyy")
                }`}
              </Text>

              <Button
                text="Reverse Currency that are shown"
                onPress={() => swapCurrencies()}
              />
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
