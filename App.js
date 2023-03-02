import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import TabNavigator from "./app/navigation/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
      {/* <TabNavigator /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
