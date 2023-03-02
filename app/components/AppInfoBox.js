import React from "react";
import { View, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppInfoBox({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <AppText style={styles.text}>{children}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.tertiaryColor,
  },
  text: {
    color: AppColors.otherColor,
    fontSize: 18,
  },
});

export default AppInfoBox;
