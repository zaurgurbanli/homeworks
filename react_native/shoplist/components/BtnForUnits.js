import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";

import { CustomText } from "./CustomText";

export const BtnForUnits = ({ title, onPress, style, fontWeight, ...rest }) => {
  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <View style={[styles.container, style]}>
      <Touchable onPress={onPress} {...rest}>
        <View style={styles.btn}>
          <CustomText
            style={styles.title}
            numberOfLines={1}
            weight={fontWeight}
          >
            {title}
          </CustomText>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Math.round(Dimensions.get("screen").width) / 4 - 20,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 16,
    opacity: 0.3,
  },
  btn: {
    backgroundColor: "#eee",
    borderRadius: 30,
    paddingVertical: 12,
  },
  title: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
  },
});
