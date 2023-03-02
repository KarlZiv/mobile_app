import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import MemoriesScreen from "../screens/MemoriesScreen";

const AppStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Memories"
        component={MemoriesScreen}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AuthNavigator;
