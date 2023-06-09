import React, { useContext } from "react";
import { StatusBar, FlatList, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import currencies from "../data/currencies.json";
import color from "../constants/color";
import { RowItem, RowSeparator } from "../components/row";
import { ConversionContext } from "../util/ConversionContext";

const style = StyleSheet.create({
  icons: {
    height: 30,
    width: 30,
    backgroundColor: color.blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});

export default ({ navigation, route = {} }) => {
  const { setBaseCurrency, setQuoteCurrency, baseCurrency, quoteCurrency } =
    useContext(ConversionContext);
  const insets = useSafeAreaInsets();
  const params = route.params || {};
  return (
    <View style={{ backgroundColor: color.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={color.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;
          if (
            (params.isBaseCurrency && item === baseCurrency) ||
            (!params.isBaseCurrency && item === quoteCurrency)
          )
            selected = true;
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={style.icons}>
                    <Entypo name="check" size={20} color={color.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={<RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  );
};
