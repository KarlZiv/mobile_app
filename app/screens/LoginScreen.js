import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppLogo from "../components/AppLogo";
import AppButton from "../components/AppButton";
import DataManager from "../dataManager/DataManager";

let commonData = DataManager.geInstance();
const users = commonData.users;

const schema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).max(14).label("Password"),
});

const validateUser = (email, password) => {
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};

const getUser = ({ email }) => {
  return users.find((user) => user.email === email);
};

const createUser = ({ email }) => {
  let userID = getUser({ email }).id;
  commonData.setUserID(userID);
};

function LoginScreen({ navigation }) {
  StatusBar.setBarStyle("dark-content", true);
  return (
    <AppScreen style={styles.container}>
      <AppLogo style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values.email, values.password)) {
            resetForm();
            createUser(values);
            navigation.navigate("Home");
          } else {
            resetForm();
            alert("Invalid Login Details.");
          }
        }}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              style={styles.textInput}
              id="userEmail"
              testID="loginEmail"
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
              title="Login"
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
  form: {},
  logo: {
    marginTop: -150,
  },
  button: {
    marginTop: 30,
    alignSelf: "center",
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
    zIndex: 100,
  },
  textInput: {
    width: "80%",
  },
});

export default LoginScreen;
