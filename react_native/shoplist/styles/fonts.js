import * as Font from "expo-font";

import MontserratRegular from "../assets/fonts/Montserrat-Regular.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import MontserratSemiBold from "../assets/fonts/Montserrat-SemiBold.ttf";

export const loadFonts = () => {
  return Font.loadAsync({
    MontserratRegular,
    MontserratSemiBold,
    MontserratBold,
  });
};
