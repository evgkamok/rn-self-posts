import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const MainScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Main Screen</Text>
      <Button title="Go to PostScreen" onPress={() => navigation.navigate('PostScreen')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
