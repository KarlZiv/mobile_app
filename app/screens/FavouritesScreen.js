import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppInfoBox from "../components/AppInfoBox";
import AppListItem from "../components/AppListItem";
import AppScreen from "../components/AppScreen";
import AppColors from "../config/AppColors";
import DataManager from "../dataManager/DataManager";

let commonData = DataManager.geInstance();

function FavouritesScreen() {
  let favouriteMemories = commonData.getFavouriteMemories();

  const [memories, setMemories] = useState(favouriteMemories);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (memory) => {
    const tempMemories = memories.filter((item) => item.id !== memory.id);
    commonData.delete(memory);
    setMemories(tempMemories);
  };

  return (
    <AppScreen style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={AppColors.tertiaryColor}
        barStyle={"dark-content"}
      />
      <AppInfoBox style={styles.infoBox}>
        My{" "}
        {
          <MaterialCommunityIcons
            name="heart"
            color={AppColors.otherColor}
            size={18}
          />
        }{" "}
        Memories
      </AppInfoBox>

      <View style={styles.flatListContainer}>
        <FlatList
          data={memories}
          keyExtractor={(data) => data.id.toString()}
          refreshing={refreshing}
          onRefresh={() => {
            setMemories(commonData.getFavouriteMemories());
          }}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              message={item.message}
              id={item.id}
              icon={"emoticon-" + item.label.toLowerCase()}
              onPress={() => console.log("")}
              onSwipeLeft={() => (
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
              )}
              underlayColor={AppColors.secondaryColor}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
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
    marginVertical: 10,
    width: "100%",
  },
  infoBox: {
    marginBottom: 2,
    marginTop: -2,
  },
  separator: {
    width: "95%",
    height: 1,
    backgroundColor: AppColors.primaryColor,
    alignSelf: "center",
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
});

export default FavouritesScreen;
