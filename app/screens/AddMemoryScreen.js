import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import { Formik } from "formik";

import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppColors from "../config/AppColors";
import AppButton from "../components/AppButton";
import AppLongInputText from "../components/AppLongInputText";
import AppPicker from "../components/AppPicker";
import AppInfoBox from "../components/AppInfoBox";
import DataManager from "../dataManager/DataManager";

let commonData = DataManager.geInstance();

function AddMemoryScreen({ navigation }) {
  let collectionSelection = commonData.collectionData;
  let emotionSelection = commonData.emotionData;
  StatusBar.setBarStyle("light-content", true);

  return (
    <AppScreen style={styles.container}>
      <AppInfoBox style={styles.infoBox}>Add New Memory</AppInfoBox>
      <Formik
        initialValues={{
          title: "",
          memoryContent: "",
        }}
        onSubmit={(values) => {
          commonData.addMemory(
            values.title,
            values.memoryContent,
            commonData.getNewCollectionTitle(),
            commonData.getNewLabel()
          );

          navigation.navigate("Account");
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppPicker
              style={styles.appPicker}
              icon="apps"
              color={AppColors.otherColor}
              placeholder="Select A Collection"
              data={collectionSelection}
            />
            <View style={styles.borderBottom} />
            <AppTextInput
              style={styles.input}
              icon="format-title"
              placeholder="Memory Title"
              onChangeText={handleChange("title")}
              fontSize={16}
            />
            <View style={styles.borderBottom} />
            <AppLongInputText
              style={styles.input}
              icon="text"
              placeholder="Memory Contents"
              onChangeText={handleChange("memoryContent")}
              fontSize={16}
            />
            <View style={styles.borderBottom} />
            <AppPicker
              style={styles.appPicker2}
              icon="apps"
              color={AppColors.otherColor}
              placeholder="What Emotion Did You Feel?"
              data={emotionSelection}
            />
            <View style={styles.buttonContainer}>
              <AppButton
                title="Add"
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.button}
              />
              <AppButton
                title="Cancel"
                style={styles.button}
                onPress={() => {
                  navigation.navigate("My Account");
                }}
              />
            </View>
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.tertiaryColor,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: AppColors.tertiaryColor,
    width: "100%",
    paddingVertical: 5,
  },
  button: {
    marginHorizontal: 5,
  },
  infoBox: {
    marginBottom: 2,
  },
  appPicker: {
    marginBottom: -3,
    fontSize: 16,
  },
  appPicker2: {
    marginVertical: 10,
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  borderBottom: {
    height: 0.1,
    width: "95%",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.primaryColor,
  },
  input: { width: "100%", marginBottom: 2, fontWeight: "bold" },
});

export default AddMemoryScreen;
