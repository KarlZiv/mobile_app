import React from "react";
import AppScreen from "../components/AppScreen";
import { StyleSheet, StatusBar } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";
import AppText from "../components/AppText";
import AppLogo from "../components/AppLogo";
import AppButton from "../components/AppButton";
import DataManager from "../dataManager/DataManager";

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).max(14).label("Password"),
  name: yup.string().required().min(2).max(20).label("Name"),
});

let commonData = DataManager.geInstance();

function RegisterScreen({ navigation }) {
  StatusBar.setBarStyle("dark-content", true);
  return (
    <AppScreen style={styles.container}>
      <AppLogo style={styles.logo} />
      <AppText style={styles.text}>Account Registration</AppText>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          commonData.addUser(values.name, values.email, values.password);
          alert("Success! Account registered.");
          navigation.navigate("Login");
        }}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="account"
              placeholder="Name"
              autoCapitalize="none"
              onChangeText={handleChange("name")}
              onBlur={() => setFieldTouched("name")}
              style={styles.textInput}
            />
            {touched.email && <AppText>{errors.name}</AppText>}
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              style={styles.textInput}
            />
            {touched.email && <AppText>{errors.email}</AppText>}
            <AppTextInput
              icon="lock"
              placeholder="Password"
              secure={true}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
              style={styles.textInput}
            />
            {touched.password && <AppText>{errors.password}</AppText>}

            <AppButton
              title="Register"
              onPress={() => {
                handleSubmit();
              }}
              style={styles.button}
            />
          </>
        )}
      </Formik>
      <AppButton
        style={styles.outerButton}
        title={"Back"}
        onPress={() => {
          navigation.navigate("Welcome");
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: -150,
  },
  button: {
    marginTop: 30,
  },
  outerButton: {
    position: "absolute",
    width: 80,
    left: 10,
    top: 50,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    width: "80%",
  },
});

export default RegisterScreen;
