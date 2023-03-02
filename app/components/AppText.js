import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import AppColors from "../config/AppColors";

function AppText({ children, style, key }) {
  return (
    <Text style={[styles.text, style]} key={key}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "monospace" : "Avenir-Roman",
    fontSize: 16,
    color: AppColors.tertiaryColor,
    fontWeight: "bold",
  },
});
export default AppText;
