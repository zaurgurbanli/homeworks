import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  OneTimeListScreen,
  CreateScreen,
  EditScreen,
  SettingScreen,
  RegularListScreen,
} from "../screens";
import { MenuHeaderIcon } from "../components/MenuHeaderIcon";

const { Navigator, Screen } = createStackNavigator();

export const RootNav = () => (
  <Navigator>
    <Screen
      name="OneTime"
      component={OneTimeListScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Create"
      component={CreateScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Edit"
      component={EditScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Setting"
      component={SettingScreen}
      options={{ headerShown: false }}
    />
    <Screen
      name="Regular"
      component={RegularListScreen}
      options={{ headerShown: false }}
    />
  </Navigator>
);
