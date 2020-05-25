import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import { getLists, deleteList } from "../store/notes";
import { CustomText } from "../components/CustomText";
import { MenuHeaderIcon } from "../components/MenuHeaderIcon";
import { ListCard } from "../components/ListCard";
import { getCountOfElements } from "./OneTimeListScreen";
import { useNavigation } from "@react-navigation/native";

const mapStateToProps = (state) => ({
  lists: getLists(state),
});

export const RegularListScreen = connect(mapStateToProps, { deleteList })(
  ({ lists, deleteList }) => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <CustomText style={styles.headingText}>Regular List</CustomText>
          <View style={{ position: "absolute", right: 0 }}>
            <MenuHeaderIcon />
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.list}>
            <ScrollView>
              {lists.map((list) => (
                <View key={list.id}>
                  {list.type === "regular" && (
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
