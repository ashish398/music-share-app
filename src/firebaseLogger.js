import analytics from "./firebaseConfig";
import { logEvent } from "firebase/analytics";

export const logScreen = (screenName) => {
  console.log("running2");
  logEvent(analytics, "screen_view", {
    firebase_screen: screenName,
  });
};
