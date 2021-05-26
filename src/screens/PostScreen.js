import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const PostScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Post Screen</Text>
      <Button title="Go to MainScreen" onPress={() => navigation.push('PostScreen')}/>
      <Button title="Go to Home" onPress={() => navigation.navigate('MainScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
