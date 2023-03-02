import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";

const AppStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  );
};

export default AuthNavigator;
