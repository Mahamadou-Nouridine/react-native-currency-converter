import React from "react";
import { StatusBar, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import currencies from "../data/currencies.json";
import color from "../constants/color";
import { RowItem, RowSeparator } from "../components/row";

export default ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ backgroundColor: color.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={color.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          return <RowItem text={item} onPress={() => navigation.pop()} />;
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
