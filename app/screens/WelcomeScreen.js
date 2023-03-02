import React from "react";
import { StyleSheet, ImageBackground, StatusBar } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AppLogo from "../components/AppLogo";

function WelcomeScreen({ navigation }) {
  StatusBar.setBarStyle("dark-content", true);
  return (
    <ImageBackground
      source={require("../assets/welcome.png")}
      style={styles.container}
      blurRadius={3}
    >
      <AppScreen style={styles.screen}>
        <AppLogo />
        <AppButton
          title="Login"
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
          fontSize={16}
        />
        <AppButton
          title="Register"
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
          fontSize={16}
        />
      </AppScreen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
    marginBottom: 5,
    width: 200,
  },
  screen: {
    display: "flex",
    alignContent: "center",
  },
});

export default WelcomeScreen;
