import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { RootNav } from "./Stack";
import { CustomDrawer } from "../components/CustomDrawer";

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawer = () => {
  return (
    <NavigationContainer>
      <Navigator
        drawerStyle={{
          width: 222,
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Screen name="Root" component={RootNav} />
      </Navigator>
    </NavigationContainer>
  );
};
