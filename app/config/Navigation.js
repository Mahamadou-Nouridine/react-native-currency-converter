import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Option from "../screens/Option";

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="Options">
      <MainStack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <MainStack.Screen name="Options" component={Option} options={{headerTitleAlign: "center"}} />
    </MainStack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
