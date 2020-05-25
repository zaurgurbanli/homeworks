import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress";
import { CustomText } from "./CustomText";

export const ListCard = ({
  title,
  onPress,
  boughtCount,
  totalBought,
  onLongPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        boughtCount === totalBought ? { opacity: 0.3 } : "",
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View style={styles.title}>
        <CustomText weight="semi" style={{ fontSize: 16 }}>
          {title}
        </CustomText>
        <CustomText>
          {boughtCount} / {totalBought}
        </CustomText>
      </View>
      <Progress.Bar
        color={"#FFD976"}
        unfilledColor={"#eee"}
        progress={totalBought === 0 ? 0 : boughtCount / totalBought}
        width={null}
        height={20}
        borderRadius={20}
        borderWidth={0}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "#ffe194",
    marginTop: 15,
  },

  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 2,
  },
});
