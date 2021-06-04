import React, { useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { THEME } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { toggleBooked, deletePost } from "../store/reducers/postsReducer";

export const PostScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { postId, booked } = route.params;
  const post = useSelector((state) =>
    state.posts.allPosts.find((post) => post.id === postId)
  );


  const toggleBookedHandler = useCallback(() => {
    dispatch(toggleBooked(post));
    navigation.setParams({ booked: !booked });
  }, [dispatch, postId, booked]);

  useEffect(() => {
    navigation.setParams({ toggleBookedHandler });
  }, [toggleBookedHandler]);

  const removePostHandler = () => {
    Alert.alert(
      "Delete post",
      "You sure want to delete this post ?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            navigation.navigate("MainScreen");
            dispatch(deletePost(postId));
          },
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  if (!post) {
    return null
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.img} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title={"Delete post"}
        color={THEME.DANGER_COLOR}
        onPress={removePostHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: "open-regular",
  },
});
