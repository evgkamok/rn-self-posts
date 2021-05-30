import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { bootstrap } from "./src/bootstrap";
import { RootNavigator } from "./src/navigation/RootNavigator";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <View>
        <AppLoading
          startAsync={bootstrap}
          onFinish={() => setIsReady(true)}
          onError={(err) => console.log(err)}
        />
      </View>
    );
  }

  return (
      <RootNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

