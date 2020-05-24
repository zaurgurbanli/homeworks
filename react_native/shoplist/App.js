import React, { useState } from "react";
import { AppLoading } from "expo";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

import { RootDrawer } from "./navigation/Drawer";
import { loadFonts } from "./styles/fonts";
import store from "./store";
import { persistor } from "./store";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoaded(true)}
        onError={() => console.log("Loading failed")}
      />
    );
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RootDrawer />
      </PersistGate>
    </Provider>
  );
}
