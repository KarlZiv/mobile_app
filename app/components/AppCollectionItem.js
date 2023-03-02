import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

function AppCollectionItem({ title, subtitle, image, style }) {
  return (
    <View style={[styles.container, style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.view}>
        {title && <AppText style={styles.ItemTitle}>{title}</AppText>}
        {subtitle && <AppText style={styles.ItemSubtitle}>{subtitle}</AppText>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: AppColors.tertiaryColor,
    height: 160,
    width: "100%",
    marginVertical: 15,
    marginLeft: 20,
  },
  image: { width: 160, height: 160, borderRadius: 30 },
  view: {
    marginLeft: 10,
    padding: 10,
  },
  ItemTitle: {
    color: AppColors.otherColor,
    marginTop: 15,
    fontSize: 20,
  },
  ItemSubtitle: {
    color: AppColors.secondaryColor,
    fontSize: 14,
    marginTop: 8,
    width: "80%",
  },
});

export default AppCollectionItem;
