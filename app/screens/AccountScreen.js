import React from "react";
import {
  View,
  StyleSheet,
  TouchableHighlight,
  FlatList,
  Image,
  StatusBar,
} from "react-native";

import AppButton from "../components/AppButton";
import AppCollectionItem from "../components/AppCollectionItem";
import AppInfoBox from "../components/AppInfoBox";
import AppScreen from "../components/AppScreen";
import DataManager from "../dataManager/DataManager";
import AppColors from "../config/AppColors";

let commonData = DataManager.geInstance();

function AccountScreen({ navigation }) {
  let collectionData = commonData.collectionData;
  StatusBar.setBarStyle("light-content", true);

  return (
    <AppScreen style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image source={commonData.getUserImage()} style={styles.image} />
        </View>
        <AppInfoBox style={styles.infoBox}>
          {commonData.getUsersName()}
        </AppInfoBox>

        <View style={styles.buttonContainer}>
          <AppButton
            title="Logout"
            style={styles.button}
            fontSize={12}
            color={AppColors.otherColor}
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: 10 }} />
      <View style={styles.flatListContainer}>
        <FlatList
          data={collectionData}
          keyExtractor={(data) => data.id.toString()}
          renderItem={({ item }) => (
            <TouchableHighlight
              underlayColor={AppColors.tertiaryColor}
              onPress={() => {
                commonData.setCollection(item.id);
                navigation.navigate("Memories");
              }}
            >
              <AppCollectionItem
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
              />
            </TouchableHighlight>
          )}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: AppColors.tertiaryColor,
  },
  item: {
    marginVertical: 1,
    width: "100%",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "center",
  },
  imageContainer: {
    backgroundColor: AppColors.tertiaryColor,
    width: "20%",
    justifyContent: "center",
    height: 60,
  },
  button: {
    width: 80,
    height: 38,
    fontSize: 12,
    alignSelf: "center",
    left: 15,
    height: 30,
    padding: 5,
    borderWidth: 1,
    borderColor: AppColors.otherColor,
    backgroundColor: AppColors.tertiaryColor,
    color: AppColors.otherColor,
  },
  topBar: {
    width: "100%",
    flexDirection: "row",
  },
  infoBox: {
    marginBottom: 2,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "50%",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: AppColors.primaryColor,
    alignSelf: "center",
  },
  flatListContainer: {
    width: "100%",
    flex: 1,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: -2,
  },
  buttonContainer: {
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    width: "30%",
    backgroundColor: AppColors.tertiaryColor,
  },
  borderBottom: {
    height: 0.1,
    width: "95%",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.primaryColor,
  },
});

export default AccountScreen;
