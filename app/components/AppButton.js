import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppButton({ title, onPress, style, fontSize, color }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <View>
        <AppText style={{ fontSize: fontSize, color: color }}>{title}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: AppColors.otherColor,
    borderRadius: 50,
    width: 180,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 5 },
  },
});

export default AppButton;
