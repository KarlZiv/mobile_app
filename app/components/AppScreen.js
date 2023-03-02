import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import Constants from "expo-constants";

function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar animated={true} barStyle={"dark-content"} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    display: "flex",
    alignContent: "center",
  },
});

export default AppScreen;
