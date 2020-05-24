import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  AsyncStorage,
} from "react-native";

import userImg from "../assets/user.png";
import { CustomText } from "./CustomText";

export const CustomDrawer = ({ navigation }) => {
  const [user, setUser] = useState("Username");
  const [image, setImage] = useState("");

  const getUser = async () => {
    try {
      const userInfo = await AsyncStorage.getItem("userInfo");
      if (userInfo !== null) {
        const a = JSON.parse(userInfo);
        setUser(a.value);
        setImage(a.url);
      }
    } catch (error) {}
  };
  getUser();
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.userImg}
          source={image ? { uri: image } : userImg}
        />
        <CustomText style={styles.username}>{user}</CustomText>
      </View>
      <View style={styles.screens}>
        <TouchableOpacity
          style={styles.newList}
          onPress={() => navigation.navigate("Create")}
        >
          <CustomText weight="semi" style={styles.newListText}>
            Add new list
          </CustomText>
        </TouchableOpacity>
        <View style={{ marginTop: 36 }}>
          <TouchableOpacity
            style={styles.newList}
            onPress={() => navigation.navigate("OneTime")}
          >
            <CustomText weight="semi" style={styles.newListText}>
              One-time list
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.newList}
            onPress={() => navigation.navigate("Regular")}
          >
            <CustomText weight="semi" style={styles.newListText}>
              Regular lists
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.newList}
            onPress={() => navigation.navigate("Setting")}
          >
            <CustomText weight="semi" style={styles.newListText}>
              User Settings{" "}
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 15,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  username: {
    marginLeft: 20,
    fontSize: 22,
    color: "#303234",
  },
  screens: {
    backgroundColor: "#8661C1",
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    height: "100%",
    paddingHorizontal: 15,
  },
  newList: {
    marginTop: 16,
    backgroundColor: "white",
    borderRadius: 20,
  },
  newListText: {
    color: "#8661C1",
    marginVertical: 7,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
