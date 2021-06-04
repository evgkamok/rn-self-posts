import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Post } from "../components/Post";

export const PostList = ({ data, onOpen }) => {

  
  if (!data.length) {
    return (
      <View style={styles.emptyData}>
        <Text style={styles.text}>Add your first post</Text>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  emptyData: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontFamily: "open-bold"
  }
})