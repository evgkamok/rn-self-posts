import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { Post } from "../components/Post";
import { DATA } from "../data";


export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("PostScreen", { postId: post.id, date: post.date, booked: post.booked });
  };

  return (
    <View>
      <FlatList
        data={DATA.filter(post => post.booked)}
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

