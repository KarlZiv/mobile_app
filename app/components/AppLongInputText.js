import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";

function AppLongInputText({
  icon,
  placeholder,
  secure,
  autoCapitalize,
  style,
  ...otherProps
}) {
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons name={icon} style={styles.icon} size={30} />
      <TextInput
        style={[styles.input, { fontSize: 14 }]}
        placeholder={placeholder}
        placeholderTextColor={AppColors.secondaryColor}
        secureTextEntry={secure}
        autoCapitalize={autoCapitalize}
        {...otherProps}
        maxLength={100}
        autoCorrect={false}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: AppColors.tertiaryColor,
    alignItems: "center",
    width: 250,
    height: 100,
    paddingTop: 15,
    alignItems: "flex-start",
  },
  input: {
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir Next",
    width: "80%",
    fontSize: 16,
    color: AppColors.secondaryColor,
    marginTop: 2,
  },
  icon: {
    marginHorizontal: 5,
    marginRight: 10,
    color: AppColors.otherColor,
  },
});

export default AppLongInputText;
