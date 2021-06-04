import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../components/PostList";
import { getPosts } from "../store/reducers/postsReducer";

export const MainScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);


  const allPosts = useSelector((state) => state.posts.allPosts);

  const openPostHandler = (post) => {
    navigation.navigate("PostScreen", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return <PostList data={allPosts} onOpen={openPostHandler} />
}