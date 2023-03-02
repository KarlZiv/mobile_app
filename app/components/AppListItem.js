import React from "react";
import { View, StyleSheet, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppText from "./AppText";
import DataManager from "../dataManager/DataManager";

let commonData = DataManager.geInstance();

function AppListItem({
  title,
  message,
  style,
  underlayColor,
  onSwipeLeft,
  icon,
  id,
}) {
  return (
    <Swipeable renderRightActions={onSwipeLeft}>
      <TouchableHighlight underlayColor={underlayColor}>
        <View style={[styles.container, style]}>
          <View style={styles.view}>
            <View style={styles.titleContainer}>
              <View style={styles.titleContainerInner}>
                <AppText style={styles.itemTitle}>{title}</AppText>
              </View>
              <View style={styles.iconContainerInner}>
                <MaterialCommunityIcons
                  style={styles.icon}
                  name={icon}
                  size={26}
                  color={AppColors.otherColor}
                />
              </View>
            </View>
            <AppText style={styles.itemDate}>
              {commonData.getMemoryDate(id)}
            </AppText>
            {message && <AppText style={styles.itemMessage}>{message}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: AppColors.tertiaryColor,
    height: 120,
    width: "100%",
  },
  view: {
    marginLeft: 10,
  },
  itemTitle: {
    color: AppColors.otherColor,
    marginTop: 15,
    padding: 2,
    fontSize: 16,
  },
  itemDate: {
    color: AppColors.secondaryColor,
    fontSize: 12,
    padding: 2,
  },
  itemMessage: {
    color: AppColors.secondaryColor,
    fontSize: 14,
    marginTop: 2,
    padding: 2,
    width: "75%",
  },
  titleContainer: {
    flexDirection: "row",
  },
  icon: { marginRight: 20, top: 5 },
  titleContainerInner: {
    width: "80%",
  },
  iconContainerInner: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default AppListItem;
