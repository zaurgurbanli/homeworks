import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { CustomText } from "../components/CustomText";
import { CustomBtn } from "../components/CustomBtn";

export const SettingScreen = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");

  const saveChanges = async () => {
    await AsyncStorage.setItem("userInfo", JSON.stringify({ value, url }));
    navigation.navigate("OneTime");
  };
  const getUser = async () => {
    try {
      const userInfo = await AsyncStorage.getItem("userInfo");
      if (userInfo !== null) {
        const a = JSON.parse(userInfo);
        setValue(a.value);
        setUrl(a.url);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <CustomText style={styles.headingText}>User Settings</CustomText>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View style={styles.main}>
            <CustomText style={styles.username}>username</CustomText>
            <TextInput
              style={styles.textInput}
              value={value}
              placeholder="Username"
              placeholderTextColor="black"
              onChangeText={(v) => setValue(v)}
            />
            <CustomText style={styles.username}>avatar url</CustomText>
            <TextInput
              style={styles.textInput}
              value={url}
              placeholder="https://www.image.com/image.jpg"
              placeholderTextColor="black"
              onChangeText={(v) => setUrl(v)}
            />
            <CustomBtn
              title={"Save Changes"}
              style={{ marginVertical: 15 }}
              onPress={saveChanges}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
});
