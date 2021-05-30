import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";


export const CreatPostScreen = ( props ) => {

  return (
    <View style={styles.main}>
      <Text>Create Post Screen</Text>
      <Button title="Navigate" onPress={ () => {props.navigation.navigate("About")}}/> 
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
