import React from "react";
import { PostList } from "../components/PostList";
import { DATA } from "../data";

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = (post) => {
    navigation.navigate("PostScreen", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return (
    <PostList data={DATA.filter((item) => item.booked)} onOpen={openPostHandler} />
  );
};
