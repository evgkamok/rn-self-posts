import React, { useState } from "react";
import { Provider } from "react-redux";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { bootstrap } from "./src/bootstrap";
import { RootNavigator } from "./src/navigation/RootNavigator";
import store from "./src/store/index";

import { LogBox } from 'react-native';
LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
]);


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
    <Provider store={store}>
      <RootNavigator />
    </Provider>
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
