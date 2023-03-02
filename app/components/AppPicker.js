import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  TouchableHighlight,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import AppColors from "../config/AppColors";
import AppButton from "./AppButton";
import DataManager from "../dataManager/DataManager";

let commonData = DataManager.geInstance();

function AppPicker({ icon, style, color, data, placeholder, button, border }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selection, setSelection] = useState(placeholder);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View
          style={[
            styles.container,
            style,
            {
              borderBottomWidth: border ? 1 : 0,
              borderColor: AppColors.primaryColor,
            },
          ]}
        >
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={24}
              color={color}
              style={styles.icon}
            />
          )}

          <AppText style={styles.text}> {selection}</AppText>
          {button && <AppButton title={button} style={styles.innerButton} />}

          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={color}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modal}>
          {data.map((data) => (
            <TouchableHighlight
              underlayColor={AppColors.secondaryColor}
              key={data.id}
              onPress={() => {
                if (
                  data.title === "Friends" ||
                  data.title === "Family" ||
                  data.title === "Personal"
                ) {
                  commonData.setNewCollectionTitle(data.title);
                  setSelection(commonData.getNewCollectionTitle());
                } else {
                  commonData.setNewLabel(data.title);
                  setSelection(commonData.getNewLabel());
                }
                setModalVisible(false);
              }}
            >
              <AppText style={styles.appText}>{data.title}</AppText>
            </TouchableHighlight>
          ))}

          <AppButton
            title={"Close"}
            style={styles.button}
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.tertiaryColor,
    flexDirection: "row",
    width: 250,
    height: 50,
    alignItems: "center",
    width: "100%",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: AppColors.secondaryColor,
  },
  icon: {
    marginHorizontal: 5,
    marginRight: 10,
  },
  button: {
    marginTop: 10,
    alignSelf: "center",
    width: 100,
  },
  innerButton: {
    width: 80,
  },
  appText: {
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    color: AppColors.secondaryColor,
    borderWidth: 1,
    borderColor: AppColors.secondaryColor,
    fontSize: 16,
  },
  modal: {
    height: "81%",
    marginTop: "auto",
    backgroundColor: AppColors.tertiaryColor,
  },
});

export default AppPicker;
