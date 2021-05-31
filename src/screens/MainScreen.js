import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostList } from "../components/PostList";
import { loadPostsAction } from "../store/reducers/postsReducer";

export const MainScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsAction());
  }, []);

  const allPosts = useSelector((state) => state.posts.allPosts);

  const openPostHandler = (post) => {
    navigation.navigate("PostScreen", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  return <PostList data={allPosts} onOpen={openPostHandler} />;
};
``;
