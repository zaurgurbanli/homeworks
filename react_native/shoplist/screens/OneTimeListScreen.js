import React from "react";
import { StyleSheet, Text, View, ScrollView, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { getLists, deleteList } from "../store/notes";
import { CustomText } from "../components/CustomText";
import { MenuHeaderIcon } from "../components/MenuHeaderIcon";
import { ListCard } from "../components/ListCard";
import { useNavigation } from "@react-navigation/native";

export function getCountOfElements(list) {
  let count = 0;
  for (let i = 0; i < list.components.length; i++) {
    if (list.components[i].bought) count++;
  }
  return count;
}

const mapStateToProps = (state) => ({
  lists: getLists(state),
});
export const OneTimeListScreen = connect(mapStateToProps, { deleteList })(
  ({ lists, deleteList }) => {
    const navigation = useNavigation();

    function getCountOfElements(list) {
      let count = 0;
      for (let i = 0; i < list.components.length; i++) {
        if (list.components[i].bought) count++;
      }
      return count;
    }
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <CustomText style={styles.headingText}>One Time List</CustomText>
          <View style={{ position: "absolute", right: 0 }}>
            <MenuHeaderIcon />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.list}>
            <ScrollView>
              {lists.map((list) => (
                <View key={list.id}>
                  {list.type === "onetime" && (
                    <ListCard
                      title={list.name}
                      boughtCount={getCountOfElements(list)}
                      totalBought={list.components.length}
                      onPress={() => {
                        const listID = list.id;
                        navigation.navigate("Edit", { listID });
                      }}
                      onLongPress={() => deleteList({ listID: list.id })}
                    />
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8661C1",
  },
  heading: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  headingText: {
    color: "white",
    fontSize: 16,
    paddingVertical: 22,
  },
  main: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  list: {
    marginTop: 20,
    width: "92%",
  },
});
