import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { getLists, addComponent, updateComponent } from "../store/notes";
import { CustomText } from "../components/CustomText";
import { CustomBtn } from "../components/CustomBtn";
import { BtnForUnits } from "../components/BtnForUnits";
import { ComponentCardEdit } from "../components/ComponentCardEdit";
import { ComponentCardStatic } from "../components/ComponentCardStatic";
const mapStateToProps = (state) => ({
  lists: getLists(state),
});
export const EditScreen = connect(mapStateToProps, {
  addComponent,
  updateComponent,
})(({ route, addComponent, updateComponent, lists }) => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  const [unit, setUnit] = useState("pkg");

  const [editMode, setEditMode] = useState(false);
  const [isEditPressed, seIsEditPressed] = useState(false);
  const [componentID, setComponentID] = useState("");

  const navigation = useNavigation();

  const {
    params: { listID },
  } = route;

  const addToList = () => {
    if (value && count !== 0)
      addComponent({
        listID,
        name: value.trim(),
        amount: count,
        unit,
      });
  };
  const getComponent = async () => {
    try {
      const component = await AsyncStorage.getItem("comp");
      if (component !== null) {
        const a = JSON.parse(component);
        console.log(a);
        setValue(a.name);
        setCount(a.amount);
        setUnit(a.unit);
        setComponentID(a.id);
      }
    } catch (error) {}
  };

  const onPressEdit = () => {
    seIsEditPressed(true);
    getComponent();
  };

  const updateHandler = () => {
    if (value && count !== 0)
      updateComponent({
        componentID,
        listID,
        name: value.trim(),
        amount: count,
        unit,
      });
    seIsEditPressed(false);
    setValue("");
    setCount(0);
    setUnit("pkg");
    setComponentID("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <TouchableOpacity
            style={{
              position: "absolute",
              left: 0,
              paddingLeft: 20,
              paddingTop: 5,
            }}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="md-arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <CustomText style={styles.headingText}>
            {lists.find((list) => list.id === listID).name}
          </CustomText>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              paddingRight: 20,
              paddingTop: 5,
            }}
            onPress={() => setEditMode((v) => !v)}
          >
            <Ionicons
              name={editMode ? "md-save" : "md-create"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          {editMode && (
            <>
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 10,
                  marginHorizontal: 16,
                }}
              >
                <View style={styles.nameWrapper}>
                  <CustomText>position name</CustomText>
                  <TextInput
                    style={styles.nameInput}
                    value={value}
                    onChangeText={(v) => setValue(v)}
                  />
                </View>
                <View style={styles.countWrapper}>
                  <CustomText>count</CustomText>
                  <View style={styles.counter}>
                    <TouchableOpacity
                      style={styles.counterIcon}
                      onPress={() => setCount((c) => c - 1)}
                    >
                      <Ionicons name="md-remove" size={20} />
                    </TouchableOpacity>
                    <TextInput
                      value={count.toString()}
                      style={{ textAlign: "center", fontWeight: "bold" }}
                      maxLength={3}
                      keyboardType="numeric"
                      onChangeText={(v) => setCount(v)}
                    />
                    <TouchableOpacity
                      style={styles.counterIcon}
                      onPress={() => setCount((c) => c + 1)}
                    >
                      <Ionicons name="md-add" size={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.btnWrapper}>
                <BtnForUnits
                  title="pkg"
                  style={unit === "pkg" ? { opacity: 1 } : ""}
                  fontWeight={unit === "pkg" ? "bold" : "regular"}
                  onPress={() => {
                    setUnit("pkg");
                  }}
                />
                <BtnForUnits
                  title="kg"
                  style={unit === "kg" ? { opacity: 1 } : ""}
                  fontWeight={unit === "kg" ? "bold" : "regular"}
                  onPress={() => {
                    setUnit("kg");
                  }}
                />
                <BtnForUnits
                  title="litre"
                  style={unit === "litre" ? { opacity: 1 } : ""}
                  fontWeight={unit === "litre" ? "bold" : "regular"}
                  onPress={() => {
                    setUnit("litre");
                  }}
                />
                <BtnForUnits
                  title="bott"
                  style={unit === "bott" ? { opacity: 1 } : ""}
                  fontWeight={unit === "bott" ? "bold" : "regular"}
                  onPress={() => {
                    setUnit("bott");
                  }}
                />
              </View>
              <View
                style={{
                  marginHorizontal: 16,
                  marginVertical: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {isEditPressed ? (
                  <>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={() => seIsEditPressed(false)}
                    >
                      <CustomText style={styles.btnText}>Cancel</CustomText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.btn}
                      onPress={updateHandler}
                    >
                      <CustomText style={styles.btnText}>Update</CustomText>
                    </TouchableOpacity>
                  </>
                ) : (
                  <CustomBtn title="Add to list" onPress={addToList} />
                )}
              </View>
              <View
                style={{
                  height: 2,
                  backgroundColor: "#eee",
                  marginVertical: 10,
                }}
              ></View>
              <View style={styles.compWrapper}>
                <ComponentCardEdit
                  lists={lists}
                  id={listID}
                  onPressEdit={onPressEdit}
                />
              </View>
            </>
          )}
          {!editMode && (
            <View style={styles.compWrapper}>
              <ComponentCardStatic lists={lists} id={listID} />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

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
  },
  nameWrapper: {
    width: "60%",
    alignItems: "center",
  },
  nameInput: {
    marginTop: 5,
    backgroundColor: "#eee",
    borderRadius: 20,
    width: "100%",
    height: 40,
    textAlign: "center",
  },
  countWrapper: {
    alignItems: "center",
    marginHorizontal: 16,
    justifyContent: "center",
    width: "35%",
  },
  counter: {
    marginTop: 5,
    backgroundColor: "#eee",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    width: "100%",
    justifyContent: "center",
  },
  counterIcon: {
    paddingHorizontal: 12,
  },
  unitBtn: {
    width: "25%",
    fontSize: 12,
    backgroundColor: "#eee",
    marginLeft: 16,
  },
  btnWrapper: {
    flexDirection: "row",
    marginHorizontal: 16,
  },
  compWrapper: {
    marginHorizontal: 16,
  },

  btn: {
    paddingVertical: 12,
    backgroundColor: "#8661C1",
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 48,
  },
  btnText: {
    color: "white",
    textTransform: "uppercase",
  },
});
