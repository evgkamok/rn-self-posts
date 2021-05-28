import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Post } from "../components/Post";

export const AboutScreen = ( props ) => {
  return (
    <View style={styles.main}>
      <Text>About Screen</Text>
      <Button title="Navigate" onPress={ () => {props.navigation.navigate("Booked")}}/> 
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
