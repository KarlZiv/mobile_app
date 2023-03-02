import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import AddMemoryScreen from "../screens/AddMemoryScreen";
import FavouritesScreen from "../screens/FavouritesScreen";

import AppColors from "../config/AppColors";

const AppTab = createBottomTabNavigator();

const TabNavigator = () => (
  <AppTab.Navigator
    screenOptions={{
      tabBarActiveTintColor: AppColors.otherColor,
      tabBarInactiveTintColor: AppColors.secondaryColor,
      tabBarStyle: {
        backgroundColor: AppColors.tertiaryColor,
      },
    }}
  >
    <AppTab.Screen
      name="My Account"
      component={AccountNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" size={35} color={color} />
        ),
      }}
    />
    <AppTab.Screen
      name="Add New"
      component={AddMemoryScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus-circle" size={35} color={color} />
        ),
      }}
    />
    <AppTab.Screen
      name="Favourites"
      component={FavouritesScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="heart" size={30} color={color} />
        ),
      }}
    />
  </AppTab.Navigator>
);

export default TabNavigator;
