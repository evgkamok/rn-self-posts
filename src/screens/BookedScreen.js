import React from "react";
import { useSelector } from "react-redux";
import { PostList } from "../components/PostList";

export const BookedScreen = ({ navigation }) => {
  const bookedPosts = useSelector((state) => state.posts.bookedPosts);

  const openPostHandler = (post) => {
    navigation.navigate("PostScreen", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return <PostList data={bookedPosts} onOpen={openPostHandler} />;
};
