import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CustomText } from "./CustomText";
import { deleteComponent, getLists } from "../store/notes";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  lists: getLists(state),
});
export const ComponentCardEdit = connect(mapStateToProps, {
  deleteComponent,
})(({ deleteComponent, lists, id, onPressEdit }) => {
  const onPressHandler = async (comp) => {
    await AsyncStorage.setItem("comp", JSON.stringify(comp));
  };

  return (
    <ScrollView>
      {lists
        .find((list) => list.id === id)
        .components.map((comp) => (
          <View key={comp.id} style={styles.container}>
            <View style={styles.wrapper}>
              <TouchableOpacity
                style={styles.editIcon}
                onPress={() => {
                  onPressHandler(comp);
                  onPressEdit();
                }}
              >
                <Ionicons name="md-create" color="white" size={26} />
              </TouchableOpacity>
              <CustomText style={styles.textsMargin}>{comp.name}</CustomText>
            </View>

            <View style={styles.wrapper}>
              <CustomText style={styles.textsMargin}>
                x{comp.amount} {comp.unit}
              </CustomText>
              <TouchableOpacity
                style={styles.closeIcon}
                onPress={() =>
                  deleteComponent({ componentID: comp.id, listID: id })
                }
              >
                <Ionicons name="md-close" color="white" size={28} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 27,
    borderWidth: 2,
    borderColor: "#FFE194",
    marginBottom: 15,
    justifyContent: "space-between",
    height: 40,
  },
  editIcon: {
    backgroundColor: "#FFD976",
    borderRadius: 35,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    backgroundColor: "#FF7676",
    borderRadius: 35,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  textsMargin: {
    marginHorizontal: 16,
  },
});
