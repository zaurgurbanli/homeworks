import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { connect } from "react-redux";

import { CustomText } from "./CustomText";
import { getLists, toggleBought, resetBought } from "../store/notes";

const mapStateToProps = (state) => ({
  lists: getLists(state),
});

export const ComponentCardStatic = connect(mapStateToProps, {
  toggleBought,
  resetBought,
})(({ toggleBought, resetBought, lists, id }) => {
  const getComponentCount = () => {
    const list = lists.find((list) => list.id === id);
    let count = 0;
    for (let i = 0; i < list.components.length; i++) {
      if (list.components[i].bought) count++;
    }
    return `${count}/${list.components.length}`;
  };
  return (
    <>
      <View style={styles.resetWrapper}>
        <TouchableOpacity
          style={styles.resetBtn}
          onPress={() => resetBought({ listID: id })}
        >
          <CustomText style={styles.resetBtnText}>Reset</CustomText>
        </TouchableOpacity>
        <CustomText weight="semi">{getComponentCount()}</CustomText>
      </View>
      <ScrollView>
        {lists
          .find((list) => list.id === id)
          .components.map((comp) => (
            <TouchableOpacity
              key={comp.id}
              style={[styles.container, comp.bought ? { opacity: 0.3 } : ""]}
              onLongPress={() =>
                toggleBought({ componentID: comp.id, listID: id })
              }
            >
              <CustomText style={styles.textsMargin}>{comp.name}</CustomText>
              <CustomText style={styles.textsMargin}>
                x{comp.amount} {comp.unit}
              </CustomText>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </>
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
    alignItems: "center",
    height: 40,
  },
  textsMargin: {
    marginHorizontal: 16,
  },
  resetWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  resetBtn: {
    backgroundColor: "#8661C1",
    borderRadius: 20,
  },
  resetBtnText: {
    color: "white",
    fontSize: 10,
    textTransform: "uppercase",
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
});
