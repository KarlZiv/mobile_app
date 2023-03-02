import React from "react";
import { View, TextInput, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";

function AppTextInput({
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
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={AppColors.secondaryColor}
        secureTextEntry={secure}
        autoCapitalize={autoCapitalize}
        {...otherProps}
        maxLength={35}
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: AppColors.tertiaryColor,
    alignItems: "center",
    marginVertical: 5,
    width: 250,
    height: 50,
  },
  input: {
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir Next",
    width: "80%",
    fontSize: 18,
    color: AppColors.secondaryColor,
  },
  icon: {
    marginHorizontal: 5,
    marginRight: 10,
    color: AppColors.otherColor,
  },
});

export default AppTextInput;
