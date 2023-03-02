import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";

import AppInfoBox from "../components/AppInfoBox";
import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import DataManager from "../dataManager/DataManager";
import AppPicker from "../components/AppPicker";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppLongInputText from "../components/AppLongInputText";

let commonData = DataManager.geInstance();

function MemoriesScreen({ navigation }) {
  StatusBar.setBarStyle("light-content", true);
  const collectionMemories = commonData.getCollectionMemories();
  const [memories, setMemories] = useState(collectionMemories);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  let emotionSelection = commonData.emotionData;
  let collectionSelection = commonData.collectionData;

  const handleDelete = (memory) => {
    const tempMemories = memories.filter((item) => item.id !== memory.id);
    commonData.delete(memory);
    setMemories(tempMemories);
  };

  return (
    <AppScreen style={styles.container}>
      <AppInfoBox style={styles.infoBox}>
        {commonData.getCollectionTitle()} Collection
      </AppInfoBox>
      <AppPicker
        style={styles.appPicker}
        icon="apps"
        color={AppColors.otherColor}
        placeholder="Filter"
        data={emotionSelection}
        border={true}
      />
      <View style={styles.flatListContainer}>
        <FlatList
          data={memories}
          keyExtractor={(data) => data.id.toString()}
          refreshing={refreshing}
          onRefresh={() => {
            setMemories(commonData.getCollectionMemories());
          }}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              message={item.message}
              id={item.id}
              icon={"emoticon-" + item.label.toLowerCase()}
              onSwipeLeft={() => (
                <>
                  <View style={styles.deleteView}>
                    <TouchableOpacity
                      onPress={() => {
                        handleDelete(item);
                      }}
                    >
                      <MaterialCommunityIcons
                        name="delete-circle"
                        size={40}
                        iconColor={AppColors.tertiaryColor}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.deleteView}>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(true);
                        commonData.setPrefills(
                          item.userID,
                          item.id,
                          item.collection,
                          item.title,
                          item.message,
                          item.label
                        );
                      }}
                    >
                      <MaterialCommunityIcons
                        name="pencil"
                        size={40}
                        iconColor={AppColors.tertiaryColor}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              )}
              underlayColor={AppColors.secondaryColor}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      <AppButton
        title={"Apply Filter"}
        onPress={() => setMemories(commonData.getFilteredEmotions())}
        style={styles.filterButton}
      />
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <AppInfoBox style={styles.infoBox}>Edit Memory</AppInfoBox>
          <Formik
            initialValues={{
              title: "",
              memoryContent: "",
            }}
            onSubmit={(values) => {
              let message;
              let title;

              if (values.memoryContent === "") {
                message = commonData.getMemoryContentsPrefill();
              } else {
                message = values.memoryContent;
              }

              if (values.title === "") {
                title = commonData.getTitlePrefill();
              } else {
                title = values.title;
              }

              commonData.updateMemories(
                commonData.currentEditMemory.id,
                title,
                message,
                commonData.getNewCollectionTitle(),
                commonData.getNewLabel()
              );
              setModalVisible(false);
            }}
          >
            {({ handleChange, handleSubmit }) => (
              <>
                <AppPicker
                  style={styles.appPicker}
                  icon="apps"
                  color={AppColors.otherColor}
                  placeholder={commonData.getCollectionPrefill()}
                  selected
                  data={collectionSelection}
                />
                <AppTextInput
                  style={styles.input}
                  icon="format-title"
                  placeholder="Memory Title"
                  onChangeText={handleChange("title")}
                  defaultValue={commonData.getTitlePrefill()}
                  fontSize={16}
                />
                <AppLongInputText
                  style={styles.input}
                  icon="text"
                  placeholder="Memory Contents"
                  onChangeText={handleChange("memoryContent")}
                  defaultValue={commonData.getMemoryContentsPrefill()}
                  fontSize={16}
                />
                <AppPicker
                  icon="apps"
                  color={AppColors.otherColor}
                  placeholder={commonData.getEmotionPrefill()}
                  data={emotionSelection}
                />
                <View style={styles.buttonContainer}>
                  <AppButton
                    title="Update"
                    onPress={() => {
                      handleSubmit();
                    }}
                    style={styles.modalButton}
                  />
                  <AppButton
                    title="Cancel"
                    style={styles.modalButton}
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </Modal>
      <AppButton
        style={styles.outerButton}
        color={AppColors.otherColor}
        title={"Back"}
        onPress={() => {
          navigation.navigate("Account");
        }}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: AppColors.tertiaryColor,
  },
  button: {
    alignSelf: "flex-end",
    width: 80,
    fontSize: 10,
    left: 260,
  },
  outerButton: {
    position: "absolute",
    width: 80,
    left: 10,
    top: 60,
    height: 30,
    padding: 5,
    borderWidth: 1,
    borderColor: AppColors.otherColor,
    backgroundColor: AppColors.tertiaryColor,
    color: AppColors.otherColor,
  },
  filterButton: {
    position: "absolute",
    top: 700,
  },
  separator: {
    width: "95%",
    height: 1,
    backgroundColor: AppColors.primaryColor,
    alignSelf: "center",
  },
  infoBox: {
    marginBottom: 2,
    marginTop: -2,
  },
  deleteView: {
    backgroundColor: AppColors.secondaryColor,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContainer: {
    width: "100%",
    flex: 1,
  },
  appPicker: {
    marginBottom: 2,
    fontSize: 16,
  },
  modal: {
    height: "81%",
    marginTop: "auto",
    backgroundColor: AppColors.tertiaryColor,
  },
  modalButton: { marginHorizontal: 5 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: AppColors.tertiaryColor,
    width: "100%",
    paddingVertical: 5,
  },
  input: { width: "100%", marginBottom: 2, fontWeight: "bold" },
  borderBottom: {
    height: 0.1,
    width: "95%",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.primaryColor,
  },
});

export default MemoriesScreen;
