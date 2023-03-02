import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";

function AppLogo({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <AppText style={styles.text}>MyMems</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 60,
  },
  text: {
    fontWeight: "900",
    fontSize: 20,
  },
});

export default AppLogo;
