import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

export const AboutScreen = ( props ) => {
  return (
    <View style={styles.main}>
      <Text>About Screen</Text>
      <Button title="Navigate" onPress={ () => {props.navigation.navigate("CreatePost")}}/> 
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