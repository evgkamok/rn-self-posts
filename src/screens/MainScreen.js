import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Post } from "../components/Post";
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("PostScreen", { postId: post.id, date: post.date });
  };

  return (
    <View>
      <Text>Main Screen</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
        keyExtractor={(item) => item.id.toString()}
      />
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
