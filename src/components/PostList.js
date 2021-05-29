import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Post } from "../components/Post";

export const PostList = ({ data, onOpen }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
