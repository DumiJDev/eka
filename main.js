import { registerRootComponent } from "expo";
import { activateKeepAwake } from "expo-keep-awake";
import { createRoot } from "react-dom/client";
import { Platform } from "react-native";

import App from "./App";

import "expo/build/Expo.fx";

/* CHANGE THE PATH BASED ON WHERE YOURS IS LOCATED */

if (__DEV__) {
  activateKeepAwake();
}

if (Platform.OS === "web") {
  const root = createRoot(
    document.getElementById("root") ?? document.getElementById("main")
  );
  root.render(<App />);
} else {
  registerRootComponent(App);
}