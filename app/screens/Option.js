import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Linking, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import color from "../constants/color";
import { RowItem, RowSeparator } from "../components/row";

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Something went wrong.", "Please try again later");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          onPress={() => alert("Todo!")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={color.blue} />
          }
          text="Themes"
        />

        <RowSeparator />

        <RowItem
          onPress={() =>
            openUrl(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )
          }
          rightIcon={<Entypo name="export" size={20} color={color.blue} />}
          text="React Native Basics"
        />

        <RowSeparator />

        <RowItem
          onPress={() => openUrl("https://reactnativebyexample.com")}
          rightIcon={<Entypo name="export" size={20} color={color.blue} />}
          text="React Native By Examples"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
