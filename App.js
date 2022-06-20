import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  return (
    <>
      <MainNavigation />
      <StatusBar style="light" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
