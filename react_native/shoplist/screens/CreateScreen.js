import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { CustomText } from "../components/CustomText";
import { CustomBtn } from "../components/CustomBtn";
import { useNavigation } from "@react-navigation/native";
import { addList, getLists } from "../store/notes";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  sections: getLists(state),
});

export const CreateScreen = connect(mapStateToProps, { addList })(
  ({ addList }) => {
    const [value, setValue] = useState("Something for me");
    const [selected, setSelected] = useState("regular");

    const navigation = useNavigation();

    const onSaveChanges = () => {
      addList({ name: value, type: selected });
      selected === "regular"
        ? navigation.navigate("Regular")
        : navigation.navigate("OneTime");
    };
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.heading}>
            <CustomText style={styles.headingText}>New list</CustomText>
          </View>
          <View
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: "white",
              flex: 1,
            }}
          >
            <View style={styles.main}>
              <CustomText style={styles.username}>list name</CustomText>
              <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={(v) => setValue(v)}
              />
              <View style={styles.btnWrapper}>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    selected === "regular" ? { opacity: 0.3 } : "",
                  ]}
                  onPress={() => setSelected("onetime")}
                >
                  <CustomText weight={selected === "onetime" ? "semi" : ""}>
                    One-Time
                  </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    selected === "onetime" ? { opacity: 0.3 } : "",
                  ]}
                  onPress={() => setSelected("regular")}
                >
                  <CustomText weight={selected === "regular" ? "semi" : ""}>
                    Regular
                  </CustomText>
                </TouchableOpacity>
              </View>

              <CustomBtn
                title={"Save Changes"}
                style={{ marginVertical: 15 }}
                onPress={onSaveChanges}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    marginHorizontal: 16,
  },
  username: {
    color: "#303234",
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#e5e5e5",
    borderRadius: 20,
    textAlign: "center",
  },
  btnWrapper: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    width: "100%",
  },
  btn: {
    width: "48%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    borderRadius: 20,
  },
});
