import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

export const AboutScreen = () => {
  return (
    <View style={styles.main}>
      <Text>This is About Screen</Text>
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
