import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const MenuHeaderIcon = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={navigation.toggleDrawer}
    >
      <Ionicons name="md-menu" size={24} color="white" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingTop: 5,
  },
});
