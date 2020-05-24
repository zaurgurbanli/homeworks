import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import { CustomText } from "./CustomText";

export const CustomBtn = ({ title, onPress, style, ...rest }) => {
  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View style={[styles.container, style]}>
      <Touchable onPress={onPress} {...rest}>
        <View style={styles.btn}>
          <CustomText style={styles.title} numberOfLines={1}>
            {title}
          </CustomText>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  btn: {
    backgroundColor: "#8661C1",
    borderRadius: 30,
    paddingVertical: 12,
  },
  title: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
